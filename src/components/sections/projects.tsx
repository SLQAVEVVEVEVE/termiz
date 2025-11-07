const projects = [
  {
    title: "Модернизация термической линии",
    industry: "Металлургия",
    result:
      "Снизили энергопотребление на 27% за счёт внедрения новой системы рекуперации тепла и интеллектуального управления печами.",
  },
  {
    title: "Комплексная система обогрева",
    industry: "Химическое производство",
    result:
      "Разработали и внедрили модульную систему обогрева реакторов с дистанционным мониторингом параметров в режиме 24/7.",
  },
  {
    title: "Автоматизация сушильных камер",
    industry: "Строительные материалы",
    result:
      "Обновили сушильные камеры, добавили сенсоры и алгоритмы контроля, что сократило простои оборудования на 35%.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Проекты
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Реализованные решения для промышленности
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Подбираем технологию под конкретные задачи: от модернизации печей до
            интеграции систем мониторинга. Ниже — проекты, на которые мы опираемся в
            рекомендациях.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>
              <p className="flex-1 text-sm text-muted-foreground">
                {project.result}
              </p>
              <div className="text-sm font-medium text-primary">
                → Результат подтверждён эксплуатацией
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
