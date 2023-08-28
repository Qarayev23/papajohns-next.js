'use client'

import Link from 'next/link'
import styles from './navbar.module.scss'
import { FaUserAlt } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import Logo from './logo/logo';
import Basket from '@/components/basket/basket';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}
const Navbar = () => {
  const { data: session, status } = useSession()
  console.log(status);

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
          <div className={styles.header__top__right}>
            <button className={styles.lang}>
              <Image src="/img/flag_az.png" width={33} height={33} alt="flag" />
              <span>Azərbaycanca</span>
              <AiFillCaretDown className={styles.lang__icon} />
            </button>
            {status !== 'unauthenticated' ? (
              <>
                <div className="">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button >
                        <Image src={session?.user?.image} alt={session?.user?.name} width={30} height={30} className='rounded-full' />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                           {({active}) => (
                            <button> Edit</button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </>

            ) : (
              <Link href="/register" className={styles.register}>Giriş</Link>
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
          <Link href="/" className={styles.register}>
            <FaUserAlt className={styles.register__icon} />
            <span>Giriş</span>
          </Link>
          <Basket />
        </div>
      </div>
      <nav className={styles.nav}>
        <div className="g-container">
          <ul className={styles.nav__list}>
            {navLinks.map(item => {
              return (
                <li className={styles.nav__item} key={item.label}>
                  <Link href={item.path} className={styles.nav__link}>{item.label}</Link>
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



