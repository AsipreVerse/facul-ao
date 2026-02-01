import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { RootLayout } from '@/components/RootLayout'
import { Border } from '@/components/Border'

// FACUL Images
import faculHeroLogo from '@/images/facul-hero-logo.jpg'
import imageStationery from '@/images/facul/stationery-suite.jpg'

// Placeholder for client logos - to be replaced with actual client logos
const clients = [
  { name: 'Sonangol', placeholder: true },
  { name: 'Porto de Luanda', placeholder: true },
  { name: 'Ministério das Finanças', placeholder: true },
  { name: 'Bodiva', placeholder: true },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Clientes que confiam no Grupo Facul
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map((client) => (
              <li key={client.name}>
                <FadeIn>
                  <div className="flex h-16 items-center justify-center rounded-lg bg-neutral-800/50 px-4">
                    <span className="font-display text-sm font-semibold text-white">
                      {client.name}
                    </span>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Subsidiaries() {
  const subsidiaries = [
    {
      title: 'Centro Académico Digital',
      description: 'Formação profissional digital e cursos especializados para o mercado angolano.',
      href: '/centro-academico',
    },
    {
      title: 'Editora Facul',
      description: 'Publicação de livros e conteúdo editorial de autores angolanos.',
      href: '/editora',
    },
    {
      title: 'Consultoria Empresarial',
      description: 'Serviços de consultoria para empresas e instituições governamentais.',
      href: '/empresas',
    },
  ]

  return (
    <>
      <SectionIntro
        title="Empresas do Grupo Facul"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          O Grupo Facul é composto por várias empresas que actuam em diferentes
          sectores da economia angolana, contribuindo para o desenvolvimento do país.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {subsidiaries.map((subsidiary) => (
            <FadeIn key={subsidiary.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={subsidiary.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <span className="font-display text-2xl font-semibold text-neutral-950">
                      {subsidiary.title}
                    </span>
                  </Link>
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {subsidiary.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Os Nossos Serviços"
        title="Soluções integradas para o desenvolvimento empresarial"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Oferecemos uma gama completa de serviços para apoiar empresas e
          instituições no seu crescimento e transformação digital.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageStationery}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Formação Profissional">
              Cursos e programas de capacitação para profissionais angolanos,
              com certificação reconhecida.
            </ListItem>
            <ListItem title="Consultoria Estratégica">
              Apoio a empresas e instituições na definição de estratégias
              de crescimento e transformação.
            </ListItem>
            <ListItem title="Publicações">
              Edição e publicação de livros e conteúdo editorial de autores
              angolanos e internacionais.
            </ListItem>
            <ListItem title="Seminários e Eventos">
              Organização de eventos corporativos, seminários e conferências
              de alto nível.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

// Forbes Africa Lusófona news articles
const newsArticles = [
  {
    title: 'Venceslau Andrade lança em Luanda "4 Ciclos para a Construção de Negócios Globais"',
    url: 'https://forbesafricalusofona.com/venceslau-andrade-lanca-em-luanda-4-ciclos-para-a-construcao-de-negocios-globais/',
    source: 'Forbes África Lusófona',
    image: 'https://forbesafricalusofona.com/wp-content/uploads/746283c1-f253-43a0-9a2a-3072f5a662fc-e1765468552259.jpg',
  },
  {
    title: 'LIDE anuncia abertura de unidade em Angola e reforça expansão internacional do grupo',
    url: 'https://forbesafricalusofona.com/lide-anuncia-abertura-de-unidade-em-angola-e-reforca-expansao-internacional-do-grupo/',
    source: 'Forbes África Lusófona',
    image: 'https://forbesafricalusofona.com/wp-content/uploads/Captura-de-ecra-2026-01-31-093609.png',
  },
  {
    title: 'Escritor angolano lança escola de liderança e livro "Código V" em Portugal',
    url: 'https://forbesafricalusofona.com/escritor-angolano-lanca-escola-de-lideranca-e-livro-codigo-v-em-portugal/',
    source: 'Forbes África Lusófona',
    image: 'https://forbesafricalusofona.com/wp-content/uploads/WhatsApp-Image-2025-06-29-at-18.06.28-e1751372737671.jpeg',
  },
  {
    title: 'FACUL e Ordem dos Solicitadores e Agentes de Execução celebram acordo',
    url: 'https://forbesafricalusofona.com/facul-e-ordem-dos-solicitadores-e-agentes-de-execucao-celebram-acordo/',
    source: 'Forbes África Lusófona',
    image: 'https://forbesafricalusofona.com/wp-content/uploads/venceslau-scaled_750x540_acf_cropped.jpg',
  },
]

function News() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />
        <div className="pt-12 sm:pt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Na Imprensa
            </h2>
            <p className="mt-4 max-w-2xl text-base text-neutral-600">
              Notícias e artigos sobre o Grupo FACUL publicados na Forbes África Lusófona.
            </p>
          </FadeIn>
          <ul role="list" className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {newsArticles.map((article) => (
              <FadeIn key={article.url}>
                <li>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-neutral-200 transition hover:border-neutral-950"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-neutral-500">
                        {article.source}
                      </p>
                      <p className="mt-2 font-display text-base font-semibold text-neutral-950 group-hover:text-neutral-700">
                        {article.title}
                      </p>
                      <p className="mt-4 inline-flex items-center text-sm font-semibold text-neutral-950">
                        Ler artigo
                        <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span>
                      </p>
                    </div>
                  </a>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Grupo Facul | Holding Empresarial Angolana',
  description:
    'Grupo Facul é uma holding empresarial angolana com actuação nos sectores de formação, consultoria e publicações.',
}

export default async function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
              Grupo Facul, liderando o desenvolvimento empresarial em Angola.
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Uma holding empresarial angolana com mais de duas décadas de
              experiência nos sectores de formação profissional, consultoria
              estratégica e publicações editoriais.
            </p>
          </FadeIn>
          <FadeIn className="relative aspect-square lg:aspect-auto lg:h-[40rem]">
            <StylizedImage
              src={faculHeroLogo}
              sizes="(min-width: 1024px) 30rem, 20rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
      </Container>

      <Clients />

      <Subsidiaries />

      <Services />

      <News />

      <ContactSection />
    </RootLayout>
  )
}
