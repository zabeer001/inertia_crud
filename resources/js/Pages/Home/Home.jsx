import React from 'react';

const Home = ({ name, email }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{name}</h1>
                <h2 className="text-lg text-gray-600">{email}</h2>
            </div>
        </div>
    );
};

export default Home;
