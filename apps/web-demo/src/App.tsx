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
import { Sparkles, Star, SunDim, Zap, Heart, Wand2, Waves, Leaf, Circle, Info, AlertCircle, Bold, Italic, Underline, Bookmark } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip'
import { ScrollArea } from './components/ui/scroll-area'
import { Progress } from './components/ui/progress'
import { useToast } from './components/ui/use-toast'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
import { Skeleton } from './components/ui/skeleton'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Switch } from './components/ui/switch'
import { Checkbox } from './components/ui/checkbox'
import { Label } from './components/ui/label'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import { Separator } from './components/ui/separator'
import { Slider } from './components/ui/slider'
import { Toggle } from './components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group'
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from './components/ui/menubar'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet'
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './components/ui/navigation-menu'
import { Spinner } from './components/ui/spinner'

// # Install components
// starscape-ui add animated-star
// starscape-ui add promo-link-card-sparkles promo-link-card-starscape-star

// # Or install all
// starscape-ui add --all

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const { toast } = useToast()

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

          {/* Separator Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Separators</CardTitle>
              <CardDescription>Horizontal gradient separators similar to dividers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Horizontal Gradient Separators */}
                <div>
                  <h4 className="text-h3 text-white-primary mb-4">Horizontal Separators</h4>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-caption text-white-tertiary">Thin (1px)</p>
                      <Separator className="h-px" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-caption text-white-tertiary">Default (2px)</p>
                      <Separator />
                    </div>
                    <div className="space-y-2">
                      <p className="text-caption text-white-tertiary">Medium (4px)</p>
                      <Separator className="h-1" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-caption text-white-tertiary">Thick (6px)</p>
                      <Separator className="h-1.5" />
                    </div>
                  </div>
                </div>

                {/* All Gradient Variants */}
                <div>
                  <h4 className="text-h3 text-white-primary mb-4">All Variants</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Purple-Pink</span>
                      <Separator variant="purple-pink" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Violet-Purple</span>
                      <Separator variant="violet-purple" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Pink-Violet</span>
                      <Separator variant="pink-violet" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Blue-Cyan</span>
                      <Separator variant="blue-cyan" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Cyan-Teal</span>
                      <Separator variant="cyan-teal" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Teal-Emerald</span>
                      <Separator variant="teal-emerald" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Emerald-Cyan</span>
                      <Separator variant="emerald-cyan" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Yellow-Green</span>
                      <Separator variant="yellow-green" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Blues</span>
                      <Separator variant="blues" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-caption text-white-tertiary">Cosmic</span>
                      <Separator variant="cosmic" />
                    </div>
                  </div>
                </div>

                {/* Vertical Usage Example */}
                <div>
                  <h4 className="text-h3 text-white-primary mb-4">Vertical Separator Usage</h4>
                  <div className="flex h-12 items-center justify-center space-x-4">
                    <span className="text-body text-white-secondary">Item 1</span>
                    <Separator variant="cosmic" orientation="vertical" className="h-8" />
                    <span className="text-body text-white-secondary">Item 2</span>
                    <Separator variant="purple-pink" orientation="vertical" className="h-8" />
                    <span className="text-body text-white-secondary">Item 3</span>
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

          {/* Tabs Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Tab navigation with hotswappable color schemes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Chic Color Scheme</h4>
                <Tabs defaultValue="account" colorScheme="chic" className="w-full">
                  <TabsList colorScheme="chic">
                    <TabsTrigger colorScheme="chic" value="account">Account</TabsTrigger>
                    <TabsTrigger colorScheme="chic" value="password">Password</TabsTrigger>
                    <TabsTrigger colorScheme="chic" value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-4">
                    <p className="text-body text-white-secondary">Make changes to your account here.</p>
                  </TabsContent>
                  <TabsContent value="password" className="mt-4">
                    <p className="text-body text-white-secondary">Change your password here.</p>
                  </TabsContent>
                  <TabsContent value="settings" className="mt-4">
                    <p className="text-body text-white-secondary">Manage your settings here.</p>
                  </TabsContent>
                </Tabs>
              </div>
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Gradient Variants</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Purple-Pink</p>
                    <Tabs defaultValue="overview" colorScheme="purple-pink" className="w-full">
                      <TabsList colorScheme="purple-pink">
                        <TabsTrigger colorScheme="purple-pink" value="overview">Overview</TabsTrigger>
                        <TabsTrigger colorScheme="purple-pink" value="analytics">Analytics</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="mt-4">
                        <p className="text-body text-white-secondary">View your dashboard overview.</p>
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Blue-Cyan</p>
                    <Tabs defaultValue="overview" colorScheme="blue-cyan" className="w-full">
                      <TabsList colorScheme="blue-cyan">
                        <TabsTrigger colorScheme="blue-cyan" value="overview">Overview</TabsTrigger>
                        <TabsTrigger colorScheme="blue-cyan" value="analytics">Analytics</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="mt-4">
                        <p className="text-body text-white-secondary">View your dashboard overview.</p>
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Cosmic</p>
                    <Tabs defaultValue="overview" colorScheme="cosmic" className="w-full">
                      <TabsList colorScheme="cosmic">
                        <TabsTrigger colorScheme="cosmic" value="overview">Overview</TabsTrigger>
                        <TabsTrigger colorScheme="cosmic" value="analytics">Analytics</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="mt-4">
                        <p className="text-body text-white-secondary">View your dashboard overview.</p>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Table Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>Data tables with color scheme variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Chic Color Scheme</h4>
                <div className="rounded-md border border-light-blue/20 overflow-hidden">
                  <Table colorScheme="chic">
                    <TableHeader>
                      <TableRow colorScheme="chic">
                        <TableHead colorScheme="chic">Name</TableHead>
                        <TableHead colorScheme="chic">Status</TableHead>
                        <TableHead colorScheme="chic">Role</TableHead>
                        <TableHead colorScheme="chic" className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow colorScheme="chic">
                        <TableCell className="font-medium">John Doe</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell className="text-right">Edit</TableCell>
                      </TableRow>
                      <TableRow colorScheme="chic">
                        <TableCell className="font-medium">Jane Smith</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell className="text-right">Edit</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Gradient Variants</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Purple-Pink</p>
                    <div className="rounded-md border border-purple-500/30 overflow-hidden">
                      <Table colorScheme="purple-pink">
                        <TableHeader>
                          <TableRow colorScheme="purple-pink">
                            <TableHead colorScheme="purple-pink">Game</TableHead>
                            <TableHead colorScheme="purple-pink">Status</TableHead>
                            <TableHead colorScheme="purple-pink">Score</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow colorScheme="purple-pink">
                            <TableCell className="font-medium">Asteroid Runner</TableCell>
                            <TableCell>Passed</TableCell>
                            <TableCell>95%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Blue-Cyan</p>
                    <div className="rounded-md border border-blue-500/30 overflow-hidden">
                      <Table colorScheme="blue-cyan">
                        <TableHeader>
                          <TableRow colorScheme="blue-cyan">
                            <TableHead colorScheme="blue-cyan">Game</TableHead>
                            <TableHead colorScheme="blue-cyan">Status</TableHead>
                            <TableHead colorScheme="blue-cyan">Score</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow colorScheme="blue-cyan">
                            <TableCell className="font-medium">Space Quest</TableCell>
                            <TableCell>Passed</TableCell>
                            <TableCell>88%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tooltip Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Tooltip</CardTitle>
              <CardDescription>Hover tooltips with beautiful styling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Chic Color Scheme</h4>
                <div className="flex flex-wrap gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me (Chic)</Button>
                      </TooltipTrigger>
                      <TooltipContent colorScheme="chic">
                        <p>This is a chic styled tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Gradient Variants</h4>
                <div className="flex flex-wrap gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="cosmic">Purple-Pink</Button>
                      </TooltipTrigger>
                      <TooltipContent colorScheme="purple-pink">
                        <p>Purple-Pink gradient tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="gradient">Blue-Cyan</Button>
                      </TooltipTrigger>
                      <TooltipContent colorScheme="blue-cyan">
                        <p>Blue-Cyan gradient tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="cosmicSolid">Cosmic</Button>
                      </TooltipTrigger>
                      <TooltipContent colorScheme="cosmic">
                        <p>Cosmic gradient tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scroll Area Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Scroll Area</CardTitle>
              <CardDescription>Scrollable containers with themed scrollbars</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Chic Color Scheme</h4>
                <ScrollArea colorScheme="chic" className="h-32 w-full rounded-md border border-light-blue/20 p-4">
                  <div className="space-y-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <p key={i} className="text-body text-white-secondary">Scroll item {i + 1}</p>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Gradient Variants</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Purple-Pink</p>
                    <ScrollArea colorScheme="purple-pink" className="h-32 w-full rounded-md border border-purple-500/30 p-4">
                      <div className="space-y-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <p key={i} className="text-body text-white-secondary">Scroll item {i + 1}</p>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Blue-Cyan</p>
                    <ScrollArea colorScheme="blue-cyan" className="h-32 w-full rounded-md border border-blue-500/30 p-4">
                      <div className="space-y-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <p key={i} className="text-body text-white-secondary">Scroll item {i + 1}</p>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>Progress bars with animated gradients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Chic Color Scheme</h4>
                <div className="space-y-4">
                  <Progress colorScheme="chic" value={33} />
                  <Progress colorScheme="chic" value={66} />
                  <Progress colorScheme="chic" value={100} />
                </div>
              </div>
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Gradient Variants</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Purple-Pink</p>
                    <Progress colorScheme="purple-pink" value={33} />
                  </div>
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Blue-Cyan</p>
                    <Progress colorScheme="blue-cyan" value={66} />
                  </div>
                  <div>
                    <p className="text-caption text-white-tertiary mb-2">Cosmic (Animated)</p>
                    <Progress colorScheme="cosmic" value={100} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Toast Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Toast</CardTitle>
              <CardDescription>Toast notifications with color schemes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => {
                    toast({
                      colorScheme: "chic",
                      title: "Chic Toast",
                      description: "This is a chic styled toast notification.",
                    })
                  }}
                >
                  Show Chic Toast
                </Button>
                <Button
                  variant="cosmic"
                  onClick={() => {
                    toast({
                      colorScheme: "purple-pink",
                      title: "Purple-Pink Toast",
                      description: "This is a purple-pink gradient toast.",
                    })
                  }}
                >
                  Show Purple-Pink Toast
                </Button>
                <Button
                  variant="gradient"
                  onClick={() => {
                    toast({
                      colorScheme: "blue-cyan",
                      title: "Blue-Cyan Toast",
                      description: "This is a blue-cyan gradient toast.",
                    })
                  }}
                >
                  Show Blue-Cyan Toast
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    toast({
                      colorScheme: "chic",
                      variant: "destructive",
                      title: "Error",
                      description: "Something went wrong!",
                    })
                  }}
                >
                  Show Error Toast
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alert Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Alert</CardTitle>
              <CardDescription>Alert messages with color scheme variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Chic Color Scheme</h4>
                <div className="space-y-4">
                  <Alert colorScheme="chic">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is a chic styled alert with important information.
                    </AlertDescription>
                  </Alert>
                  <Alert colorScheme="chic" variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      This is a chic styled error alert.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Gradient Variants</h4>
                <div className="space-y-4">
                  <Alert colorScheme="purple-pink">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Purple-Pink Alert</AlertTitle>
                    <AlertDescription>
                      This is a purple-pink gradient styled alert.
                    </AlertDescription>
                  </Alert>
                  <Alert colorScheme="blue-cyan">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Blue-Cyan Alert</AlertTitle>
                    <AlertDescription>
                      This is a blue-cyan gradient styled alert.
                    </AlertDescription>
                  </Alert>
                  <Alert colorScheme="cosmic" variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Cosmic Error</AlertTitle>
                    <AlertDescription>
                      This is a cosmic gradient error alert.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skeleton Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
              <CardDescription>Loading skeletons with color schemes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Chic Color Scheme</h4>
                <div className="space-y-4">
                  <Skeleton colorScheme="deepspace-hover" className="h-4 w-full" />
                  <Skeleton colorScheme="deepspace-hover" className="h-4 w-5/6" />
                  <Skeleton colorScheme="deepspace-hover" className="h-4 w-4/6" />
                  <Skeleton colorScheme="deepspace-hover" className="h-20 w-full rounded-md" />
                </div>
              </div>
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Gradient Variants</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-caption text-white-tertiary mb-2">Cosmic</p>
                    <Skeleton colorScheme="cosmic" className="h-4 w-full" />
                    <Skeleton colorScheme="cosmic" className="h-4 w-5/6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-caption text-white-tertiary mb-2">Green-Cyan-Blue</p>
                    <Skeleton colorScheme="green-cyan-blue" className="h-4 w-full" />
                    <Skeleton colorScheme="green-cyan-blue" className="h-4 w-5/6" />
                  </div>
                </div>
              </div>
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

          {/* Accordion Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Expandable content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with Starscape styling by default.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It has smooth expand and collapse animations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Select Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Select</CardTitle>
              <CardDescription>Dropdown select inputs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme-select">Theme</Label>
                <Select defaultValue="dark">
                  <SelectTrigger id="theme-select" className="w-[180px]">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="framework-select">Framework</Label>
                <Select defaultValue="nextjs">
                  <SelectTrigger id="framework-select" className="w-[180px]">
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nextjs">Next.js</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Switch Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Switch</CardTitle>
              <CardDescription>Toggle switches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" defaultChecked />
                <Label htmlFor="notifications">Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" />
                <Label htmlFor="two-factor">Two-factor authentication</Label>
              </div>
            </CardContent>
          </Card>

          {/* Checkbox Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Checkbox</CardTitle>
              <CardDescription>Checkbox inputs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing">Receive marketing emails</Label>
              </div>
            </CardContent>
          </Card>

          {/* Radio Group Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
              <CardDescription>Radio button groups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Slider Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Slider</CardTitle>
              <CardDescription>Range sliders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="volume-slider">Volume</Label>
                <Slider id="volume-slider" defaultValue={[50]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brightness-slider">Brightness</Label>
                <Slider id="brightness-slider" defaultValue={[75]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="range-slider">Range</Label>
                <Slider id="range-slider" defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>

          {/* Toggle Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Toggle</CardTitle>
              <CardDescription>Toggle buttons for state control</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-body-large text-white-primary mb-3">Single Toggles</h4>
                  <div className="flex flex-wrap gap-4">
                    <Toggle aria-label="Toggle bold" className="text-white">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle variant="outline" aria-label="Toggle italic" className="text-white">
                      <Italic className="h-4 w-4" />
                    </Toggle>
                    <Toggle variant="cosmic" aria-label="Toggle underline" className="text-white">
                      <Underline className="h-4 w-4" />
                    </Toggle>
                  </div>
                </div>
                <div>
                  <h4 className="text-body-large text-white-primary mb-3">Toggle Group</h4>
                  <ToggleGroup type="single" defaultValue="star" variant="outline">
                    <ToggleGroupItem value="star" aria-label="Star" className="gap-2 text-white">
                      <Star className="h-4 w-4" />
                      <span>Star</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="heart" aria-label="Heart" className="gap-2 text-white">
                      <Heart className="h-4 w-4" />
                      <span>Heart</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="bookmark" aria-label="Bookmark" className="gap-2 text-white">
                      <Bookmark className="h-4 w-4" />
                      <span>Bookmark</span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Menubar Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Menubar</CardTitle>
              <CardDescription>Application menu bar</CardDescription>
            </CardHeader>
            <CardContent>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Share</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Email link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                      Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Find</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Search the web</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Find...</MenubarItem>
                        <MenubarItem>Find Next</MenubarItem>
                        <MenubarItem>Find Previous</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                      Always Show Full URLs
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>
                      Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled inset>
                      Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Profiles</MenubarTrigger>
                  <MenubarContent>
                    <MenubarRadioGroup value="pedro">
                      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                      <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                      <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                      <MenubarRadioItem value="pedro">Pedro</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Edit...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Profile...</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </CardContent>
          </Card>

          {/* Sheet Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Sheet</CardTitle>
              <CardDescription>Side panel dialogs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Pedro Duarte" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="@peduarte" />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="cosmic">Left Side Sheet</Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Left Panel</SheetTitle>
                      <SheetDescription>
                        This sheet opens from the left side.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </CardContent>
          </Card>

          {/* Popover Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Popover</CardTitle>
              <CardDescription>Display content in a floating panel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none text-white-primary">Dimensions</h4>
                      <p className="text-sm text-white-secondary">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2 mt-4">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input
                          id="width"
                          defaultValue="100%"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Max. width</Label>
                        <Input
                          id="maxWidth"
                          defaultValue="300px"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Height</Label>
                        <Input
                          id="height"
                          defaultValue="25px"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxHeight">Max. height</Label>
                        <Input
                          id="maxHeight"
                          defaultValue="none"
                          className="col-span-2 h-8"
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* Hover Card Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Hover Card</CardTitle>
              <CardDescription>Display information on hover</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar variant="blueCyan" size="md">
                        <span className="text-white-primary text-xl">N</span>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white-primary">@nextjs</h4>
                        <p className="text-sm text-white-secondary">
                          The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                          <span className="text-xs text-white-tertiary">
                            Joined December 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Menu Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Navigation Menu</CardTitle>
              <CardDescription>Accessible navigation with dropdown menus</CardDescription>
            </CardHeader>
            <CardContent>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/50 to-pink-500/50 p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <Sparkles className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium text-white-primary">
                                shadcn/ui
                              </div>
                              <p className="text-sm leading-tight text-white-secondary">
                                Beautifully designed components built with Radix UI and
                                Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-light-blue/20 hover:text-light-blue focus:bg-light-blue/20 focus:text-light-blue"
                              href="/docs"
                            >
                              <div className="text-sm font-medium leading-none text-white-primary">Introduction</div>
                              <p className="line-clamp-2 text-sm leading-snug text-white-secondary">
                                Re-usable components built using Radix UI and Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-light-blue/20 hover:text-light-blue focus:bg-light-blue/20 focus:text-light-blue"
                              href="/docs/installation"
                            >
                              <div className="text-sm font-medium leading-none text-white-primary">Installation</div>
                              <p className="line-clamp-2 text-sm leading-snug text-white-secondary">
                                How to install dependencies and structure your app.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-light-blue/20 hover:text-light-blue focus:bg-light-blue/20 focus:text-light-blue"
                              href="/docs/primitives/typography"
                            >
                              <div className="text-sm font-medium leading-none text-white-primary">Typography</div>
                              <p className="line-clamp-2 text-sm leading-snug text-white-secondary">
                                Styles for headings, paragraphs, lists...etc
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {[
                          {
                            title: "Alert Dialog",
                            description: "A modal dialog that interrupts the user with important content.",
                          },
                          {
                            title: "Hover Card",
                            description: "For sighted users to preview content available behind a link.",
                          },
                          {
                            title: "Progress",
                            description:
                              "Displays an indicator showing the completion progress of a task.",
                          },
                          {
                            title: "Scroll-area",
                            description: "Visually or semantically separates content.",
                          },
                          {
                            title: "Tabs",
                            description:
                              "A set of layered sections of content—known as tab panels.",
                          },
                          {
                            title: "Tooltip",
                            description:
                              "A popup that displays information related to an element.",
                          },
                        ].map((component) => (
                          <li key={component.title}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-light-blue/20 hover:text-light-blue focus:bg-light-blue/20 focus:text-light-blue"
                                href={`/docs/primitives/${component.title.toLowerCase().replace(' ', '-')}`}
                              >
                                <div className="text-sm font-medium leading-none text-white-primary">
                                  {component.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-white-secondary">
                                  {component.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/docs"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-light-blue/20 hover:text-light-blue focus:bg-light-blue/20 focus:text-light-blue focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white-secondary"
                    >
                      Documentation
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </CardContent>
          </Card>

          {/* Spinner Section */}
          <Card variant="dark-glass">
            <CardHeader>
              <CardTitle>Spinner</CardTitle>
              <CardDescription>Loading spinners</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Sizes</h4>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="sm" />
                    <span className="text-caption text-white-tertiary">Small</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="md" />
                    <span className="text-caption text-white-tertiary">Medium</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="lg" />
                    <span className="text-caption text-white-tertiary">Large</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="xl" />
                    <span className="text-caption text-white-tertiary">Extra Large</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-body-large text-white-primary mb-3">Variants</h4>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="default" />
                    <span className="text-caption text-white-tertiary">Default</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="primary" />
                    <span className="text-caption text-white-tertiary">Primary</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="secondary" />
                    <span className="text-caption text-white-tertiary">Secondary</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner variant="cosmic" />
                    <span className="text-caption text-white-tertiary">Cosmic</span>
                  </div>
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
