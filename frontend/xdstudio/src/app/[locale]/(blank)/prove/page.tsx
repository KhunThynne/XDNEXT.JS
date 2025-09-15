import { Badge } from "@/libs/shadcn/ui/badge";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/libs/shadcn/ui/card";
import {
  Star,
  ShoppingCart,
  Code,
  Gamepad2,
  Zap,
  Users,
  Shield,
  Download,
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Auto-Farm Script Pro",
      description: "Advanced farming automation for RPG games",
      price: "$29.99",
      rating: 4.8,
      downloads: "12.5K",
      category: "Automation",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "PvP Combat Enhancer",
      description: "Optimize your combat performance in competitive games",
      price: "$19.99",
      rating: 4.9,
      downloads: "8.2K",
      category: "Combat",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Resource Manager Plus",
      description: "Intelligent resource management for strategy games",
      price: "$24.99",
      rating: 4.7,
      downloads: "15.3K",
      category: "Strategy",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const categories = [
    { name: "Automation Scripts", icon: Zap, count: "150+" },
    { name: "Combat Tools", icon: Shield, count: "89+" },
    { name: "Strategy Helpers", icon: Gamepad2, count: "120+" },
    { name: "Custom Mods", icon: Code, count: "200+" },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="border-border bg-card/50 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-primary h-8 w-8" />
            <h1 className="text-foreground text-2xl font-bold">
              GameScript Hub
            </h1>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Scripts
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mods
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tools
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Users className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="from-primary/10 via-background to-accent/10 relative bg-gradient-to-br px-4 py-20">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-foreground mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Level Up Your Game with
              <span className="text-primary block">Custom Scripts & Tools</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Discover premium game scripts, automation tools, and mods crafted
              by expert developers. Enhance your gaming experience with our
              trusted marketplace.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="px-8 py-6 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                <Code className="mr-2 h-5 w-5" />
                Explore Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h3 className="text-foreground mb-12 text-center text-3xl font-bold">
            Browse Categories
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <category.icon className="text-primary mx-auto mb-4 h-12 w-12" />
                  <h4 className="text-foreground mb-2 text-lg font-semibold">
                    {category.name}
                  </h4>
                  <Badge variant="secondary" className="text-sm">
                    {category.count} items
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="container mx-auto">
          <h3 className="text-foreground mb-12 text-center text-3xl font-bold">
            Featured Scripts
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="border-border transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-muted-foreground text-sm">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-primary text-2xl font-bold">
                      {product.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {product.downloads} downloads
                    </span>
                  </div>
                  <Button className="ml-4">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-foreground mb-8 text-3xl font-bold">
            Join Our Gaming Community
          </h3>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            Connect with thousands of gamers, share your experiences, and get
            support from our expert developers.
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold">500+</div>
              <div className="text-muted-foreground">Premium Scripts</div>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-border border-t px-4 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Gamepad2 className="text-primary h-6 w-6" />
                <span className="text-foreground text-lg font-bold">
                  GameScript Hub
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted marketplace for premium game scripts and automation
                tools.
              </p>
            </div>
            <div>
              <h4 className="text-foreground mb-4 font-semibold">Products</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Scripts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Mods
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Bundles
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-4 font-semibold">Support</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-4 font-semibold">Company</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Developers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-border text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
            <p>&copy; 2024 GameScript Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
