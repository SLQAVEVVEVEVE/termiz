export type ArticleItem = {
  slug: string
  title: string
  authors: string
  url: string
  source?: string
  note?: string
  needsRegistration?: boolean
}

export const articles: readonly ArticleItem[] = [
  {
    slug: "arselon-workwear",
    title: "Арселоновые волокна для изделий спецодежды",
    authors: "Макаров П.Б., Михайлова М.П., Макаров Б.П.",
    url: "https://lp-magazine.ru/lpmagazine/2025/03/1468",
    source: "LP Magazine",
  },
  {
    slug: "fiber-flow-capillaries",
    title:
      "О течении полиоксаодиазольных волокнообразующих систем через фильерные капилляры в условиях сухо-мокрого способа формования",
    authors: "Макаров Б.П., Матрохин А.Ю., Шаблыгин М.В., Михайлова М.П.",
    url: "https://www.elibrary.ru/item.asp?id=66932124",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "hot-gas-filtration",
    title: "Текстильный материал для фильтрации горячих технологических газов и промышленного воздуха",
    authors: "Макаров Б.П., Шаблыгин М.В., Михайлова М.П.",
    url: "https://www.elibrary.ru/item.asp?id=65256830",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "oxadiazole-products",
    title: "Технические изделия на основе поликонденсационных оксадиазольных систем",
    authors: "Макаров П.Б., Макаров Б.П., Михайлова М.П.",
    url: "https://www.elibrary.ru/item.asp?id=54310738",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "fiber-properties-analysis",
    title:
      "Исследование и анализ свойств полипарафенилен-1,3,4-оксадиазольных волокон, предназначенных для текстильных изделий",
    authors: "Макаров Б.П., Шаблыгин М.В., Матрохин А.Ю., Михайлова М.П.",
    url: "https://www.elibrary.ru/item.asp?id=49054007",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "viscosity-coefficients",
    title: "К оценкам изменения коэффициентов вязкости синтетических нитей в процессах деформации",
    authors: "Саркисов В.С., Тер-Микаэлян П.Ю., Шаблыгин М.В., Макаров Б.П.",
    url: "https://www.elibrary.ru/item.asp?id=49045796",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "nonwoven-production",
    title:
      "Способ получения нетканых полотен на основе арселонового волокна для фильтрации воздушных смесей",
    authors: "Макаров Б.П., Шаблыгин М.В., Матрохин А.Ю., Михайлова М.П.",
    url: "https://www.elibrary.ru/item.asp?id=49036627",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "hydrolytic-properties",
    title:
      "К вопросу исследования влияния термообработок на гидролитические свойства полиоксадиазольных волокон",
    authors: "Макаров Б.П., Матрохин А.Ю., Михайлова М.П.",
    url: "https://www.elibrary.ru/item.asp?id=47247755",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "fiber-properties-textile",
    title:
      "Изучение и анализ свойств поли (парафенилен-1,3,4-оксадиазольных) волокон, предназначенных для текстильных изделий",
    authors: "Макаров Б.П., Шаблыгин М.В., Матрохин А.Ю., Михайлова М.П.",
    url: "https://www.elibrary.ru/item.asp?id=43273088",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "solvent-content",
    title: "Влияние содержания растворителя в волокне Арселон на его прочность при термообработке",
    authors: "Макаров Б.П.",
    url: "https://www.elibrary.ru/item.asp?id=44349405",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "dry-wet-forming",
    title:
      "Изучение возможности применения сухо-мокрого формования полиоксадиазольного волокна на опытной установке",
    authors: "Макаров Б.П., Шаблыгин М.В., Матрохин А.Ю., Михайлова М.П.",
    url: "https://www.elibrary.ru/item.asp?id=41353574",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "spinneret-optimization",
    title:
      "Изучение возможности улучшения условий формования полиоксадиазольных волокон путём подбора фильер",
    authors: "Макаров Б.П.",
    url: "https://www.elibrary.ru/item.asp?id=41353575",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "air-filtration-fabric",
    title: "Ткань для фильтрации воздушных и газообразных систем",
    authors: "Михайлова М.П., Колтунчиков В.С., Макаров Б.П.",
    url: "https://www.elibrary.ru/item.asp?id=36312980",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "pile-fabric-production",
    title: "Способ получения ворсовой ткани из химических полиоксадиазольных комплексных нитей",
    authors: "Макаров Б.П.",
    url: "https://www.elibrary.ru/item.asp?id=36312937",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "monomer-development",
    title:
      "Разработка нового способа получения мономера для производства полиоксадиазольного волокна (Арселон) новым способом",
    authors: "Макаров Б.П., Макаров П.Б., Шаблыгин М.В.",
    url: "https://www.elibrary.ru/item.asp?id=36312947",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "arselon-review",
    title:
      "Высокотермостойкие полиоксадиазольные волокна и нити Арселон: принципы получения, свойства и применение. Аналитический обзор",
    authors: "Перепелкин К.Е., Макарова Р.А., Дресвянина Е.Н., Трусов Д.Ю.",
    url: "https://www.elibrary.ru/item.asp?id=11753616",
    source: "eLIBRARY",
    needsRegistration: true,
  },
  {
    slug: "arselon-properties",
    title: "Высокотермостойкие полиоксадиазольные волокна и нити Арселон: свойства и применение",
    authors: "Перепелкин К.Е., Дресвянина Е.Н., Макарова Р.А.",
    url: "https://www.elibrary.ru/item.asp?id=11701007",
    source: "eLIBRARY",
    needsRegistration: true,
  },
]
