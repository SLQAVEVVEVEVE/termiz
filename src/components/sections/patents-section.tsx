"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { additionalPatents, primaryPatents, type PatentItem } from "@/data/patents"
import { cn } from "@/lib/utils"

type PatentVariant = "primary" | "secondary"

function PatentDialog({
  patent,
  onOpenChange,
}: {
  patent: PatentItem | null
  onOpenChange: (open: boolean) => void
}) {
  const open = Boolean(patent)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-hidden bg-background p-0 sm:max-h-[88vh]">
        {patent ? <DialogTitle className="sr-only">{patent.title}</DialogTitle> : null}
        {patent ? (
          <div className="flex h-full w-full items-center justify-center bg-muted/10">
            {patent.image ? (
              <div className="relative h-[85vh] w-full">
                <Image
                  src={patent.image}
                  alt={patent.title}
                  fill
                  className="object-contain"
                  sizes="95vw"
                  priority
                />
              </div>
            ) : (
              <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground/80">
                Изображение для этого патента временно недоступно.
              </div>
            )}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}

type PatentCardProps = {
  patent: PatentItem
  variant: PatentVariant
  onOpen: (patent: PatentItem) => void
}

function PatentCard({ patent, variant, onOpen }: PatentCardProps) {
  const isPrimary = variant === "primary"

  return (
    <article
      className={cn(
        "group flex h-full cursor-pointer flex-col items-center",
        isPrimary
          ? "rounded-3xl border border-border/60 bg-background p-4 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          : "rounded-2xl bg-background p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md",
      )}
      onClick={() => onOpen(patent)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onOpen(patent)
        }
      }}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-muted/20",
          isPrimary ? "aspect-[3/4] rounded-[26px]" : "aspect-[3/4] rounded-2xl",
        )}
      >
        {patent.image ? (
          <Image
            src={patent.image}
            alt={patent.title}
            fill
            className="object-contain object-center transition duration-300 group-hover:scale-[1.02]"
            sizes={isPrimary ? "400px" : "240px"}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-xs text-muted-foreground/80">
            Изображение для этого патента временно недоступно.
          </div>
        )}
      </div>
      <div className="sr-only">
        {patent.title}
        {patent.number ? `, ${patent.number}` : ""}
        {patent.year ? `, ${patent.year}` : ""}
      </div>
    </article>
  )
}

export function PatentsSection() {
  const [selected, setSelected] = useState<PatentItem | null>(null)

  const grouped = useMemo(
    () => ({
      primary: primaryPatents,
      additional: additionalPatents,
    }),
    [],
  )

  return (
    <section id="patents" className="border-b border-border/60 bg-muted/20">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Патенты
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Лидирующие разработки и зарегистрированные решения
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground">
            Нажмите на патент, чтобы открыть изображение во весь экран.
          </p>
        </div>
        <div className="space-y-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {grouped.primary.map((patent) => (
              <PatentCard
                key={patent.slug}
                patent={patent}
                variant="primary"
                onOpen={setSelected}
              />
            ))}
          </div>
          <div className="space-y-5">
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">
              Дополнительные патенты
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {grouped.additional.map((patent) => (
                <PatentCard
                  key={patent.slug}
                  patent={patent}
                  variant="secondary"
                  onOpen={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <PatentDialog patent={selected} onOpenChange={(open) => setSelected(open ? selected : null)} />
    </section>
  )
}
