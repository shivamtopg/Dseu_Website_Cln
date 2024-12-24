import { Button, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/Logos.png'
import g20logo from '../assets/g20-logo.png'



const navigation = [
  { name: 'Academics', href: '#', current: false, dropdown: true },
  { name: 'Admissions', href: '#', current: false, dropdown: true },
  { name: 'For Students', href: '#', current: false, dropdown: true },
  { name: 'For Faculty and Staff', href: '#', current: false, dropdown: true },
  { name: 'For Research', href: '#', current: false, dropdown: true },
  { name: 'Alumni', href: '#', current: false, dropdown: true },
  { name: 'Administrations', href: '#', current: false, dropdown: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar1() {
  return (
    <div className='bg-white flex flex-col justify-center items-center'>
      <div className="flex items-center justify-center self-center">
        <img src={Logo} className="h-24 w-auto p-3" />
        <div className="text-xl w-48 text-[#41a4da] font-serif font-bold p-1 flex-wrap">
          Delhi Skill And Entrepreneurship University
        </div>
        <img src={g20logo} className='h-24 w-auto p-3'/>
      </div>

      <Disclosure as="nav">
        <hr />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 relative">
                  {navigation.map((item) => (
                    <Disclosure as="div" key={item.name} className="relative group">
                      <Button
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'text-black group' : 'text-black',
                          'px-3 py-1 text-sm font-medium flex'
                        )}
                      >
                        {item.name}
                        <ChevronDownIcon className="h-4 w-auto font-extrabold" />
                      </Button>
                      <div className="absolute left-0 mt-1 space-y-1 rounded-md bg-white shadow-lg">
                        {/* Dropdown items can be populated here for all buttons */}
                        <a
                          href="#"
                          className="hidden px-4 py-2 text-white text-sm bg-[#456474] group-hover:block"
                        >
                          Departments
                        </a>
                        <a
                          href="#"
                          className="hidden px-4 py-2 text-black text-sm bg-white group-hover:block"
                        >
                          Option 2
                        </a>
                        <a
                          href="#"
                          className="hidden px-4 py-2 text-black bg-white text-sm group-hover:block"
                        >
                          Option 3
                        </a>
                      </div>
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
