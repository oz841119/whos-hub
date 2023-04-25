import styles from './Layout.module.css'
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
    children: ReactNode
}

export default function Layout({children}: Props) {
    return (
        <>
        <div className={styles.navBarWrap}><NavBar/></div>
        <main className={styles.main}>{children}</main>
        <Footer/>
        </>
    )
}