import React from 'react';
import styles from './header.module.scss';
import { Form } from "semantic-ui-react";
import HeaderForm from './formulario';





export function Header(){
        
    
      
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <a className={styles.header__logo__image}>Event Booking</a>
                </div>
                <nav className={styles.navegacion}>
                    <a className={styles.navegacion__link} href='#'>Experiencias</a>
                    <a className={styles.navegacion__link} href='#'>El lugar para tu evento</a>
                    <a className={styles.navegacion__link} href='#'>Salas VIP</a>
                </nav>
                <nav className={styles.login}>
                    <a className={styles.navegacion__link} href='#'>Hazte Anfitrion</a>
                </nav>
            </div>
            <HeaderForm/>
        </header>
    )
}