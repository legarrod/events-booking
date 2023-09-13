import React from 'react';
import styles from './producto.module.scss'
import Slider from 'react-slick';
import vineta from '../../../img/icons/calendar.png'

export default function  Producto  (props){
    const {product} = props
    console.log(product)
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
      
    return(
       <div>
        <div  className={styles.product__container}>
        <div className={styles.product__images}>
            <Slider {...settings}>
                {product.images.map((img, index) => (
                <div key={index} className={styles.vitrina__card}>
                    <img key={index} src={img.src} alt={`Product ${index}`} className={styles.product__imagen} />
                </div>
                ))}
            </Slider>
        </div>
        <div className={styles.product__content}>
            <div className={styles.product__title}><h2>{product.name}</h2></div>
            <div className={styles.product__description}>
            <span>{product.descripcion}</span>
            </div>
            <div className={styles.product__capacidad}>
            <span>Capacidad: {product.capacidad}</span>
            </div>
            <div className={styles.product__capacidad}>
            <span>Ciudad: {product.ciudad}</span>
            </div>
            <div className={styles.product__capacidad}>
            <span>Dirección: {product.direccion}</span>
            </div>
            <div className={styles.product__adicionales}>
                <h3 className={styles.product__adicionales__title}>Lo que este lugar ofrece</h3>
                    <ul className={styles.product__lista_ul}>
                    {product.adicionales.map((add, index) => (
                        <div className={styles.product__lista_content}>
                            <img src="/src/img/icons/calendar.png" className={styles.product__vineta} />
                            <li className={styles.product__lista_li} key={index}>{add}</li>
                        </div>
                    ))}
                    </ul>
            </div>
                <a href="#" className={styles.product__busqueda_boton}>Reservar</a>
        </div>

        <div>
        </div>
       </div>
        <div className={styles.product__data_adicional}>
        <h3 className={styles.product__adicionales__title}>Donde sera el evento</h3>
        
        </div>
       </div>
    )
}