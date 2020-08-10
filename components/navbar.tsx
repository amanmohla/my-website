import Link from 'next/link'
import Avatar from './avatar'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-8 text-blue-400">
      <Link as={`/`} href="/">
        <a className="hover:underline px-8">Home</a>
      </Link>
      <Link as={`/about`} href="/about">
        <a className="hover:underline px-8">About</a>
      </Link>
      <Link as={`/`} href="/">
        <a className="px-8">
          <Avatar picture="/assets/images/aman_illustration.jpg" />
        </a>
      </Link>
      <Link as={`/blog`} href="/blog">
        <a className="hover:underline px-8">Blog</a>
      </Link>
      <Link as={`/books`} href="/books">
        <a className="hover:underline px-8">Books</a>
      </Link>
    </nav>
  )
}

export default Navbar
