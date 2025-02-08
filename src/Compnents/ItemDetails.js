import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { food_list } from '../asserts/assets';

const ItemDetails = () => {
    const { id } = useParams();
    const [itemdata, setItemData] = useState({});
    const [review,setReview]=useState([]);
    const [newReview, setNewReview] = useState("");
    console.log(id);

    useEffect(() => {
        const itemdetails = food_list.find((item) => item._id === id);
        setItemData(itemdetails);
        setReview(itemdetails?.reviews || []);

    }, [id]);

    const handleReviewSubmit = () => {
        if (newReview.trim()) {
            setReview([...review, newReview]);
            setNewReview(""); // Clear the input field
        }
    };

    return (
        <div className="p-5 bg-gray-50">
            {itemdata ? (
                <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-4/12 w-full lg:h-auto">
                        <img
                            src={itemdata.image}
                            alt="imageproduct"
                            className="w-full h-full"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="lg:w-4/12 w-full flex flex-col justify-center px-8 py-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">
                            {itemdata.name}
                        </h1>
                        <p className="text-2xl text-green-600 font-semibold mb-4">
                            Rs{itemdata.price * 15}/-
                        </p>
                        <p className="text-gray-700 text-lg mb-6">
                            {itemdata.description}
                        </p>
                        <p className="text-sm text-gray-500 uppercase font-medium mb-6">
                            Category: <span className="text-gray-800">{itemdata.category}</span>
                        </p>
                        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-screen">
                    <p className="text-gray-600 text-lg font-semibold">
                        Loading Item Details...
                    </p>
                </div>
            )}

            {/* Reviews Section */}
            <div className="mt-16 px-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reviews</h2>

                {/* List of Reviews */}
                <div className="space-y-4">
                    {review.length > 0 ? (
                        review.map((rev, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-100 rounded-lg shadow-md"
                            >
                                <p className="text-gray-700">{rev}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                    )}
                </div>

                {/* Add a Review */}
                <div className="mt-8">
                    <h3 className="text-xl font-medium text-gray-700 mb-4">Add a Review</h3>
                    <textarea
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows="4"
                        placeholder="Write your review here..."
                        value={newReview}
                        onChange={(e)=>setNewReview(e.target.value)}
                    />
                    <button
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                        onClick={handleReviewSubmit}
                    >
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
