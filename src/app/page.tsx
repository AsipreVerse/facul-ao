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
import { DNAHelixShowcase } from '@/components/DNAHelixShowcase'
import { DraggableMarquee } from '@/components/DraggableMarquee'

import faculHeroLogo from '@/images/hero_option_a_mosaic.png'
import imageStationery from '@/images/hero_option_c_blocks.png'

// Partner logos - all 18 from slide 42
import logoDeloitte from '@/images/partners/image50.png'
import logoUFRGS from '@/images/partners/image49.png'
import logoLisboa from '@/images/partners/image89.jpg'
import logoUCAV from '@/images/partners/image90.png'
import logoNOVA from '@/images/partners/image91.png'
import logoUNILAB from '@/images/partners/image92.jpg'
import logoNovaLisboa from '@/images/partners/image93.jpg'
import logoOrdemSolicitadores from '@/images/partners/image94.jpg'
import logoPartner95 from '@/images/partners/image95.jpeg'
import logoPartner96 from '@/images/partners/image96.png'
import logoPartner97 from '@/images/partners/image97.png'
import logoPartner98 from '@/images/partners/image98.png'
import logoPartner99 from '@/images/partners/image99.jpeg'
import logoPartner101 from '@/images/partners/image101.png'
import logoPartner102 from '@/images/partners/image102.png'
import logoPartner104 from '@/images/partners/image104.jpeg'
import logoHiperdist from '@/images/partners/hiperdist.png'
import logoNork from '@/images/partners/nork.png'
import logoNetspace from '@/images/partners/netspace.png'
import logoRumos from '@/images/partners/rumos.png'
import logoBaft from '@/images/partners/baft.png'

const partners = [
  // International Partners
  { name: 'Deloitte', logo: logoDeloitte },
  { name: 'UFRGS', logo: logoUFRGS },
  { name: 'Universidade de Lisboa', logo: logoLisboa },
  { name: 'UCAV', logo: logoUCAV },
  { name: 'NOVA School of Law', logo: logoNOVA },
  { name: 'UNILAB', logo: logoUNILAB },
  { name: 'Universidade Nova de Lisboa', logo: logoNovaLisboa },
  { name: 'Ordem dos Solicitadores', logo: logoOrdemSolicitadores },
  // National Partners
  { name: 'Kunoka Academy', logo: logoPartner95 },
  { name: 'Braincom', logo: logoPartner96 },
  { name: 'Ethos Consultoria', logo: logoPartner97 },
  { name: 'Imagem Podcast', logo: logoPartner98 },
  { name: 'Instituto Sapiens', logo: logoPartner99 },
  { name: 'FLUL - Letras Lisboa', logo: logoPartner101 },
  { name: 'Ciências ULisboa', logo: logoPartner102 },
  { name: 'Quid Iuris', logo: logoPartner104 },
  { name: 'Hiperdist', logo: logoHiperdist },
  { name: 'Nork', logo: logoNork },
  { name: 'Netspace', logo: logoNetspace },
  { name: 'Rumos', logo: logoRumos },
  { name: 'BAFT', logo: logoBaft },
]

// Client logos
import logoSonangol from '@/images/clients/sonangol.svg'
import logoPortoLuanda from '@/images/clients/porto-luanda.avif'
import logoMinfin from '@/images/clients/minfin.png'
import logoBodiva from '@/images/clients/bodiva.png'

