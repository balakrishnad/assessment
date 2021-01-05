import React, { useState, useRef, useEffect } from 'react';
import './MultiSelectDropdown.css';
import useOnClickOutside from './OutsideHandler';
import Button from './Button';
import { ArrowUpIcon, ArrowDownIcon } from './SVG';

const MultiDropdown = ({ options,
    value = [],
    onChange = () => { },
    handleSearch = () => { },
    style
}) => {
    const [selectedValue, setSelectedValue] = useState(value);
    const [requiredList, setRequiredList] = useState(options);
    const getSVT = (value) => {
        let sVT = [];
        if (value && value.length && options && options.length) {
            sVT = options && options.reduce((accum, op) => {
                if (value.includes(op.ID)) {
                    accum.push(op.Name);
                }
                return accum;
            }, [])
        }

        return sVT;
    };
    const [selectedValueText, setSelectedValueText] = useState(getSVT(value));
    const [showDropdownValue, setShowDropdownValue] = useState(false);
    const multiOpt = useRef();
    const handleClick = () => {
        setShowDropdownValue(!showDropdownValue);
    }
    useOnClickOutside(multiOpt, () => setShowDropdownValue(false));

    useEffect(() => {
        setSelectedValue(value);
        setSelectedValueText(getSVT(value));
    }, [value]);

    const addremoveItem = (e, id) => {
        if (e.target.checked) {
            setSelectedValue(() => {
                const valueArray = [...selectedValue, id];
                setSelectedValueText([...selectedValueText, options.find(o => o.ID === id).Name]);
                onChange(valueArray);
                return valueArray;
            });
        } else {
            setSelectedValue(() => {
                const valueArray = [...(selectedValue.filter(value => value !== id))];
                setSelectedValueText(options.reduce((accum, { ID, Name }) => {
                    if (valueArray.includes(ID)) {
                        accum.push(Name);
                    }
                    return accum;
                }, []))
                onChange(valueArray);
                return valueArray;
            });
        }
    };

    return (
        <div className="MA_Dropdown" ref={multiOpt} style={style}>
            <label className="MA_FieldLabel"></label>
            <div className="MA_DropdownText" onClick={handleClick}>
                <input type="text"
                    name="droptxt"
                    placeholder="Filter"
                    value={selectedValueText}
                    autoComplete="false"
                    readOnly
                /> {showDropdownValue
                    ? <span><ArrowUpIcon /></span>
                    : <span><ArrowDownIcon /></span>}
            </div>
            {showDropdownValue ? <div className="MA_DropdownOption_container">
                <ul className="MA_DropdownOptionsList">

                    {requiredList && requiredList.map(({ ID, Name }) => {
                        const isChecked = selectedValue.includes(ID);

                        return (
                            <li
                                // style={{ margin: '5px' }} 
                                key={ID}
                                className="MA_DropdownOption"
                            >
                                <label className="MA_CheckOptionContainer">
                                    <input type="checkbox"
                                        checked={isChecked} onChange={e => addremoveItem(e, ID)} />
                                    {Name}
                                    <span className="checkmark"></span>
                                </label>
                            </li>

                        );
                    })}
                    <div className="selectbtnGroup">
                        <Button caption="Show Results" variant={'showResults'}
                            onClick={() => handleSearch(selectedValue)}
                        />
                        <Button caption="Clear Filters" variant={'clearFilters'}
                            onClick={() => {
                                setSelectedValue('');
                                setSelectedValueText('');
                                handleSearch(null);
                            }}
                        />
                    </div>
                </ul>
            </div>
                : null}
        </div>
    );
}
export default MultiDropdown;