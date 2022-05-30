import Products from "../../components/product/Products";
import { useRouter } from 'next/router';

const ProductsPage = () => {

    const router = useRouter();
    
    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    This is the product catalogue!
                </h1>
                <Products/>
                <p/>
                <button className='general-button' onClick={() => router.push('/home')}>
                    Go Back Home
                </button>
            </div>
        </>
    )
}

export default ProductsPage
