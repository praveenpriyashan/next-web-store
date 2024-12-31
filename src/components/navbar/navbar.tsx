'use client'

import {Fragment} from "react";
import {adminNavOption, navOptions} from "@/util/page.tsx";
import styles from './navbar.module.css'

const isAdminView = false;
const isAuthUser = true;
const user = {
    role: "admin"
}

const NavItems = () => {
    return (
        <div className={'items-center justify-between w-full md:flex md:w-auto'}>
            <ul className={'flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white'}>
                {
                    isAdminView ? adminNavOption.map((item) => (
                        <li className={'cursor-pointer block py-2 pr-4 text-gray-900 rounded md:p-0'} key={item.id}>
                            {item.label}
                        </li>
                    )) : navOptions.map((item) => (
                        <li className={'cursor-pointer block py-2 pr-4 text-gray-900 rounded md:p-0'} key={item.id}>
                            {item.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export const Navbar = () => {
    return (
        <nav className={'bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200'}>
            <div className={'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'}>
                <div className={'flex items-center cursor-pointer'}>
                  <span className={'text-black self-center text-2xl font-semibold- whitespace-nowrap'}>
                      ECommercy
                  </span>
                </div>
                <div className={'text-black flex md:order-2 gap-2'}>
                    {
                        !isAdminView && isAuthUser ? (
                            <Fragment>
                                <button className={styles.button}>Account</button>
                                <button className={styles.button}>Cart</button>
                            </Fragment>
                        ) : null
                    }
                    {
                        user.role === 'admin' ? (
                            isAdminView ? <button className={styles.button}>client view</button> : <button className={styles.button}>adminview</button>
                        ) : null
                    }
                    {
                        isAuthUser ? <button className={styles.button}>logout</button> : <button className={styles.button}>login</button>
                    }
                    <button
                        data-colapse-toggle={'navbar-sticky'}
                        type={'button'}
                        className={'inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100'}
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        // onClick={()=>setShowNavPopup(true)}
                    >
                        <span className={'sr-only'}>Open main menu </span>
                        <svg
                         className={'w-6 h-6'}
                         aria-hidden={'true'}
                         fill={'currentColor'}
                         viewBox={'0 0 20 20'}
                         xmlns={"http://www.w3.org/2000/svg"}
                        >
                            <path
                                fillRule='evenodd'
                                d="M18.278 6.064a1 1 0 01.064 1.064L11 17.936l-6.936 6.936a1 1 0 01-1.064-1.064L4.064 11H11v-2h5.936a1 1 0 01.064 1.064z"
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </button>
                </div>
                <NavItems/>
            </div>
        </nav>
    )
}