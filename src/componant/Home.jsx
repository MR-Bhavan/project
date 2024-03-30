import React from 'react'
import '../App.css'
import Navbar from './Navbar';
import Itemcard from './Itemcard';
import Date from './Date';
import banner1 from '../image/banner1.avif'

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 className='text-center mt-3'>All 5G Mobile Phone</h1>    
            <section className='py-4 container'>
                <div className='banner'>
                <img src={banner1} alt="banner" />
                </div>
                <div className='row justify-content-center'>
                    {Date.ProductData.map((item ,index)=>{
                        return(
                            <Itemcard 
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            key={index}
                            />
                        )
                    })}
                </div>
            </section>    
        </div>
    );
};

export default Home
