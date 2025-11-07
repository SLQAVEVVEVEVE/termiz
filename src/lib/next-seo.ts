import { createElement, Fragment } from "react"
import { generateDefaultSeo, type DefaultSeoProps } from "next-seo/pages"

export function DefaultSeo(props: DefaultSeoProps) {
  const tags = generateDefaultSeo(props)
  return createElement(Fragment, null, tags)
}

export type { DefaultSeoProps }
