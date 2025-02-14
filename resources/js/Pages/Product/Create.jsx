import { useForm } from "@inertiajs/react";
import React from "react";

const Create = () => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        description: "",
        price: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/product");
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Create Product</h1>

            {/* Form */}
            <form onSubmit={submit} className="space-y-4">
                {/* Name Input */}
                <div>
                    <label className="block text-gray-600 mb-1">Product Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Description Input */}
                <div>
                    <label className="block text-gray-600 mb-1">Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product description"
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                    )}
                </div>

                {/* Price Input */}
                <div>
                    <label className="block text-gray-600 mb-1">Price ($)</label>
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter price"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default Create;
