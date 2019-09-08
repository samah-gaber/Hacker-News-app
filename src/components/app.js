import React from 'react';
import './app.css';

import Stories from './stories';
import SearchStories from './searchStories';

const App = () => {
    return (
        <div className='app'>
            <div className='interactions'>
                <SearchStories />
            </div>
            <Stories />
        </div>
    );    
};

export default App;