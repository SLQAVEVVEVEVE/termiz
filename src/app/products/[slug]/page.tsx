import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { getProductBySlug, productSlugs } from "@/data/products"

export const dynamicParams = false

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

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
    <div className="bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Каталог
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {product.title}
            </h1>
          </div>
          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="/">На главную</Link>
          </Button>
        </div>

        <div className="mt-10 flex flex-col items-center gap-8">
          <div
            className={`grid w-full max-w-4xl gap-4 ${
              images.length > 1 ? "sm:grid-cols-2" : ""
            }`}
          >
            {images.map((image) => (
              <div
                key={image.key}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 bg-background"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`transition duration-500 hover:scale-[1.02] ${
                    image.transform
                  } ${image.fit === "contain" ? "object-contain" : "object-cover"}`}
                  style={{ objectPosition: image.position }}
                />
              </div>
            ))}
          </div>
          <div className="w-full max-w-4xl rounded-3xl border border-border/60 bg-background p-6 text-center shadow-lg">
            <p className="text-base leading-relaxed text-muted-foreground">
              {product.details.description}
            </p>
          </div>
        </div>

        {product.details.variants && product.details.variants.length > 0 ? (
          <section className="mt-14 space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                  Ассортимент тканей
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Готовые позиции и типовые характеристики
                </h2>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {product.details.variants.map((variant) => (
                <article
                  key={variant.title}
                  className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-lg"
                >
                  <header className="space-y-2">
                    <h3 className="text-xl font-semibold leading-tight text-foreground">
                      {variant.title}
                    </h3>
                    {variant.subtitle ? (
                      <p className="text-xs uppercase tracking-[0.25em] text-primary/70">
                        {variant.subtitle}
                      </p>
                    ) : null}
                    <p className="text-sm text-muted-foreground">
                      {variant.description}
                    </p>
                  </header>

                  {variant.specs && variant.specs.length > 0 ? (
                    <dl className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                      {variant.specs.map((spec) => (
                        <div
                          key={`${variant.title}-${spec.label}`}
                          className="flex h-full flex-col gap-2 rounded-2xl border border-border/40 bg-muted/10 px-4 py-4"
                        >
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70 leading-snug text-balance break-words">
                            {spec.label}
                          </dt>
                          <dd className="mt-1 text-sm leading-relaxed text-foreground">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}