const clients = [
  { name: 'Sonangol', logo: logoSonangol },
  { name: 'Porto de Luanda', logo: logoPortoLuanda },
  { name: 'Ministério das Finanças', logo: logoMinfin },
  { name: 'Bodiva', logo: logoBodiva },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-[#1B3044] py-16 sm:mt-32 sm:py-20 lg:mt-56">
      <Container>
        <FadeIn className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-x-8">
          <p className="text-xs font-medium uppercase tracking-widest text-[#FFB606]">
            Clientes
          </p>
          <h2 className="font-display text-lg font-medium text-white sm:text-xl">
            Instituições que confiam no Grupo Facul
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          >
            {clients.map((client) => (
              <li key={client.name}>
                <FadeIn>
                  <div className="flex h-20 items-center justify-center rounded-xl bg-white p-4 transition hover:scale-105">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className="max-h-12 w-auto object-contain"
                      unoptimized
                    />
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

function Partners() {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40 overflow-hidden">
      <Container>
        <FadeIn className="flex flex-col items-start gap-2">
          <p className="text-xs font-medium uppercase tracking-widest text-[#FFB606]">
            Parceiros
          </p>
          <h2 className="font-display text-xl font-medium text-neutral-950 sm:text-2xl">
            Rede de instituições de referência
          </h2>
        </FadeIn>
      </Container>
      <div className="mt-8">
        <DraggableMarquee partners={partners} />
      </div>
    </div>
  )
}

// Company logos
import logoCad from '@/images/companies/cad-metallic.png'
import logoEditoraFacul from '@/images/companies/editora-facul.png'
import logoSidon from '@/images/companies/sidon.png'
import logoImagemDoFuturo from '@/images/companies/imagem-do-futuro.png'
import logoBayside from '@/images/companies/bayside.png'
import logoBt from '@/images/companies/bt.png'
import logoIseba from '@/images/companies/iseba.png'
import logoAnaElisa from '@/images/companies/ana-elisa.png'
import logoSunburst from '@/images/companies/sunburst.png'

const companies = [
  { name: 'Facul Academia Digital', logo: logoCad, url: 'https://facul.ao' },
  { name: 'Sidon Tecnologias', logo: logoSidon, url: 'https://sidon.ao' },
  { name: 'Viseba', logo: logoIseba, url: '/viseba' },
  { name: 'Imagem do Futuro', logo: logoImagemDoFuturo, url: '/imagem-do-futuro' },
  { name: 'Sunburst', logo: logoSunburst, url: '/sunburst' },
  { name: 'Facul Editora', logo: logoEditoraFacul, url: '/editora' },
  { name: 'BaySide Technology', logo: logoBt, url: '/bayside' },
  { name: 'Associação Ana Elisa', logo: logoAnaElisa, url: 'https://aae.ao' },
]

function Subsidiaries() {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <DNAHelixShowcase
        companies={companies}
        title="Empresas do Grupo Facul"
        description="O Grupo Facul é composto por oito empresas que actuam em diferentes sectores da economia angolana, contribuindo para o desenvolvimento do país."
      />
      <FadeIn className="mt-4 flex justify-center">
        <Link
          href="/empresas"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Ver todas as empresas
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </FadeIn>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Os Nossos Serviços"
        title="Oito sectores. Uma visão."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Através das nossas empresas, actuamos em toda a cadeia de valor do
          desenvolvimento empresarial angolano.
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
            <ListItem title="Educação">
              Transformação da sociedade através da educação digital.
              <span className="mt-2 block text-sm text-[#FFB606]">Facul Academia Digital</span>
            </ListItem>
            <ListItem title="Tecnologia">
              Soluções tecnológicas disruptivas — a maior empresa do grupo.
              <span className="mt-2 block text-sm text-[#FFB606]">Sidon Tecnologias</span>
            </ListItem>
            <ListItem title="Transportes">
              Transportes, logística e fornecimento de equipamentos.
              <span className="mt-2 block text-sm text-[#FFB606]">Viseba</span>
            </ListItem>
            <ListItem title="Eventos">
              Organização de eventos desportivos, didácticos e de entretenimento.
              <span className="mt-2 block text-sm text-[#FFB606]">Imagem do Futuro</span>
            </ListItem>
            <ListItem title="Limpeza e Reciclagem">
              Serviços de limpeza e reciclagem ambiental.
              <span className="mt-2 block text-sm text-[#FFB606]">Sunburst</span>
            </ListItem>
            <ListItem title="Publicações">
              Produções científicas e culturais da lusofonia. Sede em Portugal.
              <span className="mt-2 block text-sm text-[#FFB606]">Facul Editora</span>
            </ListItem>
            <ListItem title="Negócios Internacionais">
              Trading, TI e negócios internacionais. Sede no Dubai.
              <span className="mt-2 block text-sm text-[#FFB606]">BaySide Technology</span>
            </ListItem>
            <ListItem title="Social">
              Combate à pobreza extrema na comunidade Mayombe, Cacuaco.
              <span className="mt-2 block text-sm text-[#FFB606]">Associação Ana Elisa</span>
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
              Grupo <span className="text-[#FFB606]">Facul</span>, liderando o desenvolvimento empresarial em Angola.
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

      <Partners />

      <Subsidiaries />

      <Services />

      <News />

      <ContactSection />
    </RootLayout>
  )
}
