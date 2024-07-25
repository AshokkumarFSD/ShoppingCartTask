export default function SingleProduct({ product, cartItems, setCartItems, cartCount, setCartCount }) {

    const index = cartItems.findIndex(item => item.id === product.id);
    const isAdded = index !== -1;

    // this method will get call when ever the add or remove cart button clicked
    function cartAction() {
        const index = cartItems.findIndex(item => item.id === product.id);
        //check already same product exist or not
        if (index !== -1) {
            const arrayWithoutCurrentProduct = [];
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id !== product.id) {
                    arrayWithoutCurrentProduct.push(cartItems[i]);
                }
            }
            // remove product and decrease count
            setCartItems(arrayWithoutCurrentProduct);
            setCartCount(cartCount - 1);
        }
        else {
            // add product and increase count
            setCartCount(cartCount + 1);
            setCartItems([...cartItems, product]);
        }
    }

    // to display the star ratings
    const StarRating = ({ count }) => {
        const stars = Array.from({ length: count }, (_, index) => (
            <div key={index} className="bi-star-fill"></div>
        ));

        return <div class="d-flex justify-content-center small text-warning mb-2">{stars}</div>;
    };


    return (
        <div className="product_container">
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    Rs. {product.price}
                </div>
            </div>

            {product.ratings ?
                <StarRating count={product.ratings}></StarRating>
                : <></>}

            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <button className='cart_button' onClick={cartAction}>
                        {isAdded ? "Remove from cart" : "Add to cart"}</button>
                </div>
            </div>
        </div>)
}
