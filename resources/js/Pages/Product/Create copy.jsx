import { useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('product.store'));
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Name</label>
                    <input 
                        type="text" 
                        value={data.name} 
                        onChange={(e) => setData('name', e.target.value)} 
                        className="w-full border-gray-300 rounded-md p-2"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea 
                        value={data.description} 
                        onChange={(e) => setData('description', e.target.value)} 
                        className="w-full border-gray-300 rounded-md p-2"
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                </div>

               <div className="mb-4">
                    <label className="block text-sm font-medium">Price</label>
                    <input 
                        type="number" 
                        step="0.01" 
                        value={data.price} 
                        onChange={(e) => setData('price', parseFloat(e.target.value))}
                        className="w-full border-gray-300 rounded-md p-2"
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                </div> 

                <button 
                    type="submit" 
                    disabled={processing} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50">
                    {processing ? 'Saving...' : 'Create Product'}
                </button>
            </form>
        </div>
    );
}