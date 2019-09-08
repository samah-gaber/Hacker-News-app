import React from 'react';

const StoriesHeader = ({ columns }) => {
    return (
        <div className='stories-header'>
            {Object.keys(columns).map( key => {
                return (
                <span
                    key={key}
                    syle={{ width: columns[key].width }}
                >
                    { columns[key].label }
                </span>
                    );
                } )
            }
        </div>
    );
};

export default StoriesHeader;