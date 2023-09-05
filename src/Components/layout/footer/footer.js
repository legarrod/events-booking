import React from 'react';
import { Container } from 'semantic-ui-react';
import styles from "./footer.module.scss"


export default function Footer (){
    return (
        
            <footer className={styles.footer}>
                <Container>
        <div className={styles.footer__grid}>
            <div className={styles.footer__widget}>
                <h3 className={styles.footer__heading}>Acerca de</h3>
                <nav className={styles.footer__menu}>
                    <a className={styles.footer__enlace} href="#">Enlace 1</a>
                    <a className={styles.footer__enlace} href="#">Enlace 2</a>
                    <a className={styles.footer__enlace} href="#">Enlace 3</a>
                    <a className={styles.footer__enlace} href="#">Enlace 4</a>
                </nav>
            </div>

            <div className={styles.footer__widget}>
                <h3 className={styles.footer__heading}>Comunidad</h3>
                <nav className={styles.footer__menu}>
                    <a className={styles.footer__enlace} href="#">Enlace 1</a>
                    <a className={styles.footer__enlace} href="#">Enlace 2</a>
                    <a className={styles.footer__enlace} href="#">Enlace 3</a>
                    <a className={styles.footer__enlace} href="#">Enlace 4</a>
                </nav>
            </div>

            <div className={styles.footer__widget}>
                <h3 className={styles.footer__heading}>Anfitrión</h3>
                <nav className={styles.footer__menu}>
                    <a className={styles.footer__enlace} href="#">Enlace 1</a>
                    <a className={styles.footer__enlace} href="#">Enlace 2</a>
                    <a className={styles.footer__enlace} href="#">Enlace 3</a>
                    <a className={styles.footer__enlace} href="#">Enlace 4</a>
                </nav>
            </div>

            <div className={styles.footer__widget}>
                <h3 className={styles.footer__heading}>Asistencia</h3>
                <nav className={styles.footer__menu}>
                    <a className={styles.footer__enlace} href="#">Enlace 1</a>
                    <a className={styles.footer__enlace} href="#">Enlace 2</a>
                    <a className={styles.footer__enlace} href="#">Enlace 3</a>
                    <a className={styles.footer__enlace} href="#">Enlace 4</a>
                </nav>
            </div>
        </div>

        <div className={styles.footer__barra}>
            <nav className={styles.footer__barranav}>
                <a className={styles.footer__enlace} href="#">Enlace Nuevo</a>
                <a className={styles.footer__enlace} href="#">Enlace Nuevo</a>
                <a className={styles.footer__enlace} href="#">Enlace Nuevo</a>
                <a className={styles.footer__enlace} href="#">Enlace Nuevo</a>
            </nav>
        </div>
        </Container>
    </footer>
      
    )
}