"use client"

import { useEffect, useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { contactSchema, type ContactValues } from "@/lib/validation/contact"

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", message: "" },
  })

  const onSubmit = async (values: ContactValues) => {
    try {
      setIsSubmitting(true)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Ошибка при отправке. Попробуйте ещё раз.")
      }

      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в течение рабочего дня.",
      })
      form.reset()
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Не удалось отправить форму."
      toast({
        variant: "destructive",
        title: "Не получилось отправить",
        description: message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Контакты
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Свяжитесь с инженерами «Термиз»
          </h2>
          <p className="text-base text-muted-foreground">
            Оставьте заявку — подберём материалы под вашу задачу и подготовим
            расчёт в течение одного рабочего дня.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-lg sm:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
                aria-label="Форма обратной связи"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Имя</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Например: Анна Петрова"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+7 (900) 000-00-00"
                          inputMode="tel"
                          autoComplete="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Сообщение</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Расскажите о проекте или задаче"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-border/60 bg-background p-6 shadow-lg sm:p-8">
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                  Телефон
                </p>
                <a
                  href="tel:+74951234567"
                  className="text-2xl font-semibold text-foreground transition hover:text-primary"
                >
                  +7 (495) 123-45-67
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                  E-mail
                </p>
                <a
                  href="mailto:info@termiz.ru"
                  className="text-lg font-medium text-foreground transition hover:text-primary"
                >
                  info@termiz.ru
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