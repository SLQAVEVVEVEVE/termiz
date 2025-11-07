const benefits = [
  {
    title: "Инженерная экспертиза",
    description:
      "Собственная команда инженеров по теплотехнике, автоматизации и энергетике. Разрабатываем проекты на основе отраслевых стандартов и практического опыта.",
  },
  {
    title: "Измеримый эффект",
    description:
      "Фокус на KPI: экономия энергоресурсов, снижение простоев, повышение стабильности производственных циклов.",
  },
  {
    title: "Комплексный подход",
    description:
      "Ведём проект от предпроектного обследования до сервисного сопровождения. Строим долгосрочные отношения и план модернизации на годы вперёд.",
  },
  {
    title: "Edge-friendly решения",
    description:
      "Используем современные технологии мониторинга и анализа данных, готовые к масштабированию и интеграции с облачными сервисами.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Почему мы
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Преимущества сотрудничества с «Термиз»
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Привносим системность и прозрачность в проекты модернизации, создавая
            долгосрочную ценность и устойчивый рост.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/20 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
