import { Separator } from "@/components/ui/separator"

const services = [
  {
    title: "Инженерный аудит",
    description:
      "Анализ существующих термических процессов, энергоаудит и подготовка технического задания для модернизации.",
    highlights: ["Тепловизионная диагностика", "Расчёт экономии", "Реконструкция ТЗ"],
  },
  {
    title: "Проектирование систем",
    description:
      "Создание комплексных решений по обогреву, сушке, вентиляции и автоматизации с учётом отраслевых стандартов.",
    highlights: ["3D-модели", "Подбор оборудования", "Интеграция с АСУ ТП"],
  },
  {
    title: "Монтаж и пусконаладка",
    description:
      "Полный цикл работ от поставки оборудования до ввода в эксплуатацию, обучение персонала и сопровождение.",
    highlights: ["Работы под ключ", "Регламент сервисного обслуживания", "24/7 поддержка"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Услуги
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Полный цикл внедрения инженерных решений
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            От оценки текущего состояния до постгарантийного обслуживания — мы
            подключаемся на любом этапе проекта и гарантируем измеримый результат.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-2xl border border-border/60 bg-muted/20 p-6 shadow-sm transition hover:border-primary/60 hover:bg-primary/5"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {service.description}
              </p>
              <Separator className="my-4" />
              <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full bg-primary/10 px-3 py-1 text-primary"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
