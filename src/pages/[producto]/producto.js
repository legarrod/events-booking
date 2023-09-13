import Footer from '@/Components/layout/footer/footer';
import { Top_menu } from '@/Components/layout/header/Top_menu';
import Producto from '@/Components/layout/producto/producto';
import { BasicLayout } from '@/layouts';
import React from 'react';
import styles from './producto.module.scss'





export default function ProductPage(props) {
    const {product} = props
    return(
       <>
        <header className={styles.header}>
            <Top_menu/>
        </header>
       <Producto product={product}/>
       </>
          
       
    )

}