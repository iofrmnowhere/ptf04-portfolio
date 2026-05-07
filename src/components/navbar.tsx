import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 font-bold text-2xl tracking-tight text-primary">
          <div className="bg-primary text-primary-foreground px-2 py-1 border-2 border-black rounded-md transform -rotate-2 hover:rotate-0 transition-transform">
            PTF04
          </div>
          <span>Portfolio</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-2">
            <li>
              <Link href="/" className="inline-flex h-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border-2 border-transparent hover:border-black hover:bg-accent transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="inline-flex h-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border-2 border-transparent hover:border-black hover:bg-accent transition-all">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
