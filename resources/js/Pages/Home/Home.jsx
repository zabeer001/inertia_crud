import React from 'react';

const Home = ({name},{email}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </div>
    );
};

export default Home;