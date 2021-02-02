import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
                alt="" />
                <div className="home__row">
                    <Product
                    id="1239" 
                    title='Anker USB C to Lightning Cable Powerline II'
                    price={99.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51dK6Od0J2L._AC_SL1500_.jpg" 
                    rating={4} />
                    <Product
                    id="1244"
                    title='Anker USB C to Lightning Cable Powerline II'
                    price={69.04}
                    image="https://images-na.ssl-images-amazon.com/images/I/61z3GQgEPZL._SL1200_.jpg" 
                    rating={3} />
                </div>
                <div className="home__row">
                <Product
                    id="12567" 
                    title='Anker USB C to Lightning Cable Powerline II'
                    price={99.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51dK6Od0J2L._AC_SL1500_.jpg" 
                    rating={4} />
                <Product
                    id="78126" 
                    title='Anker USB C to Lightning Cable Powerline II'
                    price={69.04}
                    image="https://images-na.ssl-images-amazon.com/images/I/61z3GQgEPZL._SL1200_.jpg" 
                    rating={3} />
                <Product
                    id="1288888" 
                    title='Anker USB C to Lightning Cable Powerline II'
                    price={69.04}
                    image="https://images-na.ssl-images-amazon.com/images/I/61z3GQgEPZL._SL1200_.jpg" 
                    rating={3} />
                <Product
                    id="1289999"
                    title="Power Rangers Beast Morphers Special Episode 3-Pack Action Figure Toys"
                    price={100}
                    image="https://m.media-amazon.com/images/I/71o0B+5uPyL._AC_UL320_.jpg"
                    rating={4} 
                    />
                    <Product
                    id="298989788"
                    title="Hulk Toy"
                    price={103}
                    image="https://images-na.ssl-images-amazon.com/images/I/81viIRBjKtL._AC_SL1500_.jpg"
                    rating={4} 
                    />
                </div>
                <div className="home__row">
                <Product 
                    id="67676130"
                    title='Anker USB C to Lightning Cable Powerline II'
                    price={99.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51dK6Od0J2L._AC_SL1500_.jpg" 
                    rating={4} 
                />  
                </div>
            </div>
        </div>
    )
}

export default Home
