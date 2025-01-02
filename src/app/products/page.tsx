"use client"
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
}

const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return await res.json();
}


export default function Products() {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    // Loading state
    if (isLoading) {
        return <p className="text-center text-blue-500">Loading...</p>;
    }

    // Error state
    if (isError || !products) {
        return <p className="text-center text-red-500">Failed to load product details.</p>;
    }

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