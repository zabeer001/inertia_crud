import { useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';

const Edit = ({ product }) => {
    const { data, setData, put, errors, reset } = useForm({
        name: product.name || "",
        description: product.description || "",
        price: product.price || "",
    });

    useEffect(() => {
        // Reset the form if the product data changes (useful when navigating)
        setData({
            name: product.name || "",
            description: product.description || "",
            price: product.price || "",
        });
    }, [product]);

    function submit(e) {
        e.preventDefault();
        put(`/product/${product.id}`); // Use PUT method to update the product
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <h2>{data.name}</h2>
            <div>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full border-gray-300 rounded-md p-2"
                    />

                    <input
                        type="text"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full border-gray-300 rounded-md p-2"
                    />

                    <input
                        type="text"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        className="w-full border-gray-300 rounded-md p-2"
                    />

                    <button type="submit">Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
