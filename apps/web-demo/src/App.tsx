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
import { Sparkles, Star, SunDim, Zap } from 'lucide-react'

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
                  <div className="h-16 rounded-md" style={{ backgroundColor: 'hsl(271, 81%, 70%)' }}></div>
                  <p className="text-caption text-white-tertiary">Purple Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md" style={{ backgroundColor: 'hsl(330, 81%, 60%)' }}></div>
                  <p className="text-caption text-white-tertiary">Pink Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md" style={{ backgroundColor: 'hsl(258, 90%, 66%)' }}></div>
                  <p className="text-caption text-white-tertiary">Violet Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md" style={{ backgroundColor: 'hsl(217, 91%, 60%)' }}></div>
                  <p className="text-caption text-white-tertiary">Blue Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md" style={{ backgroundColor: 'hsl(188, 94%, 43%)' }}></div>
                  <p className="text-caption text-white-tertiary">Cyan Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md" style={{ backgroundColor: 'hsl(173, 80%, 40%)' }}></div>
                  <p className="text-caption text-white-tertiary">Teal Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md" style={{ backgroundColor: 'hsl(48, 96%, 53%)' }}></div>
                  <p className="text-caption text-white-tertiary">Yellow Base</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md" style={{ backgroundColor: 'hsl(160, 84%, 39%)' }}></div>
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
                <CardDescription>Glass morphism variant</CardDescription>
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
                <CardDescription>Dark glass morphism</CardDescription>
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

          {/* New Gradients Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>New Gradients</CardTitle>
              <CardDescription>Green-Emerald, Blue-Cyan, Blue-Teal gradients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-gradient-green-emerald"></div>
                  <p className="text-caption text-white-tertiary">Green → Emerald</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-gradient-blue-cyan"></div>
                  <p className="text-caption text-white-tertiary">Blue → Cyan</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-gradient-blue-teal"></div>
                  <p className="text-caption text-white-tertiary">Blue → Teal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Glass Morphism Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Glass Morphism</CardTitle>
              <CardDescription>Cosmic glass effects from ssd-alpha</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="cosmic-glass p-6 rounded-xl">
                  <h3 className="text-h3 text-white-primary mb-2">Cosmic Glass</h3>
                  <p className="text-body text-white-tertiary">Basic glass morphism effect</p>
                </div>
                <div className="cosmic-glass-hover p-6 rounded-xl cursor-pointer">
                  <h3 className="text-h3 text-white-primary mb-2">Cosmic Glass Hover</h3>
                  <p className="text-body text-white-tertiary">Hover for enhanced effect</p>
                </div>
                <div className="cosmic-glass-card p-6">
                  <h3 className="text-h3 text-white-primary mb-2">Cosmic Glass Card</h3>
                  <p className="text-body text-white-tertiary">Card variant with responsive rounding</p>
                </div>
              </div>
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
                  <Zap className="w-8 h-8 cosmic-icon-blue" />
                  <span className="text-caption text-white-tertiary">Blue</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Star className="w-8 h-8 cosmic-icon-yellow" />
                  <span className="text-caption text-white-tertiary">Yellow</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SunDim className="w-8 h-8 cosmic-icon-cyan" />
                  <span className="text-caption text-white-tertiary">Cyan</span>
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
              <CardDescription>Cosmic gradient dividers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Divider variant="purple" size="sm" />
                  <span className="text-caption text-white-tertiary">Purple (sm)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Divider variant="purple" size="md" />
                  <span className="text-caption text-white-tertiary">Purple (md)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Divider variant="purple" size="lg" />
                  <span className="text-caption text-white-tertiary">Purple (lg)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Divider variant="blue" size="md" />
                  <span className="text-caption text-white-tertiary">Blue</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Avatars Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
              <CardDescription>Cosmic avatar placeholders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-end gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="default" size="sm">
                    <span className="text-white-primary text-lg">A</span>
                  </Avatar>
                  <span className="text-caption text-white-tertiary">Default (sm)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="default" size="md">
                    <span className="text-white-primary text-xl">B</span>
                  </Avatar>
                  <span className="text-caption text-white-tertiary">Default (md)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="default" size="lg">
                    <span className="text-white-primary text-2xl">C</span>
                  </Avatar>
                  <span className="text-caption text-white-tertiary">Default (lg)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="violetPurple" size="md">
                    <span className="text-white-primary text-xl">V</span>
                  </Avatar>
                  <span className="text-caption text-white-tertiary">Violet-Purple</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="blueCyan" size="md">
                    <span className="text-white-primary text-xl">B</span>
                  </Avatar>
                  <span className="text-caption text-white-tertiary">Blue-Cyan</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="gray" size="md">
                    <span className="text-white-primary text-xl">G</span>
                  </Avatar>
                  <span className="text-caption text-white-tertiary">Gray</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="pinkOrange" size="md">
                    <span className="text-white-primary text-xl">P</span>
                  </Avatar>
                  <span className="text-caption text-white-tertiary">Pink-Orange</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="greenCyanBlue" size="md">
                    <span className="text-white-primary text-xl">G</span>
                  </Avatar>
                  <span className="text-caption text-white-tertiary">Green-Cyan-Blue</span>
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
                    <p className="text-secondary">text-secondary (Deep Blue)</p>
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
                <PromoLinkCardStarscapeStar />
                <PromoLinkCardSparkles />
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
