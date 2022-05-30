import { connect, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { buyItem } from "../../store/slices/cart/action";
import { updateQuantity } from "../../store/slices/products/action";
import { walletUpdate } from "../../store/slices/user/action";

const CartItem = ({ products, cart, user }) => {
    
    const router = useRouter();
    const dispatch = useDispatch();
    const cartItem = cart.item;
    const product = products.product
    const loggedUser = user.user;

    const handleBuyButton = async (id, item, productt, idUser, userr) => {
        const res = await dispatch(walletUpdate(idUser, userr, productt.price));
        if (res === 404) {
            alert("Not enought money to buy this item");
            return;
        }
        dispatch(buyItem(id, item));
        dispatch(updateQuantity(productt._id, productt));
        alert("Product buyed succesfully!");
        router.replace('/cart');
    };

    return (
        <>
            <div className="item-box">
                <p> Product: {product.name} </p>
                <p> Price:  {product.price} </p>
                <p> Description:  {product.description} </p>
                <p> Shipment delivery time:  {product.shipmentDeliveryTime} </p>
                <p> Size:  {product.size} </p>
                <p> Quantity: {product.quantity} </p>
                <button className="item-button" onClick={() => handleBuyButton(cartItem._id, cartItem, product, loggedUser._id, loggedUser)}> 
                    Buy
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        products: state.products,
        cart: state.cart,
        user: state.user,
    };
};

export default connect(mapStateToProps)(CartItem);