import React from 'react';

export const ButtonInline = ({ 
    onClick, 
    type = 'button', 
    children 
}) => {
    return (
        <button
            type={type}
            className='button-inline'
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export const Button = ({
    onClick,
    className,
    type = 'button',
    children
}) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};