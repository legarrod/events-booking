import { Header } from '@/Components/layout';
import Footer from '@/Components/layout/footer/footer';
import { ProductCarousel } from '@/Components/layout/vitrina';
import React from 'react';
import styles from './Basiclayout.module.scss';


export function BasicLayout(props) {
    const {children} = props;

    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}