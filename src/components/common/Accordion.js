import React, { useEffect } from 'react';
import './Accordion.css';
import CustomLabel from './CustomLabel';

export default ({type}) => {
    const labelData = [
        { label: "SPECIFICATION NUMBER", value: "M03416" },
        { label: "INGREDIENT", value: "Chorizo & Onion" },
        { label: "MATERIAL CLASS", value: "Seasoning" },
        { label: "MATERIAL SUB-CLASS", value: "Animal Derivatives" }
    ]
    useEffect(() => {
        let acc = document.getElementsByClassName("accordion");
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("selected");
                console.log(this)
                let panel = document.querySelector('.panel');
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    })
    return (    
        <div className={`${type} accordionWrapper`}>
            <button className="accordion"></button>
            <div className="labelsWrapper">
                {labelData.map((data, index) => {
                    return (<CustomLabel name={data.label} value={data.value} className={index}/>)
                })
                }   
            </div>
            <div className="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>

    );
};
