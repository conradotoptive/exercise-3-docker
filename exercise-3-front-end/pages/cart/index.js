import { useRouter } from 'next/router';
import CartItems from '../../components/cart/CartItems';

const Cart = () => {
    
    const router = useRouter();

    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    This is your cart!
                </h1>
                <CartItems/>
                <button className='general-button' onClick={() => router.push('/home')}>
                    Go Back Home
                </button>
            </div>
        </>
    )
}

export default Cart
