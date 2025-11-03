import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { Badge } from './components/ui/badge'
import { Divider } from './components/ui/divider'
import { Avatar } from './components/ui/avatar'
import { PromoLinkCardSparkles } from './components/ui/promo-link-card-sparkles'
import { PromoLinkCardStarscapeStar } from './components/ui/promo-link-card-starscape-star'
import Hero from './components/Hero'
import ExpandableUISystem from './components/ExpandableUISystem'
import Footer from './components/Footer'
import GlassMorphismPlayground from './components/GlassMorphismPlayground'
import { Sparkles, Star, SunDim, Zap, Heart, Wand2, Waves, Leaf, Circle } from 'lucide-react'

// # Install components
// starscape-ui add animated-star
// starscape-ui add promo-link-card-sparkles
// starscape-ui add promo-link-card-starscape-star

// # Or install all
// starscape-ui add --all

// then add 

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <main className="cosmic-background">
      <Hero />
      <ExpandableUISystem />
      
      {/* Demo Content Section */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Chic Colors Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Chic Colors</CardTitle>
              <CardDescription>Starscape business card colors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-dark-navy"></div>
                  <p className="text-caption text-muted-foreground">Dark Navy</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-mid-navy"></div>
                  <p className="text-caption text-muted-foreground">Mid Navy</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-deep-blue"></div>
                  <p className="text-caption text-muted-foreground">Deep Blue</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-light-blue"></div>
                  <p className="text-caption text-muted-foreground">Light Blue</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chromatic Colors Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Chromatic Colors</CardTitle>
              <CardDescription>Starscape apps colors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-chromatic-purple"></div>
                  <p className="text-caption text-white-tertiary">Purple Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-chromatic-pink"></div>
                  <p className="text-caption text-white-tertiary">Pink Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-chromatic-violet"></div>
                  <p className="text-caption text-white-tertiary">Violet Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-chromatic-blue"></div>
                  <p className="text-caption text-white-tertiary">Blue Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-chromatic-cyan"></div>
                  <p className="text-caption text-white-tertiary">Cyan Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-chromatic-teal"></div>
                  <p className="text-caption text-white-tertiary">Teal Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-chromatic-yellow"></div>
                  <p className="text-caption text-white-tertiary">Yellow Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-chromatic-emerald"></div>
                  <p className="text-caption text-white-tertiary">Emerald Base</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Buttons Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Starscape button variants</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button variant="default">Default (Cosmic)</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="gradient">Gradient</Button>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <Button variant="cosmic">Cosmic</Button>
              <Button variant="cosmicSolid">Cosmic Solid</Button>
              <Button variant="cosmicGhost">Cosmic Ghost</Button>
              <Button variant="cosmicCreate">Create</Button>
            </CardFooter>
            <CardFooter className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🎨</Button>
            </CardFooter>
          </Card>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
                <CardDescription className="text-gray-700">Card variant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-gray-700">
                  This card uses the glass-white variant with backdrop blur effects.
                </p>
              </CardContent>
            </Card>

            <Card variant="dark-glass">
              <CardHeader>
                <CardTitle>Dark Glass</CardTitle>
                <CardDescription>Card variant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-white/80">
                  This card uses the dark-glass variant with a darker backdrop.
                </p>
              </CardContent>
            </Card>

            <Card variant="gradient-cyan-purple">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>Purple-blue gradient</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-white/80">
                  This card uses the gradient variant with a vibrant purple-blue gradient.
                </p>
              </CardContent>
            </Card>
            
            <Card variant="gradient-purple-blue">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>Purple-blue gradient</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-white/80">
                  This card uses the gradient variant with a vibrant purple-blue gradient.
                </p>
              </CardContent>
            </Card>

            <Card variant="gradient-pink-purple">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>Purple-blue gradient</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-white/80">
                  This card uses the gradient variant with a vibrant purple-blue gradient.
                </p>
              </CardContent>
            </Card>

            <Card variant="gradient-cyan-vibrant">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>Purple-blue gradient</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-white/80">
                  This card uses the gradient variant with a vibrant purple-blue gradient.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* All Gradients Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>All Gradients</CardTitle>
              <CardDescription>Complete gradient palette</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Card variant="gradient-deepspace" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Deepspace</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-deepspace-hover" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Deepspace Hover</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-cyan-vibrant" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Cyan Vibrant</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-cosmic" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Cosmic</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-purple-pink" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Purple-Pink</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-pink-purple" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Pink-Purple</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-pink-violet" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Pink-Violet</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-violet-purple" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Violet-Purple</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-cyan-purple" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Cyan-Purple</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-purple-blue" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Purple-Blue</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-blue-cyan" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Blue-Cyan</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-blue-teal" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Blue-Teal</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-cyan-teal" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Cyan-Teal</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-teal-emerald" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Teal-Emerald</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-green-emerald" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Green-Emerald</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-emerald-cyan" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Emerald-Cyan</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-yellow-green" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Yellow-Green</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-blues" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Blues</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-pink-orange" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Pink-Orange</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-green-cyan-blue" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Green-Cyan-Blue</p>
                  </CardContent>
                </Card>
                <Card variant="gradient-gray" className="h-28">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <p className="text-body-small text-white-primary font-semibold text-center">Gray</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Glass Morphism Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Glass Morphism</CardTitle>
              <CardDescription>Interactive glass morphism playground - adjust blur, refraction, depth, and colors</CardDescription>
            </CardHeader>
            <CardContent>
              <GlassMorphismPlayground />
            </CardContent>
          </Card>

          {/* Badges Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Cosmic badge variants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="cosmic">Cosmic</Badge>
                <Badge variant="cosmicViolet">Violet</Badge>
                <Badge variant="cosmicCyan">Cyan</Badge>
                <Badge variant="cosmicYellow">Yellow</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Icons Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Icon Colors</CardTitle>
              <CardDescription>Cosmic icon color utilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex flex-col items-center gap-2">
                  <Sparkles className="w-8 h-8 cosmic-icon-purple" />
                  <span className="text-caption text-white-tertiary">Purple</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Heart className="w-8 h-8 cosmic-icon-pink" />
                  <span className="text-caption text-white-tertiary">Pink</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Wand2 className="w-8 h-8 cosmic-icon-violet" />
                  <span className="text-caption text-white-tertiary">Violet</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Zap className="w-8 h-8 cosmic-icon-blue" />
                  <span className="text-caption text-white-tertiary">Blue</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SunDim className="w-8 h-8 cosmic-icon-cyan" />
                  <span className="text-caption text-white-tertiary">Cyan</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Waves className="w-8 h-8 cosmic-icon-teal" />
                  <span className="text-caption text-white-tertiary">Teal</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Star className="w-8 h-8 cosmic-icon-yellow" />
                  <span className="text-caption text-white-tertiary">Yellow</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Leaf className="w-8 h-8 cosmic-icon-emerald" />
                  <span className="text-caption text-white-tertiary">Emerald</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Circle className="w-8 h-8 cosmic-icon-gray" />
                  <span className="text-caption text-white-tertiary">Gray</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Sparkles className="w-8 h-8 cosmic-icon-muted" />
                  <span className="text-caption text-white-tertiary">Muted</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dividers Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Dividers</CardTitle>
              <CardDescription>Gradient dividers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Size Variants */}
                <div>
                  <h4 className="text-h3 text-white-primary mb-4">Size Variants</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="cosmic" size="sm" />
                      <span className="text-caption text-white-tertiary">sm</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="cosmic" size="md" />
                      <span className="text-caption text-white-tertiary">md</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="cosmic" size="lg" />
                      <span className="text-caption text-white-tertiary">lg</span>
                    </div>
                  </div>
                </div>
                
                {/* Color Variants - All Divider Gradients */}
                <div>
                  <h4 className="text-h3 text-white-primary mb-4">All Divider Gradient Variants</h4>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="purple-pink" size="md" />
                      <span className="text-caption text-white-tertiary">Purple-Pink</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="violet-purple" size="md" />
                      <span className="text-caption text-white-tertiary">Violet-Purple</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="pink-violet" size="md" />
                      <span className="text-caption text-white-tertiary">Pink-Violet</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="blue-cyan" size="md" />
                      <span className="text-caption text-white-tertiary">Blue-Cyan</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="cyan-teal" size="md" />
                      <span className="text-caption text-white-tertiary">Cyan-Teal</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="teal-emerald" size="md" />
                      <span className="text-caption text-white-tertiary">Teal-Emerald</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="emerald-cyan" size="md" />
                      <span className="text-caption text-white-tertiary">Emerald-Cyan</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="yellow-green" size="md" />
                      <span className="text-caption text-white-tertiary">Yellow-Green</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="blues" size="md" />
                      <span className="text-caption text-white-tertiary">Blues</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Divider variant="cosmic" size="md" />
                      <span className="text-caption text-white-tertiary">Cosmic</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Avatars Section - All Gradient Variants */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>All Avatar Gradients</CardTitle>
              <CardDescription>Complete avatar gradient palette</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Size Variants */}
                <div>
                  <h4 className="text-body-large text-white-primary mb-3">Size Variants</h4>
                  <div className="flex flex-wrap items-end gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar variant="greenCyanBlue" size="sm">
                        <span className="text-white-primary text-lg">A</span>
                      </Avatar>
                      <span className="text-caption text-white-tertiary">sm</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Avatar variant="greenCyanBlue" size="md">
                        <span className="text-white-primary text-xl">B</span>
                      </Avatar>
                      <span className="text-caption text-white-tertiary">md</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Avatar variant="greenCyanBlue" size="lg">
                        <span className="text-white-primary text-2xl">C</span>
                      </Avatar>
                      <span className="text-caption text-white-tertiary">lg</span>
                    </div>
                  </div>
                </div>

                {/* Avatar Gradient Swatches */}
                <div>
                  <h4 className="text-body-large text-white-primary mb-3">Avatar Gradient Swatches</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 w-16 rounded-full bg-gradient-purple-pink mx-auto"></div>
                      <p className="text-caption text-white-tertiary text-center">Purple-Pink</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-16 rounded-full bg-gradient-violet-purple-light mx-auto"></div>
                      <p className="text-caption text-white-tertiary text-center">Violet-Purple</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-16 rounded-full bg-gradient-blue-cyan-light mx-auto"></div>
                      <p className="text-caption text-white-tertiary text-center">Blue-Cyan</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-16 rounded-full bg-gradient-pink-orange mx-auto"></div>
                      <p className="text-caption text-white-tertiary text-center">Pink-Orange</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-16 rounded-full bg-gradient-green-cyan-blue mx-auto"></div>
                      <p className="text-caption text-white-tertiary text-center">Green-Cyan-Blue</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 w-16 rounded-full bg-gradient-gray mx-auto"></div>
                      <p className="text-caption text-white-tertiary text-center">Gray</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Text Color Variants Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Text Color Variants</CardTitle>
              <CardDescription>Semantic text color utilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-h3 text-white-primary mb-2">White Variants</h4>
                  <div className="space-y-2">
                    <p className="text-white-primary">text-white-primary (100%)</p>
                    <p className="text-white-secondary">text-white-secondary (80%)</p>
                    <p className="text-white-tertiary">text-white-tertiary (60%)</p>
                    <p className="text-white-disabled">text-white-disabled (40%)</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-h3 text-white-primary mb-2">Theme Colors</h4>
                  <div className="space-y-2">
                    <p className="text-primary">text-primary (Light Blue)</p>
                    <p className="text-secondary">text-secondary (Purple Base)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promo Link Cards Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Promo Link Cards</CardTitle>
              <CardDescription>Interactive gradient cards with animations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PromoLinkCardStarscapeStar href="https://starscape.example.com/nebula" />
                <PromoLinkCardSparkles href="https://starscape.example.com/nova" />
              </div>
            </CardContent>
          </Card>

          {/* Input Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Starscape input styling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your name..." />
              <Input type="email" placeholder="Enter your email..." />
              <Input type="password" placeholder="Enter password..." />
              <Input disabled placeholder="Disabled input" />
            </CardContent>
          </Card>

          {/* Dialog Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Dialogs</CardTitle>
              <CardDescription>Modal dialogs with Starscape styling</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Starscape Dialog</DialogTitle>
                    <DialogDescription>
                      This is a Starscape-styled dialog component with dark glass background
                      and smooth animations. It demonstrates the template registry integration.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <Input placeholder="Dialog input example..." />
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setDialogOpen(false)}>
                        Confirm
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App
