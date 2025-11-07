import Link from "next/link"

const navLinks = [
  { href: "#about", label: "О компании" },
  { href: "#products", label: "Продукция" },
  { href: "#articles", label: "Публикации" },
  { href: "#patents", label: "Патенты" },
  { href: "#contact", label: "Контакты" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_1fr]">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Термиз
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Высокотехнологичные ткани и средства защиты
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Более 20 лет производим арселоновые материалы, фильтрационные решения и СИЗ для металлургии, энергетики и химической
              промышленности. Помогаем адаптировать изделия под конкретные технологические задачи.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground/80">
              <span className="rounded-full border border-border/60 px-3 py-1">Арселоновые ткани</span>
              <span className="rounded-full border border-border/60 px-3 py-1">Фильтровальные рукава</span>
              <span className="rounded-full border border-border/60 px-3 py-1">СИЗ для высоких температур</span>
            </div>
          </div>

          <div className="grid gap-6 text-sm text-muted-foreground">
            <nav className="flex flex-wrap gap-x-4 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 transition hover:bg-muted/60 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-3 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">Контакты</p>
              <div className="space-y-1">
                <p className="text-base font-semibold text-foreground">+7 (495) 123-45-67</p>
                <p>info@termiz.ru</p>
                <p>Россия, г. Мытищи, ул. Колонцова, 5/12</p>
              </div>
              <p className="text-xs text-muted-foreground/80">
                Работаем по всей России и СНГ. Предоставляем консультации инженеров и подбор материалов под производство.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Термиз. Все права защищены.</p>
          <p>
            Готово к размещению на {" "}
            <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Vercel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
