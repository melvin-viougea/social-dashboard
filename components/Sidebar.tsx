'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-700 bg-gray-900 text-gray-200 shadow-lg max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
      <div className="mb-10 flex items-center gap-2 max-xl:mb-4 font-bold text-xl text-gray-100">
        melvin_vga
      </div>
      <nav className="flex flex-col gap-1 overflow-y-auto flex-1">
        <Link
          href="http://localhost:3000"
          key="Home"
          className={`flex gap-3 items-center py-2 md:py-3 2xl:py-4 rounded-lg justify-center xl:justify-start transition-colors duration-200 link ${pathname === '/' ? 'bg-gray-800 text-white' : "hover:bg-gray-700 text-gray-300"}`}
        >
          <p className="font-semibold max-xl:hidden mx-5">Home</p>
        </Link>
      </nav>
    </section>
  );
}