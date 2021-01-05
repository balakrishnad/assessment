import React from 'react';

const ArrowUpIcon = ({ className }) => (
    <svg className={className}
        xmlns="http://www.w3.org/2000/svg" width="17.78" height="9.844" viewBox="0 0 17.78 9.844">
        <path id="Union_6" data-name="Union 6" d="M8.566.695.695,8.567a.983.983,0,0,0,1.389,1.39l7.21-7.211,7.215,7.216A.983.983,0,1,0,17.9,8.573L10.027.7A1.062,1.062,0,0,0,8.566.695Z" transform="translate(-0.407 -0.406)" fill="#28bef0" />
    </svg>
);
const ArrowDownIcon = ({ className }) => (
    <svg className={className}
        xmlns="http://www.w3.org/2000/svg" width="18.593" height="10.656" viewBox="0 0 18.593 10.656">
        <g id="Group_4936" data-name="Group 4936" transform="translate(-201.761 -439.604) rotate(45)">
            <rect id="Rectangle_25" data-name="Rectangle 25" width="13.097" height="1.965" rx="0.982" transform="translate(454.5 167.202)" fill="#D1D1D1" />
            <rect id="Rectangle_26" data-name="Rectangle 26" width="13.097" height="1.965" rx="0.982" transform="translate(465.679 169.112) rotate(-90)" fill="#D1D1D1" />
        </g>
    </svg>
);

const BellIcon = ({ className }) => (
    <svg style={{ fill: '#6f6f6f' }} className={className}
        xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 24.143 26">
        <path id="Path_10244" data-name="Path 10244"
            d="M13.232,2.321A.229.229,0,0,1,13,2.554,2.557,2.557,0,0,1,10.446,0a.229.229,0,0,1,.232-.232A.229.229,0,0,1,10.911,0,2.1,2.1,0,0,0,13,2.089.229.229,0,0,1,13.232,2.321ZM3.569-1.857c2.6-2.931,3.859-6.906,3.859-12.071,0-1.872,1.77-4.643,5.571-4.643s5.571,2.771,5.571,4.643c0,5.165,1.262,9.141,3.859,12.071Zm21.5,0c-2.147-1.814-4.643-5.064-4.643-12.071a6.863,6.863,0,0,0-6.152-6.4,1.46,1.46,0,0,0,.116-.566A1.393,1.393,0,0,0,13-22.286a1.393,1.393,0,0,0-1.393,1.393,1.46,1.46,0,0,0,.116.566,6.863,6.863,0,0,0-6.152,6.4c0,7.008-2.5,10.258-4.643,12.071A1.87,1.87,0,0,0,2.786,0h6.5A3.721,3.721,0,0,0,13,3.714,3.721,3.721,0,0,0,16.714,0h6.5A1.87,1.87,0,0,0,25.071-1.857Z"
            transform="translate(-0.929 22.286)" />
    </svg>
);

const TaskIcon = ({ className }) => (
    <svg style={{ fill: '#6f6f6f' }} className={className}
        xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 24 24">
        <path d="M9,15h3.81l8.7-8.69a2.7,2.7,0,0,0,0-3.82,2.77,2.77,0,0,0-3.82,0L9,11.19Zm2-3,8.11-8.1a.69.69,0,0,1,1,0h0a.68.68,0,0,1,0,1L12,13H11Z" />
        <path d="M20,19.07a.93.93,0,0,1-.93.93H4.93A.93.93,0,0,1,4,19.07V4.93A.93.93,0,0,1,4.93,4H15V2H4.93A2.93,2.93,0,0,0,2,4.93V19.07A2.93,2.93,0,0,0,4.93,22H19.07A2.93,2.93,0,0,0,22,19.07V10H20Z" />
    </svg>
);

export { ArrowUpIcon, ArrowDownIcon, BellIcon, TaskIcon };