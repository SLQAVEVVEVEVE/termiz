export type PatentItem = {
  slug: string
  title: string
  number?: string
  year?: string
  image?: string
}

export const primaryPatents: readonly PatentItem[] = [
  {
    slug: "patent-2213814",
    title:
      "Патент №2213814 · Способ получения полиоксадиазольного волокна",
    number: "№2213814",
    year: "2003",
    image:
      "/images/Patents/Main-pat/Патент_№2213814_Способ_получения_полиоксадиазольного_волокна_илии-1.png",
  },
  {
    slug: "trademark-arselon-224405",
    title: "Свидетельство на товарный знак Арселон №224405",
    number: "№224405",
    year: "2003",
    image:
      "/images/Patents/Main-pat/Свидельство_на_товарный_знак_Арселон_№224405-1.png",
  },
  {
    slug: "patent-2213815",
    title:
      "Патент №2213815 · Способ получения полиоксадиазольного волокна",
    number: "№2213815",
    year: "2003",
    image:
      "/images/Patents/Main-pat/Патент_№2213815_Способ_получения_полиоксадиазольного_волокна_или-1.png",
  },
] as const

export const additionalPatents: readonly PatentItem[] = [
  {
    slug: "patent-2394946",
    title:
      "Патент №2394946 · Способ получения полиоксадиазольного волокна",
    number: "№2394946",
    year: "2010",
    image:
      "/images/Patents/Addi-pat/Патент_№2394946_Способ_получения_полиоксадиазольного_волокна_или-1.png",
  },
  {
    slug: "patent-2784545",
    title: "Патент №2784545 · Способ получения полиоксадиазольной нити",
    number: "№2784545",
    year: "2022",
    image:
      "/images/Patents/Addi-pat/Патент_№2784545_Способ_получения_полиоксадиазольной_нити-1.png",
  },
  {
    slug: "patent-2106445",
    title:
      "Патент №2106445 · Способ получения ворсовой ткани из химических нитей",
    number: "№2106445",
    year: "1998",
    image:
      "/images/Patents/Addi-pat/Патент_№2106445_Способ_получения_ворсовой_ткани_из_химических_комплексных-1.png",
  },
  {
    slug: "patent-2760532",
    title:
      "Патент №2760532 · Текстильный материал для фильтрации газов",
    number: "№2760532",
    year: "2021",
    image:
      "/images/Patents/Addi-pat/Патент_№2760532_Текстильный_материал_для_фильтрации_горячих_технологических-1.png",
  },
  {
    slug: "patent-2171081",
    title: "Патент №2171081 · Теплозащитная рукавица",
    number: "№2171081",
    year: "2001",
    image:
      "/images/Patents/Addi-pat/Патент_№2171081_Теплозащитная_рукавица-1.png",
  },
] as const
