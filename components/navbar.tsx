import Link from 'next/link'
import Avatar from './avatar'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly p-6 text-blue-400">
      <Link as={`/`} href="/">
        <a>
          <Avatar picture="/assets/images/aman_illustration.jpg" />
        </a>
      </Link>
      <div className="flex items-center justify-center">
        <Link as={`/about`} href="/about">
          <a className="hover:underline pl-8">About</a>
        </Link>
        <Link as={`/blog`} href="/blog">
          <a className="hover:underline pl-8">Blog</a>
        </Link>
        <Link as={`/books`} href="/books">
          <a className="hover:underline pl-8">Books</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
