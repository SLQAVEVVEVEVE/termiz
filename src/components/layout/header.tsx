import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "#about", label: "О компании" },
  { href: "#products", label: "Продукция" },
  { href: "#contact", label: "Контакты" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur bg-background/85">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="font-sans text-xl font-semibold tracking-tight text-foreground"
        >
          Термиз
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                      "hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40"
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40">
                  Информация
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[220px] rounded-xl border border-border/60 bg-background p-3 shadow-lg">
                  <div className="flex flex-col gap-2">
                    <NavigationMenuLink
                      href="#articles"
                      className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
                    >
                      Публикации
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="#patents"
                      className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
                    >
                      Патенты
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild size="sm">
            <Link href="#contact">Оставить заявку</Link>
          </Button>
        </div>
        <Button asChild size="sm" className="md:hidden" variant="outline">
          <Link href="#contact">Заявка</Link>
        </Button>
      </div>
    </header>
  )
}
