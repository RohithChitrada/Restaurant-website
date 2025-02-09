import React, { createContext, useState, useContext } from 'react';


const ShopContext=createContext();

export const ShopProvider=({children})=>{
    const [cart,SetCart]=useState([]);

    const addToCart=(item)=>{
        SetCart((prevCart)=>{
            const existingItem=prevCart.find((cartItem)=> cartItem._id===item._id);

            if(existingItem){
                return prevCart.map((cartItem)=>cartItem._id===item._id 
                ?{...cartItem,quantity:cartItem.quantity+1}
                :cartItem);
            }

            return [...prevCart,{...item,quantity:1}];
        });

    };

    const removeFromCart=(id)=>{
        SetCart((prevCart)=>prevCart.filter((item)=>item._id!==id))
    };

    const clearCart=()=>{
        SetCart([]);
    };
    const getLength=()=>{
        return cart.reduce((total, item) => total + item.quantity, 0);
    }


    return (
        <ShopContext.Provider value={{cart,addToCart,removeFromCart,clearCart,getLength}}>
            {children}
        </ShopContext.Provider>
    );
};


export const useShop=()=>{
    return useContext(ShopContext);
}
