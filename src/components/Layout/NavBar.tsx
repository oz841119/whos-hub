import { useEffect, useState } from 'react';
import styles from './NavBar.module.css'
import Link from 'next/link'

import {MdOutlineArticle, MdOutlineEmail, MdOutlineViewKanban, MdOutlineLightMode, MdDarkMode} from "react-icons/md"


export default function NavBar() {
    // ------------------------------------------
    const [themeColor, setThemeColor] = useState('light')
    const switchColor = () => {
        setThemeColor(themeColor === 'light' ? 'dark' : 'light')
    }
    useEffect(() => { // 切換網站深淺色
        if(themeColor === 'dark') {
            const root: HTMLElement = document.querySelector(':root')!
            root.style.setProperty('--main-bg-color', '#212121')
            root.style.setProperty('--sub-bg-color', '#343434')
            root.style.setProperty('--main-font-color', '#ffffffdb')
        } else {
            const root: HTMLElement = document.querySelector(':root')!
            root.style.setProperty('--main-bg-color', '#fff')
            root.style.setProperty('--sub-bg-color', '#f7f7f7')
            root.style.setProperty('--main-font-color', '#000000e1')
        }
    }, [themeColor])
    // ------------------------------------------
    const [isScreenMore767px, setIsScreenMore767px] = useState(false)
    useEffect(() => {
        setIsScreenMore767px(window.innerWidth > 767)
        function handleScreenSzie() {
            setIsScreenMore767px(window.innerWidth > 767)
        }
        addEventListener('resize', handleScreenSzie)
        return () => {
            removeEventListener('resize', handleScreenSzie)
        }
    }, [])
    // ------------------------------------------
    return (
        <nav className={styles.navBar}>
            <Link href="/">
                <h1 className={`${styles.navBarTitle}`}>WhosHub</h1>
            </Link>
            <div className={styles.navItems}>
                {isScreenMore767px && <NavLinkItems/>}
                <div className={styles.navItem} onClick={switchColor}>
                    {themeColor === 'dark' ? <MdOutlineLightMode/> : <MdDarkMode/>}
                </div>
            </div>
        </nav>
    )
}


function NavLinkItems() {
    return (
        <>
            <Link href="/article" className={styles.navItem}>
                <MdOutlineArticle/>Article
            </Link>
            <Link href="/article" className={styles.navItem}>
                <MdOutlineViewKanban/>About
            </Link>
            <Link href="/article" className={styles.navItem}>
                <MdOutlineEmail/>Connect
            </Link>
        </>
    )
}