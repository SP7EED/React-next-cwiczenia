 'use client';

  import Link from 'next/link';  
  import { usePathname } from 'next/navigation';
  import clsx from 'clsx';
  
   // reusable navigation component
  export default function NavLinks() {
    const pathname = usePathname();

    const links = [
      {
        name: 'Home',
        href: '/'
      },
      {
        name: 'Dashboard',
        href: '/dashboard'
      },
      {
        name: 'About',
        href: '/dashboard/about'
      },
      {
        name: 'Contact',
        href: '/dashboard/contact'
      }
    ];

    return (
      <>
        <p>Nawigacja:</p><br/>
        
        {links.map((link) => {
          const isActive =
            pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': isActive,
                  'text-gray-600': !isActive,
                },
              )}>
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }