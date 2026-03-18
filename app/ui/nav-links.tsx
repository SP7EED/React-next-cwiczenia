 'use client';
 
 import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
  import Link from 'next/link';  
  import { usePathname } from 'next/navigation';
  import clsx from 'clsx';
  
   // reusable navigation component
  export default function NavLinks() {
    const pathname = usePathname();

    const links = [
      {
        name: 'Home',
        href: '/',
        icon: HomeIcon
      },
      {
        name: 'Dashboard',
        href: '/dashboard',
        icon: UserGroupIcon
      },
      {
        name: 'About',
        href: '/dashboard/about',
        icon: DocumentDuplicateIcon
      },
      {
        name: 'Contact',
        href: '/dashboard/contact',
        icon: BeakerIcon
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
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-green-200 text-green-600 hover:bg-green-300 hover:texd-green-700': isActive,
                  'text-gray-600 hover:bg-sky-100 hover:text-blue-600': !isActive,
                },
              )}>
              <link.icon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }