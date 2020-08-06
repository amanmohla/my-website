import Link from 'next/link'

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
          <Link href="/">
            <a className="hover:underline">AM</a>
          </Link>
        </h2>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"> Blog </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"> Books </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
