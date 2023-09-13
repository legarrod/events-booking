import React from 'react';
import styles from './Vitrina.module.scss'
import Slider from 'react-slick';
import Link from 'next/link';


export default function  ProductCard  ({product}){
    console.log(product.images);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000  
    };
  return (
  
        product ? 
        <Link href={product.slug}>
            <div className={styles.vitrina__product__card}>
                <div className={styles.vitrina__product__images}>
                    <Slider {...settings} className={styles.vitrina__images}>
                    {product.images.map((image, index) => (
                        <img key={index} src={image.src} alt={`Product ${index}`} className={styles.vitrina__imagen} />
                    ))}
                    </Slider>
                    <h3 className={styles.vitrina__card__title}>{product.name}</h3>
                    <p className={styles.vitrina__card__descripcion}>{product.descripcion}</p>
                    <span className={styles.vitrina__card__capacidad}>Capacidad:{product.capacidad}</span>
                    <p className={styles.vitrina__card__descripcion}>{product.ciudad}</p>
                </div>
            </div>
        </Link>
       : <></> 

  );
};
