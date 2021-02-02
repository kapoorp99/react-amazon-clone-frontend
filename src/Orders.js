import React,{useState, useEffect} from 'react'
import './Orders.css'
import { useStateValue } from "./StateProvider";
import {db} from './firebase';
import Order from './Order';

function Orders() {
    const [{basket,user}, dispatch] = useStateValue();
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        if(user) {
            console.log(user);
        }
        else {
            setOrders([])
        }
    },[user])
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {orders?.map(order =>(
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
