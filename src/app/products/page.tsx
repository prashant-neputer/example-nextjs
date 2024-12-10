"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);


    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
                    Our Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product: any) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <Link href={`/products/${product.id}`}>
                                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                </Link>
                                <p className="text-gray-600 text-sm mb-4">
                                    {product.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-blue-500 font-bold">{product.price}</span>
                                    <button className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded hover:bg-blue-600">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}