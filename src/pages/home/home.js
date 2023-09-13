import { ProductCarousel } from '@/Components/layout/vitrina';
import { BasicLayout } from '@/layouts';
import React from 'react';


export default function homePage() {
    return(
       <BasicLayout>
        <ProductCarousel/>
       </BasicLayout>
    )
}