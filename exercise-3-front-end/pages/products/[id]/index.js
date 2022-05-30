import Product from "../../../components/product/Product";
import { useRouter } from 'next/router';

const ProductItem = () => {
    
    const router = useRouter();

    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    Product
                </h1>
                <Product/>
                <button className='general-button' onClick={() => router.push('/products')}>
                    Go Back
                </button>
            </div>
        </>
    )
}

export default ProductItem