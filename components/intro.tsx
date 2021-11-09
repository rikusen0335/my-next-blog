import { CMS_NAME, SITE_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        {SITE_NAME}
      </h1>
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        An extremely garbage blog for notes.
      </h4>
    </section>
  )
}

export default Intro
