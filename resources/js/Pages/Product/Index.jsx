import { Link } from "@inertiajs/react";
import React from "react";

const Index = ({ products }) => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-gray-700">Product List</h1>
                <Link
                    href={route("product.create")}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    + Create Product
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-600">#</th>
                            <th className="px-4 py-2 text-left text-gray-600">Name</th>
                            <th className="px-4 py-2 text-left text-gray-600">Price</th>
                            <th className="px-4 py-2 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.data.map((product, index) => (
                            <tr
                                key={product.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2 font-medium text-gray-700">
                                    {product.name}
                                </td>
                                <td className="px-4 py-2 text-green-600">${product.price}</td>
                                <td className="px-4 py-2">
                                    <Link
                                        href={route("product.edit", product.id)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center space-x-2">
                {products.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || "#"}
                        className={`px-3 py-2 border rounded ${
                            link.active
                                ? "bg-blue-600 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Index;
