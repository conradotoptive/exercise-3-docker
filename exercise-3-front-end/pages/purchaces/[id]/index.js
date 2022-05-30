import Purchace from "../../../components/purchace/Purchace";
import { useRouter } from 'next/router';

const ItemPurchaced = () => {
    
    const router = useRouter();

    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    Item Purchaced
                </h1>
                <Purchace/>
                <button className='general-button' onClick={() => router.push('/purchaces')}>
                    Go Back
                </button>
            </div>
        </>
    )
}

export default ItemPurchaced