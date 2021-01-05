import React from 'react';
import './Button.css'

export default ({
    onClick,
    caption,
    variant,
    className = ''
}) => {
    return (
        <button className={`${className} ${variant} noOutline`} onClick={onClick}>
            <span>{caption}</span>
        </button>
    );
}
