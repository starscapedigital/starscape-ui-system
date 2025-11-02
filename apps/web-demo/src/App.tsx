import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { PromoLinkCardSparkles } from './components/ui/promo-link-card-sparkles'
import { PromoLinkCardStarscapeStar } from './components/ui/promo-link-card-starscape-star'
import Hero from './components/Hero'
import ExpandableUISystem from './components/ExpandableUISystem'
import Footer from './components/Footer'

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

          {/* Color Palette */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>Starscape design tokens</CardDescription>
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
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App
