import { connect, useDispatch } from "react-redux";

const Purchace = ({ products, cart }) => {

    const cartItem = cart.item;
    const product = products.product;

    return (
        <>
            <div className="item-box">
                <p> Product: {product.name} </p>
                <p> Price:  {product.price} </p>
                <p> Description:  {product.description} </p>
                <p> Shipment delivery time:  {product.shipmentDeliveryTime} </p>
                <p> Size:  {product.size} </p>
                <p> Quantity bought: {cartItem.quantity} </p>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        products: state.products,
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(Purchace);