const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const ora = require('ora')
const { resolveUtilsPath, readComponentsJson, writeComponentsJson, replaceTemplatePlaceholders } = require('./utils')

/**
 * Install component from registry
 */
async function install(componentName: string, options: { all?: boolean }) {
  const spinner = ora('Installing component...').start()
  
  try {
    const cwd = process.cwd()
    const componentsJson = readComponentsJson(cwd)
    
    if (!componentsJson) {
      spinner.fail('components.json not found')
      console.error(chalk.red('Please run: starscape-ui init'))
      process.exit(1)
    }
    
    // Find registry path (relative to CLI package location)
    const cliPackagePath = path.resolve(__dirname, '../..')
    const registryPath = path.join(cliPackagePath, '../packages/ui-registry-web/registry')
    const registryJsonPath = path.join(registryPath, 'registry.json')
    
    if (!fs.existsSync(registryJsonPath)) {
      spinner.fail('Registry not found')
      console.error(chalk.red('Registry files not found. Make sure @starscape/ui-registry-web is installed.'))
      console.error(chalk.dim(`Looking for: ${registryJsonPath}`))
      process.exit(1)
    }
    
    const registryJson = JSON.parse(fs.readFileSync(registryJsonPath, 'utf-8'))
    
    let componentsToInstall = []
    
    if (options.all) {
      componentsToInstall = registryJson.components
      spinner.text = `Installing ${componentsToInstall.length} components...`
    } else {
      const component = registryJson.components.find((c: any) => c.name === componentName)
      if (!component) {
        spinner.fail(`Component "${componentName}" not found`)
        console.error(chalk.red(`Available components: ${registryJson.components.map((c: any) => c.name).join(', ')}`))
        process.exit(1)
      }
      componentsToInstall = [component]
    }
    
    // Resolve utils path
    const utilsPath = resolveUtilsPath(cwd, componentsJson)
    
    // Install each component
    for (const component of componentsToInstall) {
      spinner.text = `Installing ${component.name}...`
      
      // Determine destination directory
      // Resolve @ alias from tsconfig or use default
      let uiDir = componentsJson.aliases?.ui || 'src/components/ui'
      if (uiDir.startsWith('@/')) {
        // Resolve @ alias from tsconfig.json
        const tsconfigPath = path.join(cwd, 'tsconfig.json')
        if (fs.existsSync(tsconfigPath)) {
          try {
            const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'))
            const paths = tsconfig.compilerOptions?.paths || {}
            for (const [key, value] of Object.entries(paths)) {
              if (key === '@/*' || key.includes('@')) {
                const basePath = Array.isArray(value) ? value[0] : value
                const resolvedPath = basePath.replace('/*', '')
                // Replace @/components/ui with resolved path
                uiDir = uiDir.replace('@/', resolvedPath + '/')
                uiDir = path.join(cwd, uiDir)
                break
              }
            }
          } catch (error) {
            // Fall back to default
            uiDir = path.join(cwd, 'src/components/ui')
          }
        } else {
          uiDir = path.join(cwd, 'src/components/ui')
        }
      } else {
        uiDir = path.join(cwd, uiDir)
      }
      
      if (!fs.existsSync(uiDir)) {
        fs.mkdirSync(uiDir, { recursive: true })
      }
      
      // Copy component files
      for (const file of component.files) {
        // file is already relative to registry root (e.g., "components/button.tsx")
        const templatePath = path.join(registryPath, file + '.template')
        
        if (!fs.existsSync(templatePath)) {
          spinner.warn(`Template not found: ${templatePath}`)
          continue
        }
        
        const templateContent = fs.readFileSync(templatePath, 'utf-8')
        
        // Replace placeholders
        const finalContent = replaceTemplatePlaceholders(templateContent, utilsPath, 'tailwindcss')
        
        // Write to destination
        const fileName = path.basename(file)
        const destPath = path.join(uiDir, fileName)
        
        // Check if file exists and warn
        if (fs.existsSync(destPath)) {
          spinner.warn(`${component.name} already exists at ${destPath}`)
        } else {
          fs.writeFileSync(destPath, finalContent)
        }
      }
      
      // Check dependencies
      if (component.dependencies && component.dependencies.length > 0) {
        spinner.text = `Checking dependencies for ${component.name}...`
        const packageJsonPath = path.join(cwd, 'package.json')
        if (fs.existsSync(packageJsonPath)) {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
          const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies }
          const missingDeps = component.dependencies.filter((dep: string) => !allDeps[dep])
          
          if (missingDeps.length > 0) {
            spinner.warn(`Missing dependencies: ${missingDeps.join(', ')}`)
            console.log(chalk.yellow(`⚠ Install: npm install ${missingDeps.join(' ')}`))
          }
        }
      }
    }

    // Copy assets (shared assets like starscape-star.png)
    const assetsPath = path.join(registryPath, 'assets')
    if (fs.existsSync(assetsPath)) {
      spinner.text = 'Copying assets...'
      // Try to find public directory (common patterns: public, src/public, app/public)
      const possiblePublicDirs = [
        path.join(cwd, 'public'),
        path.join(cwd, 'src', 'public'),
        path.join(cwd, 'app', 'public'),
      ]
      
      let publicDir = null
      for (const dir of possiblePublicDirs) {
        if (fs.existsSync(dir)) {
          publicDir = dir
          break
        }
      }
      
      // If no public dir found, create one
      if (!publicDir) {
        publicDir = path.join(cwd, 'public')
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true })
        }
      }
      
      // Copy all assets from registry/assets to project public
      const assets = fs.readdirSync(assetsPath)
      for (const asset of assets) {
        const srcAssetPath = path.join(assetsPath, asset)
        const destAssetPath = path.join(publicDir, asset)
        
        if (fs.statSync(srcAssetPath).isFile()) {
          if (fs.existsSync(destAssetPath)) {
            spinner.warn(`Asset ${asset} already exists, skipping`)
          } else {
            fs.copyFileSync(srcAssetPath, destAssetPath)
          }
        }
      }
    }
    
    spinner.succeed(`Installed ${componentsToInstall.length} component(s)`)
    console.log(chalk.green(`✅ Components installed to ${componentsJson.aliases?.ui || 'src/components/ui'}`))
    
  } catch (error: any) {
    spinner.fail('Failed to install component')
    console.error(chalk.red(error.message))
    console.error(chalk.gray(error.stack))
    process.exit(1)
  }
}

module.exports = { install }

export {}

