/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Technologies', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Incubator', href: '#' },
  { name: 'Contact', href: '#' },
];

const socialMediaIcons = [
  {
    icon: '/images/icons/fb.svg',
    link: 'https://www.facebook.com/kennedytechmk',
    alt: 'Kennedy Technologies MK (Facebook)',
  },
  {
    icon: '/images/icons/instagram.svg',
    link: 'https://www.instagram.com/kennedytechnology',
    alt: 'Kennedy Technologies MK (Instagram)',
  },
  {
    icon: '/images/icons/linkedin.svg',
    link: 'https://www.linkedin.com/company/kennedytechnology',
    alt: 'Kennedy Technologies MK (LinkedIn)',
  },
  {
    icon: '/images/icons/twitter.svg',
    link: 'https://twitter.com/kennedytechmk',
    alt: 'Kennedy Technologies MK (Twitter)',
  },
];

const Navbar = () => {
  return (
    <div className="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <div className="mx-auto px-4 sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo.svg"
                      alt="Kennedy Technology"
                      width={200}
                      height={50}
                    />
                  </a>
                </Link>
                {/* <div className="flex items-center lg:hidden">
                  <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div> */}
              </div>
            </div>
            <div className="hidden lg:flex lg:space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-white hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="absolute flex items-center justify-end inset-y-0 right-0">
              {socialMediaIcons.map((item, index) => (
                <Link href={item.link} key={index}>
                  <a
                    className={cx('social-media-icons', {
                      'mr-2': index !== socialMediaIcons.length - 1,
                    })}
                  >
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <>
                  <Image
                    src="/images/logo.svg"
                    alt="Kennedy Technology"
                    width={200}
                    height={50}
                  />
                </>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                {socialMediaIcons.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <a
                      className={cx('social-media-icons', {
                        'mr-2': index !== socialMediaIcons.length - 1,
                      })}
                    >
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={40}
                        height={40}
                      />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition> */}
      </Popover>
    </div>
  );
};

export default Navbar;
