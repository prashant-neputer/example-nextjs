"use client";

import { useEffect, useState } from "react";

export default function Product({
    params,
}: {
    params: Promise<{ id: BigInteger }>
}) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const id = (params).id;

    useEffect(() => {
        if (!id) return; // Wait for the `id` to be available

        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch product");
                }
                const data = await res.json();
                console.log(data);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <p className="text-center text-blue-500">Loading...</p>;
    }

    if (error || !product) {
        return <p className="text-center text-red-500">Failed to load product details.</p>;
    }

    const MAX_STARS = 5;
    const stars = [];

    for (let i = 0; i < MAX_STARS; i++) {
        if (i < Math.floor(product.rating.rate)) {
            stars.push(<span key={i} className="text-yellow-500">★</span>); // Filled star
        } else if (i < product.rating.rate) {
            stars.push(<span key={i} className="text-yellow-300">☆</span>); // Half star
        } else {
            stars.push(<span key={i} className="text-gray-400">★</span>); // Empty star
        }
    }
    return (
        <>
            {/* Product Detail Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Product Image */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={product.image}
                                className="w-full object-cover"
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
                                <span className="text-2xl font-bold text-blue-500">{product.price}</span>
                                <span className="ml-4 flex items-center text-yellow-500">
                                    {stars}
                                    <span className="text-gray-600 text-sm ml-2">({product.rating.count} reviews)</span>
                                </span>
                            </div>
                            {/* Add to Cart and Quantity */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center border border-gray-300 rounded">
                                    <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        defaultValue={1}
                                        className="w-12 text-center border-l border-r border-gray-300 py-2"
                                    />
                                    <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                                        +
                                    </button>
                                </div>
                                <button className="bg-blue-500 text-white text-sm font-bold py-3 px-6 rounded hover:bg-blue-600">
                                    Add to Cart
                                </button>
                            </div>
                            {/* Additional Details */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>Feature 1 of the product.</li>
                                    <li>Feature 2 of the product.</li>
                                    <li>Feature 3 of the product.</li>
                                    <li>Additional highlights or specifications.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
