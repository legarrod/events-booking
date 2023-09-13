export {default } from './producto';
import productsData from '../../pages/api/products';

export async function getServerSideProps(context){
    const filteredProduct = productsData.find((item) => item.slug === context.params.producto);

    return {
        props: {
            product: filteredProduct,
        }
    }
}