'use client'

import { useEffect, useMemo, useRef, useState } from "react"

import { type ArticleItem } from "@/data/articles"

type ArticlesSectionProps = {
  articles: readonly ArticleItem[]
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  const featured = useMemo(() => articles.slice(0, 6), [articles])
  const additional = useMemo(() => articles.slice(6), [articles])
  const [expanded, setExpanded] = useState(false)
  const extraRef = useRef<HTMLDivElement | null>(null)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    if (!extraRef.current) {
      return
    }
    if (expanded) {
      setMaxHeight(extraRef.current.scrollHeight)
    } else {
      setMaxHeight(0)
    }
  }, [expanded, additional.length])

  useEffect(() => {
    if (!extraRef.current) {
      return
    }
    const observer = new ResizeObserver(() => {
      if (expanded && extraRef.current) {
        setMaxHeight(extraRef.current.scrollHeight)
      }
    })
    observer.observe(extraRef.current)
    return () => observer.disconnect()
  }, [expanded])

  const renderArticleCard = (article: ArticleItem) => (
    <article
      key={article.slug}
      className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-muted/10 p-6 text-left shadow-sm"
    >
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-foreground">{article.title}</h3>
        <p className="text-sm text-muted-foreground">{article.authors}</p>
      </div>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center text-sm font-medium text-primary transition hover:text-primary/80"
      >
        Читать на {article.source ?? "сайте"}
      </a>
      {article.needsRegistration ? (
        <p className="text-xs text-muted-foreground/80">Требуется аккаунт eLIBRARY.</p>
      ) : null}
    </article>
  )

  return (
    <section id="articles" className="border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Публикации
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Технологические материалы и исследования
          </h2>
          <p className="text-base text-muted-foreground">
            Выборка из более чем 40 научных статей о полиоксадиазольных волокнах Арселон®. Для полного доступа требуется регистрация на eLIBRARY.
          </p>
        </div>
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => renderArticleCard(article))}
          </div>
          {additional.length > 0 ? (
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/10">
              <div className="flex flex-col gap-4 px-6 py-6">
                <div
                  ref={extraRef}
                  className={`grid gap-4 transition-all duration-500 ease-out sm:grid-cols-2 lg:grid-cols-3 ${
                    expanded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                  }`}
                  style={{
                    maxHeight: expanded ? maxHeight : 0,
                    transition: "max-height 0.6s ease, opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  {additional.map((article) => renderArticleCard(article))}
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setExpanded((state) => !state)}
                    aria-expanded={expanded}
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  >
                    {expanded ? "Свернуть список" : "Показать все публикации"}
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
