import CartItem from "../../../components/cart/CartItem";
import { useRouter } from 'next/router';

const ItemCart = () => {
    
    const router = useRouter();

    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    Cart Item
                </h1>
                <CartItem/>
                <button className='general-button' onClick={() => router.push('/cart')}>
                    Go Back
                </button>
            </div>
        </>
    )
}

export default ItemCart