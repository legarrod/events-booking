import React from 'react';
import styles from './header.module.scss';
import { Form } from "semantic-ui-react";
import HeaderForm from './formulario';
import { Top_menu } from './Top_menu';





export function Header(){  
    return (
        <header className={styles.header}>
           <Top_menu/>
            <HeaderForm/>
        </header>
    )
}