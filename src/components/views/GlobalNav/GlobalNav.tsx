import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlusSmIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import classNames from "../../../utils/classNames";
import Link from "next/link";
import JoinGameModal from "../../JoinGameModal/JoinGameModal";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Baseball", href: "/baseball" },
  // { name: "Football", href: "/football" },
  // { name: "Basketball", href: "/basketball" },
];

export default function Example() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => {
                    const isCurrent = router.asPath === item.href;
                    return (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            isCurrent
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center">
                <JoinGameModal />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => {
                const isCurrent = router.asPath === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <Disclosure.Button
                      className={classNames(
                        isCurrent
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
