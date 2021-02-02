import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h1>Hello, {user?.email}</h1>
                    <h3 className="checkout__title">
                        Your Cart
                    </h3>
                    {
                        basket.map((item,index) => (
                                <CheckoutProduct
                                    key={index}
                                    id={item?.id}
                                    title={item?.title}
                                    image={item?.image}
                                    price={item?.price}
                                    rating={item?.rating}
                                />
                        ))
                    }
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
