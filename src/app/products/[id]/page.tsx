"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Type definition for the product
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

// Create a function to fetch product details
const fetchProduct = async (id: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }
    return res.json();
};

export default function Product({
    params,
}: {
    params: { id: string };
}) {
    // Quantity state
    const [quantity, setQuantity] = useState(1);

    // Use React Query to fetch and manage product data
    const {
        data: product,
        isLoading,
        isError
    } = useQuery<Product>({
        queryKey: ['product', params.id],
        queryFn: () => fetchProduct(params.id),
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    // Star rating calculation function
    const renderStars = (rate: number) => {
        const MAX_STARS = 5;
        return Array.from({ length: MAX_STARS }, (_, i) => {
            if (i < Math.floor(rate)) {
                return <span key={i} className="text-yellow-500">★</span>; // Filled star
            } else if (i < rate) {
                return <span key={i} className="text-yellow-300">☆</span>; // Half star
            } else {
                return <span key={i} className="text-gray-400">★</span>; // Empty star
            }
        });
    };

    // Loading state
    if (isLoading) {
        return <p className="text-center text-blue-500">Loading...</p>;
    }

    // Error state
    if (isError || !product) {
        return <p className="text-center text-red-500">Failed to load product details.</p>;
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Product Image */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-96 object-contain"
                        />
                    </div>
                    {/* Product Details */}
                    <div>
                        <h1 className="text-4xl font-bold text-blue-500 mb-4">
                            {product.title}
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">
                            {product.description}
                        </p>
                        {/* Price and Rating */}
                        <div className="flex items-center mb-6">
                            <span className="text-2xl font-bold text-blue-500">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className="ml-4 flex items-center text-yellow-500">
                                {renderStars(product.rating.rate)}
                                <span className="text-gray-600 text-sm ml-2">
                                    ({product.rating.count} reviews)
                                </span>
                            </span>
                        </div>
                        {/* Add to Cart and Quantity */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center border border-gray-300 rounded">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value);
                                        setQuantity(isNaN(value) ? 1 : Math.max(1, value));
                                    }}
                                    className="w-12 text-center border-l border-r border-gray-300 py-2"
                                />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => alert(`Added ${quantity} item(s) to cart`)}
                                className="bg-blue-500 text-white text-sm font-bold py-3 px-6 rounded hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                        {/* Additional Details */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Product Details:</h3>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li>Category: {product.category}</li>
                                <li>Rating: {product.rating.rate}/5</li>
                                <li>Total Reviews: {product.rating.count}</li>
                                <li>Unique Product ID: {product.id}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}