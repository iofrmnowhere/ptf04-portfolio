import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 font-bold text-2xl tracking-tight text-primary">
          <div className="bg-primary text-primary-foreground px-2 py-1 border-2 border-black rounded-md transform -rotate-2 hover:rotate-0 transition-transform">
            PTF04
          </div>
          <span>Portfolio</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} border-2 border-transparent hover:border-black hover:bg-accent rounded-full transition-all`}>
                <Link href="/">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} border-2 border-transparent hover:border-black hover:bg-accent rounded-full transition-all`}>
                <Link href="/#projects">
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
