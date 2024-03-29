import React from "react";

const Home = () => {
  return (
    <div>
      <div className='add-to-cart'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg' />
      </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://images.macrumors.com/t/M6OOZi1LBirkudS4HQ3yibhQqgY=/800x0/filters:quality(90)/article-new/2017/09/iphonexdesign.jpg?lossy' />
        </div>
        <div className='text-wrapper item'>
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
