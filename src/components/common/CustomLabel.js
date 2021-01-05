import React from 'react';
import './CustomLabel.css';

export default ({ title, value, style, className = '' }) => {
    return (
        <div className={`custom-label-wrapper ${className}`}>
            <div className="custom-label-title">{title}</div>
            <div title={value}
                className={"custom-label-value custom-label-value-ellipsis"}
            >
                {value}
            </div>
        </div>
    );
}
