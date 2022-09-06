import React, {useState, useEffect} from "react";
import {Products, Navbar, Cart, Checkout, Footer} from './components';
import {commerce} from './lib/commerce';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, {quantity})

        setCart(response);
    }

    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId);

        setCart(response);
    }

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch (error){
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Routes>
                    <Route exact path="/" element={
                    <Products products={products} 
                    onAddToCart ={handleAddToCart} 
                    />}/>

                    <Route exact path="/cart" element={
                    <Cart 
                        cart={cart} 
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}
                    />}/>

                    <Route exact path="/checkout" element={
                    <Checkout 
                        cart={cart}
                        order={order}
                        onCaptureCheckout={handleCaptureCheckout}
                        error={errorMessage}
                        />}/>

                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;