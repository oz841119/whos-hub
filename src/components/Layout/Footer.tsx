import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <span className={styles.copyright}>Copyright © 2023 WhosHub. All Rights Reserved.</span>
            </div>
        </footer>
    )
}