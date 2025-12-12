"use client"

import { useEffect, useRef } from "react"

type YandexMapsApi = {
  Map: new (
    element: HTMLElement,
    config: { center: [number, number]; zoom: number; controls: string[] },
    options?: Record<string, unknown>,
  ) => {
    destroy: () => void
    geoObjects: { add: (object: unknown) => void }
  }
  Placemark: new (
    coordinates: [number, number],
    properties?: Record<string, unknown>,
    options?: Record<string, unknown>,
  ) => unknown
  ready: (callback: () => void) => void
}

declare global {
  interface Window {
    ymaps?: YandexMapsApi
  }
}

const YANDEX_API_KEY = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY
const YANDEX_COORDINATES: [number, number] = [55.915021,37.767003]
const YANDEX_BALLOON =
  "ООО «Термиз» — офис и демонстрационный зал. Мытищи, ул. Колонцова, дом 5/12"

let yandexMapsPromise: Promise<void> | null = null

const loadYandexMaps = () => {
  if (typeof window === "undefined") {
    return Promise.resolve()
  }

  if (!YANDEX_API_KEY) {
    return Promise.reject(new Error("Отсутствует ключ Yandex Maps"))
  }

  if (window.ymaps) {
    return Promise.resolve()
  }

  if (!yandexMapsPromise) {
    yandexMapsPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_API_KEY}&lang=ru_RU`
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error("Не удалось загрузить Yandex Maps"))
      document.head.appendChild(script)
    })
  }

  return yandexMapsPromise
}

function YandexMap() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapInstanceRef = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    let isCancelled = false

    loadYandexMaps()
      .then(() => {
        if (isCancelled || !window.ymaps || !containerRef.current) {
          return
        }

        window.ymaps.ready(() => {
          if (isCancelled || !containerRef.current || !window.ymaps) {
            return
          }

          const map = new window.ymaps.Map(
            containerRef.current,
            {
              center: YANDEX_COORDINATES,
              zoom: 14,
              controls: ["zoomControl"],
            },
            {
              suppressMapOpenBlock: true,
            },
          )

          const placemark = new window.ymaps.Placemark(
            YANDEX_COORDINATES,
            {
              hintContent: "«Термиз»",
              balloonContent: YANDEX_BALLOON,
            },
            {
              preset: "islands#redFactoryIcon",
            },
          )

          map.geoObjects.add(placemark)
          mapInstanceRef.current = map
        })
      })
      .catch((error) => {
        console.error("Yandex Maps: ", error)
      })

    return () => {
      isCancelled = true
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return <div ref={containerRef} className="h-full w-full" aria-label="Карта проезда" />
}

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Контакты
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Свяжитесь с нами
          </h2>
          <p className="text-base text-muted-foreground">
            Оставьте заявку — подберём материалы под вашу задачу и подготовим
            расчёт в течение одного рабочего дня.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-1 lg:gap-12">
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-border/60 bg-background p-6 shadow-lg sm:p-8">
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                  Телефон
                </p>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+74955833867"
                    className="text-2xl font-semibold text-foreground transition hover:text-primary"
                  >
                    +7 (495) 583-38-67
                  </a>
                  <a
                    href="tel:+74955825242"
                    className="text-lg font-semibold text-foreground transition hover:text-primary"
                  >
                    +7 (495) 582-52-42
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                  E-mail
                </p>
                <a
                  href="mailto:termiz@mail.ru"
                  className="text-lg font-medium text-foreground transition hover:text-primary"
                >
                  termiz@mail.ru
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                  Адрес
                </p>
                <p className="text-base text-muted-foreground">
                  Россия, Московская область, г. Мытищи, ул. Колонцова, дом 5/12
                </p>
                <p className="text-sm text-muted-foreground/80">
                  Координаты для навигатора: 55.9153° N, 37.7332° E
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="h-64 overflow-hidden rounded-2xl border border-border/40 bg-muted/20 lg:h-72">
                {YANDEX_API_KEY ? (
                  <YandexMap />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground">
                    Добавьте публичный ключ Yandex Maps в переменную
                    <br />
                    <code className="rounded bg-muted px-2 py-1 text-xs">
                      NEXT_PUBLIC_YANDEX_MAPS_API_KEY
                    </code>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-border/40 bg-muted/10 p-5 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">График работы</p>
                <p>Пн–Пт: 09:00–18:00 (МСК)</p>
                <p>Сб–Вс: по договорённости</p>
                <p className="mt-3 text-xs text-muted-foreground/80">
                  * Форма отправляет данные в mock-API `/api/contact` и логируется
                  в Vercel Functions (консоль).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
