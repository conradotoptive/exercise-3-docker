import { useRouter } from 'next/router';

const Home = () => {

    const router = useRouter();

    return (
        <>
            <div className='center'>
                <title>👨‍💻 Exercise 3</title>
                <h1 className='title'>
                    Home
                </h1>
                <button className='general-button' onClick={() => router.push('/userProfile')}>
                    Profile
                </button>
                <p/>
                <button className='general-button' onClick={() => router.push('/cart')}>
                    Cart
                </button>
                <p/>
                <button className='general-button' onClick={() => router.push('/purchaces')}>
                    Purchaces
                </button>
                <p/>
                <button className='general-button' onClick={() => router.push('/products')}>
                    Products
                </button>
                <p/>
                <button className='general-button' onClick={() => window.location = '/'}>
                    Log out
                </button>

            </div>
        </>
    )
}

export default Home