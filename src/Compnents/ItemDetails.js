import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { food_list } from '../asserts/assets';

const ItemDetails = () => {
    const { id } = useParams();
    const [itemdata, setItemData] = useState([]);
    console.log(id);

    useEffect(() => {
        const itemdetails = food_list.find((item) => item._id === id);
        setItemData(itemdetails);
    }, [id]);

    // if (!itemdata) {
    //     return <div>Loading...</div>; 
    // }

    return (
        <div>
            <div>
                <img src={itemdata.image} alt='imageproduct' />
                <h1>{itemdata.name}</h1>
                <h1>{itemdata.price}</h1>
                <h1>{itemdata.description}</h1>
                <h1>{itemdata.category}</h1>
            </div>
        </div>
    );
}

export default ItemDetails;
