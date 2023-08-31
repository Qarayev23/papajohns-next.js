'use client'

import Link from 'next/link'
import styles from './navbar.module.scss'
import { FaUserAlt } from "react-icons/fa";
import { AiFillCaretDown, AiOutlineLogout } from "react-icons/ai";
import Logo from './logo/logo';
import Basket from '@/components/basket/basket';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import SearchBar from '@/components/searchBar';

const Navbar = () => {
  const { data: session, status } = useSession()

  return (
    <header className={styles.header}>
      <div className="g-container">
        <div className={styles.header__top}>
          <Logo />

          <ul className={styles.header__top__left}>
            <li className={styles.header__top__item}>
              <Link href="" className={styles.header__top__link}>Restoranlar</Link>
            </li>
            <li className={styles.header__top__item}>
              <Link href="" className={styles.header__top__link}>PapaBonus</Link>
            </li>
          </ul>

          <SearchBar />

          <div className={styles.header__top__right}>
            <button className={styles.lang}>
              <Image src="/img/flag_az.png" width={33} height={33} alt="flag" />
              <span>Azərbaycanca</span>
              <AiFillCaretDown className={styles.lang__icon} />
            </button>
            {status !== 'unauthenticated' ? (
              <Menu as="div" className="relative">
                {session?.user?.image && session?.user?.name && (
                  <Menu.Button className="flex flex-col items-center gap-2">
                    <Image src={session?.user?.image} alt={session?.user?.name} width={30} height={30} className='rounded-full' />
                    <span className='font-bold'>{session?.user?.name}</span>
                  </Menu.Button>
                )}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className={styles.register__dropdown}>
                    <Menu.Item>
                      <button className={styles.register__dropdown__item} onClick={() => signOut({ callbackUrl: "/register" })}>
                        Çıxış et
                        <AiOutlineLogout />
                      </button>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link href="/register" className={styles.register}>Daxil ol</Link>
            )}
            <Basket />
          </div>

        </div>

        <div className={styles.header__mobile}>
          <Logo />
          <button className={styles.lang}>
            <Image src="/img/flag_az.png" width={25} height={25} alt="flag" />
            <span>Az</span>
          </button>
          {status !== 'unauthenticated' ? (
            <Menu as="div" className="relative">
              {session?.user?.image && session?.user?.name && (
                <Menu.Button className="flex flex-col items-center gap-2">
                  <Image src={session?.user?.image} alt={session?.user?.name} width={30} height={30} className='rounded-full' />
                  <span className='font-bold'>{session?.user?.name}</span>
                </Menu.Button>
              )}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className={styles.register__dropdown}>
                  <Menu.Item>
                    <button className={styles.register__dropdown__item} onClick={() => signOut({ callbackUrl: "/register" })}>
                      Çıxış et
                      <AiOutlineLogout />
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link href="/register" className={styles.register}>
              <FaUserAlt className={styles.register__icon} />
              <span>Giriş</span>
            </Link>
          )}
          <Basket />
        </div>
      </div>

      <nav className={styles.nav}>
        <div className="g-container">
          <ul className={styles.nav__list}>
            {navLinks.map(item => {
              return (
                <li className={styles.nav__item} key={item.label}>
                  <Link href={"/menu" + item.path} className={styles.nav__link}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar



