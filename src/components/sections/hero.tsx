import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Инженерные решения
          </p>
          <h1 className="text-balance font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Комплексная модернизация термических и энергетических процессов
          </h1>
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">
            «Термиз» проектирует и внедряет индивидуальные системы обогрева,
            автоматизации и энергосбережения для промышленности. Мы берём на себя
            анализ, разработку, монтаж и сервис.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <Link href="#contact">Получить консультацию</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="#projects">Наши проекты</Link>
            </Button>
          </div>
          <dl className="grid gap-6 rounded-lg border border-border/60 bg-background/80 p-6 shadow-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                Опыт
              </dt>
              <dd className="text-xl font-semibold text-foreground">15+ лет</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                Проекты
              </dt>
              <dd className="text-xl font-semibold text-foreground">120+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                Экономия энергии
              </dt>
              <dd className="text-xl font-semibold text-foreground">до 30%</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 translate-y-12 rounded-[50%] bg-primary/10 blur-3xl" />
          <div className="relative flex w-full max-w-md flex-col items-center rounded-2xl border border-border/60 bg-background/90 p-8 shadow-xl">
            <Image
              src="/globe.svg"
              alt="Схематичное изображение глобуса с энергетическими потоками"
              width={320}
              height={320}
              className="h-auto w-4/5"
              priority
            />
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Интегрируем интеллектуальный мониторинг, чтобы вы контролировали
              температуру, расход энергоносителей и эффективность оборудования в
              режиме реального времени.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
