import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { Store } from '../utils/Store';
import Image from 'next/image';

export default function Layout({ title, children }) {
    const { state } = useContext(Store);
    const [currentLanguage, setCurrentLanguage] = useState('uk');
    const { cart } = state;


    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'uk' ? 'en' : 'uk';
        setCurrentLanguage(newLanguage);
    }
    return (
        <>

            <Head>
                <title>{title ? title + " - MIU Market" : "MIU Market"}</title>
                <meta name="description" content="Ecommerce site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='flex min-h-screen flex-col justify-between'>
                <header>

                    <nav className='flex items-center justify-center px-4  space-x-8 shadow-md'
                        style={{ backgroundColor: "#F9F9F9" }}
                    >
                        <Link href="/">
                            <p
                                className='text-xl border-b-2 border-black'
                                style={{ fontFamily: 'Myriad Pro', fontSize: '18px' }}
                            >Каталог</p>
                        </Link>

                        {/* Пошук */}
                        <div className="relative">
                            <input
                                type="text"
                                className="px-4 py-2 rounded-full text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 "
                                style={{
                                    backgroundColor: "#3ACCE9",
                                    width: "303px",
                                    height: "30px"
                                }}
                                placeholder="Пошук"
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center">
                                <Image
                                    src="/images/search.svg"
                                    alt="Лупа"
                                    width={17}
                                    height={18}
                                />
                            </div>
                        </div>

                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                alt="Логотип MIU Market"
                                width={206}
                                height={80}
                            />
                        </Link>

                        {/* Номер телефону */}
                        <p className='text-xl font-bold' style={{ color: "#3ACCE9" }}>+380 66 523 23 07</p>

                        {/* Група іконок */}
                        <div className="flex space-x-2">
                            {/* Логін */}
                            <Link href="/login">
                                <div className="relative">
                                    <Image
                                        src="/images/user.svg"
                                        alt="Логін"
                                        width={23}
                                        height={25}
                                    />

                                </div>
                            </Link>

                            {/* Корзина */}
                            <Link href="/cart" className='relative'>
                                <Image
                                    src="/images/cart.svg"
                                    alt="Корзина"
                                    width={27}
                                    height={24}
                                />
                                {cart.cartItems.length > 0 && (
                                    <span className='absolute top-0 right-0 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                    </span>
                                )}
                            </Link>

                            {/* Смена теми */}
                            <div className="relative">
                                <Image
                                    src="/images/themeswitcher.svg"
                                    alt="Смена теми"
                                    width={23}
                                    height={23}
                                />

                            </div>

                            {/* Світчер смени мови */}
                            <div className="relative">
                                <button
                                    onClick={toggleLanguage}
                                    className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center focus:outline-none"
                                >
                                    {currentLanguage === 'uk' ? 'УК' : 'EN'}
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>

                <main className='container m-auto mt-4 relative px-4 '>
                    {children}
                </main>

                <footer className='flex h-10 justify-center items-center  shadow-inner'>
                    © All rights reserved
                </footer>
            </div>
        </>
    )
}
