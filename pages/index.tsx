import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import DateFormatter from '../components/date-formater'
import Post from '../types/post'

type IndexPageProps = {
  allPosts: Post[]
}



const Index = ({ allPosts }: IndexPageProps) => {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <main className="mt-12 mb-24">
        <div className="flex flex-col items-center lg:flex-row">
          <img
            src="/assets/images/compressed-profile.jpg"
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full mb-12 lg:mb-0 border-2"
            alt="profile image Aman Prakash Mohla"
          />
          <header className="text-xl lg:pl-16">
            <div className="mb-2 font-bold">Hey there! 👋🏼</div>
            <div>
              I am Aman Prakash Mohla, a full stack developer based in Sydney, Australia.
              I love building web applications using Javascript and GoLang.
              I currently work with Atlassian and have previously co-founded Tablehero.
            </div>
          </header>
        </div>
      </main>
      <h2>Thoughts</h2>
      {allPosts.map((post, i) => {
        const postLink = `/blog/${post.slug}`;
        return (<article key={i} className="post-list-item">
          <a href={postLink}>
            <header className="post-title">{post.title}</header>
            <div className="post-excerpt">{post.excerpt}</div>
          </a>
        </article>
        )
      })}
    </div>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'draft',
  ])

  return {
    props: { allPosts },
  }
}