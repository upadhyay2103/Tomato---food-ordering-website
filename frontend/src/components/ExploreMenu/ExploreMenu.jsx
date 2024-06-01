import React, { useState } from 'react';
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets.js';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
We pride ourselves on offering a diverse menu that caters to every palate, ensuring an unforgettable dining experience. Here's a sneak peek into the delightful world of our cuisine</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
