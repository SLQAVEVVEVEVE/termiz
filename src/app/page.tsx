import Image from "next/image"
import Link from "next/link"

import { ContactSection } from "@/components/sections/contact-section"
import { articles, type ArticleItem } from "@/data/articles"
import {
  additionalPatents,
  primaryPatents,
  type PatentItem,
} from "@/data/patents"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"

export default function Home() {
  const featuredArticles = articles.slice(0, 6)
  const additionalArticles = articles.slice(6)

  const renderPatentCard = (
    patent: PatentItem,
    variant: "primary" | "secondary",
  ) => {
    const isPrimary = variant === "primary"

    return (
      <article
        key={patent.slug}
        className={`flex h-full flex-col items-center ${
          isPrimary
            ? "rounded-3xl border border-border/60 bg-background p-4 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            : "rounded-2xl bg-background p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        }`}
      >
        <div
          className={`relative overflow-hidden bg-muted/20 ${
            isPrimary ? "rounded-[26px]" : "rounded-2xl"
          } aspect-[3/4] w-full`}
        >
          {patent.image ? (
            <Image
              src={patent.image}
              alt={patent.title}
              fill
              className="object-contain object-center"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-xs text-muted-foreground/80">
              Обложка появится позже
            </div>
          )}
        </div>
        <span className="sr-only">
          {patent.title}
          {patent.number ? `, ${patent.number}` : ""}
          {patent.year ? `, ${patent.year}` : ""}
        </span>
      </article>
    )
  }

  const renderArticleCard = (article: ArticleItem) => (
    <article
      key={article.slug}
      className="flex h-full flex-col rounded-2xl border border-border/60 bg-muted/10 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="space-y-2">
          <h3 className="text-base font-semibold leading-snug text-foreground">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground">{article.authors}</p>
        </div>
        <div className="mt-auto space-y-2 pt-2">
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
        </div>
      </div>
    </article>
  )

  return (
    <main className="space-y-24 pb-24">
      <section
        id="hero"
        className="relative overflow-hidden border-b border-border/60 bg-background"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero2.png"
            alt="Технологическое производство тканей Термиз"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "calc(100% + 150px) center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/25" />
        </div>
        <div className="relative">
          <div className="mx-auto w-full max-w-5xl px-4 py-44 sm:px-6 lg:px-8 lg:py-60">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Производство в России
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Высокотехнологичные ткани и материалы
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Создаём термостойкие ткани, фильтрационные материалы и средства индивидуальной защиты. Более 20 лет обеспечиваем предприятия металлургии, химии и энергетики надёжными решениями для высоких температур.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Каталог продукции
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-border/60 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted/50"
                >
                  Связаться
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-border/60 bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="relative mx-auto flex max-w-5xl flex-col items-center lg:-translate-x-20">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border/60 shadow-xl sm:w-[32rem] lg:w-[34rem] lg:-translate-y-24 lg:translate-x-[22rem]">

              <Image
                src="/images/hero.jpg"
                alt="Производственные линии по выпуску тканей"
                fill
                className="object-cover object-left"
              />
            </div>
            <div className="relative z-10 -mt-16 w-full max-w-xl rounded-3xl border border-border/40 bg-foreground p-9 text-background shadow-2xl sm:-mt-24 sm:p-12 lg:absolute lg:bottom-12 lg:left-1/2 lg:mt-0 lg:max-w-lg lg:-translate-x-[75%]">
              <div className="flex flex-col items-center text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
                  О компании
                </p>
                <div className="mt-4 flex w-full flex-col items-center gap-5">
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Производство термостойких материалов
                  </h2>
                  <span className="block h-0.5 w-24 rounded-full bg-orange-400" />
                  <div className="space-y-4 text-sm text-background/80 sm:text-base">
                    <p>
                      Мы создаём ткани, фильтрационные материалы и СИЗ для высокотемпературных процессов. Собственные линии, лаборатория и инженерная команда помогают адаптировать решения под задачи металлургии, химии и энергетики.
                    </p>
                    <p>
                      Используем арселоновые волокна, многослойные композиты и контролируем качество на каждом этапе, чтобы поддерживать стабильность поставок и длительный ресурс изделий.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Продукция
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Решения для высоких температур и агрессивных сред
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              Используем огнестойкие волокна и композиционные материалы, чтобы обеспечить защиту оборудования и персонала при экстремальных нагрузках.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => {
              const images = [
                {
                  key: `${product.slug}-primary`,
                  src: product.image,
                  alt: product.title,
                  fit: product.imageFit ?? "cover",
                  position: product.imagePosition ?? "center",
                  transform: product.imageTransform ?? "",
                },
                ...(product.secondaryImage
                  ? [
                      {
                        key: `${product.slug}-secondary`,
                        src: product.secondaryImage,
                        alt: `${product.title} дополнительный ракурс`,
                        fit: product.secondaryImageFit ?? "cover",
                        position: product.secondaryImagePosition ?? "center",
                        transform: product.secondaryImageTransform ?? "",
                      },
                    ]
                  : []),
              ]

              return (
                <article
                  key={product.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div
                    className={
                      images.length > 1
                        ? "grid w-full gap-3 p-4 pb-0 sm:p-6 sm:pb-0 md:grid-cols-2"
                        : "flex w-full gap-3 p-4 pb-0 sm:p-6 sm:pb-0"
                    }
                  >
                    {images.map((image) => (
                      <div
                        key={image.key}
                        className={`relative overflow-hidden rounded-2xl border border-border/60 bg-muted/30 ${
                          images.length > 1 ? "h-48 sm:h-56" : "h-52 sm:h-60 flex-1"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className={`transition duration-500 group-hover:scale-105 ${image.transform} ${image.fit === "contain" ? "object-contain" : "object-cover"}`}
                          style={{ objectPosition: image.position }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col gap-4 px-6 py-6 sm:px-8 sm:py-8">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        {product.short}
                      </p>
                    </div>
                    <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full rounded-2xl border-border/70 text-sm sm:w-auto"
                      >
                        <Link href={`/products/${product.slug}`}>Подробнее</Link>
                      </Button>
                      <Button asChild className="w-full rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                        <a href="#contact">{product.cta}</a>
                      </Button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

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
              {featuredArticles.map((article) => renderArticleCard(article))}
            </div>
            {additionalArticles.length > 0 ? (
              <div className="px-6 py-6">
                <input
                  type="checkbox"
                  id="articles-toggle"
                  className="peer sr-only"
                />
                <div className="grid max-h-0 translate-y-4 gap-4 overflow-hidden pb-0 opacity-0 transition-all duration-700 ease-in-out sm:grid-cols-2 lg:grid-cols-3 peer-checked:max-h-[2000px] peer-checked:translate-y-0 peer-checked:pb-6 peer-checked:opacity-100">
                  {additionalArticles.map((article) => renderArticleCard(article))}
                </div>
                <label
                  htmlFor="articles-toggle"
                  className="mt-4 flex justify-center transition-all peer-checked:mt-6"
                >
                  <span className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 peer-checked:hidden">
                    Показать все публикации
                  </span>
                  <span className="hidden items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 peer-checked:inline-flex">
                    Свернуть список
                  </span>
                </label>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section id="patents" className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Патенты
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ключевые разработки и технологические решения
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              Компания «Термиз» защищает инновации патентами: основные документы показаны крупным планом, остальные доступны ниже. Обложки будут обновлены по мере подготовки материалов.
            </p>
          </div>
          <div className="space-y-12">
            <div className="grid gap-6 lg:grid-cols-3">
              {primaryPatents.map((patent) => renderPatentCard(patent, "primary"))}
            </div>
            <div className="space-y-5">
              <h3 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">
                Дополнительные патенты
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {additionalPatents.map((patent) => renderPatentCard(patent, "secondary"))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-background">
        <ContactSection />
      </section>
    </main>
  )
}
