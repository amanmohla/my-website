import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col flex">
      <h1>
        Hello World!
      </h1>
      <p>
        My name is Aman Prakash Mohla. I am software engineer based in Sydney, Australia. I am currently working with <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Atlassian
        </a>{' '}. Previously co-founded

        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Tablehero
        </a>.
      </p>
    </section>
  )
}

export default Intro
