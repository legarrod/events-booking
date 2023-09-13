import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './ProductCard';
import styles from './Vitrina.module.scss'
import imagen1 from '../../../img/salones/concert-2119610_1280.jpg'
import imagen2 from '../../../img/salones/convention-center-3908240_1280.jpg'
import imagen3 from '../../../img/salones/events-1455715_1280.jpg'
import imagen4 from '../../../img/salones/events-986055_1280.jpg'
import imagen5 from '../../../img/salones/interiors-5581925_1280.jpg'
import imagen6 from '../../../img/salones/concert-2119610_1280.jpg'
import productsData from '../../../pages/api/products';

export function  ProductCarousel  () {
  // Estado para mantener el número de elementos a mostrar
  const [slidesToShow, setSlidesToShow] = useState(4);

  const [products, setProducts] = useState([]);

 console.log(products, '++++++++++++++++');
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Función para calcular el número de elementos a mostrar
  const calculateSlidesToShow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(4);
    }
  };

  // Ejecutar la función al cargar la página y cuando cambie el tamaño de la ventana
  useEffect(() => {
    calculateSlidesToShow();
    window.addEventListener("resize", calculateSlidesToShow);
    return () => {
      window.removeEventListener("resize", calculateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    //arrows: true  ,
    autoplaySpeed: 10000
  };

  return (
    <div className={styles.vitrina__product__carousel}>
      <Slider {...settings}className={styles.vitrina__producto}>
        {products.map((product, index) => (
          <div key={index} className={styles.vitrina__card}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;