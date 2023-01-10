import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <div className='products-heading'>
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {['Product1', 'Product2'].map(
          (p)=>p
        )}
      </div>
      <FooterBanner/>
    </>
  )
}

export const getServerSideProps = async() =>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
}

export default Home