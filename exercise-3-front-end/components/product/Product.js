import { connect, useDispatch } from "react-redux";
import { newCartItem, requestCartItems } from "../../store/slices/cart/action";

const Product = ({ products, user, cart }) => {

    const dispatch = useDispatch();

    const product = products.product;
    const loggedUser = user.user;
 
    const checkItemInCart = (itemList) => {
        let flag = false
        itemList.forEach(element => {
            if (element.productId === product._id) {
                flag = true;
            }
        });
        return flag
    };

    const handleAddToCartButton = async (userId, userLogged) => {
        const cartItemList = await (dispatch(requestCartItems(userId)) || []);
        //const cartItemList = await cart.list || [];
        if (checkItemInCart(cartItemList)) {
            alert("This product is already in your cart");
            return;
        }
        await dispatch(newCartItem(userLogged, product, 1))
        alert("Product added to the cart succesfully!");
        return;
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
                <button className="item-button" onClick={() => handleAddToCartButton(loggedUser._id, loggedUser)}> 
                    Add to the Cart 
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        products: state.products,
        user: state.user,
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(Product);