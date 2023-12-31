import Link from "next/link";
import styles from "../app.module.css";

export default function Navbar() {


    return(
        <nav className={styles.navbar}>
            <div className={styles.internalNav}>
                <Link className={styles.title} href="/">Home</Link>
                <Link className={styles.title} href="/semester/1">Primeiro</Link>
                <Link className={styles.title} href="/semester/2">Segundo</Link>
                <Link className={styles.title} href="/semester/3">Terceiro</Link>
                <Link className={styles.title} href="/semester/4">Quarto</Link>
                <Link className={styles.title} href="/semester/5">Quinto</Link>
                <Link className={styles.title} href="/semester/6">Sexto</Link>
                <Link className={styles.title} href="/semester/7">Sétimo</Link>
                <Link className={styles.title} href="/semester/8">Oitavo</Link>
            </div>
          
        </nav>
    );

}