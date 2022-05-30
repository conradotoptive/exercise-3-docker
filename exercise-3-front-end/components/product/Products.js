import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { requestActiveProducts, setProduct } from "../../store/slices/products/action";
import { useRouter } from 'next/router';

const Products = ({ products }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(requestActiveProducts());
    }, [])
    
    const handleSeeItemClick = (product) => {
        dispatch(setProduct(product));
        router.push(`/products/${product._id}`);
    }

    return (
        <>
            {
                (products.productList || []).map((product, index) => (
                    <div key={index} className="item-box">
                        {product.name}
                        <p/>
                        <button className="item-button" onClick={() => handleSeeItemClick(product)}>
                            See Item
                        </button>
                    </div>
                ))
            }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps)(Products);
