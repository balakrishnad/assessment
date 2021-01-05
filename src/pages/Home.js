import React, { useEffect, useState } from 'react';
import MultiDropdown from '../components/common/MultiSelectDropdown'
import { Card, Button } from '../components';
import { withRouter } from 'react-router';
import '../components/common/Task.css';
import Tasks from '../components/common/Tasks';
const cardData = [
    { status: "PENDING", dueDate: "3/23/19", accoladeNumber: 47830, productName: "Simba Sodium Reduction", stage: "Functional Approval", complexity: "Medium", plant: "Magic Seribia", line: "Backed Line 1" },
    { status: "DRAFT", dueDate: "3/23/19", accoladeNumber: 13789, productName: "Lays Red Caviar", stage: "Functional Approval", complexity: "Medium", plant: "Magic Seribia", line: "Backed Line 1" },
    { status: "APPROVED", dueDate: "3/23/19", accoladeNumber: 76278, productName: "Oven Baked Thins", stage: "Functional Approval", complexity: "Medium", plant: "Magic Seribia", line: "Backed Line 1" },
    { status: "REJECTED", dueDate: "3/23/19", accoladeNumber: 98273, productName: "Simba Sodium Reduction", stage: "Functional Approval", complexity: "Medium", plant: "Magic Seribia", line: "Backed Line 1" },
    { status: "DRAFT", dueDate: "3/23/19", accoladeNumber: 76711, productName: "Oven Baked Thins Salted Flavor", stage: "Functional Approval", complexity: "Medium", plant: "Magic Seribia", line: "Backed Line 1" },
    { status: "APPROVED", dueDate: "3/23/19", accoladeNumber: 25181, productName: "Simba Sodium Reduction", stage: "Functional Approval", complexity: "Medium", plant: "Magic Seribia", line: "Backed Line 1" }
];

const selectOptions = [
    { ID: "DRAFT", Name: "Drafts" },
    { ID: "PENDING", Name: "Pending" },
    { ID: "APPROVED", Name: "Approved" },
    { ID: "REJECTED", Name: "Rejected" },
    { ID: "ARCHIVED", Name: "Archived" }
];

export default withRouter(({ history, location }) => {

    const [data, setData] = useState(cardData);
    const [isFiltered, setIsFiltered] = useState(false);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        if (location.state) {
            const type = location.state.type.toUpperCase();

            setData(cardData.filter(d => d.status === type));
            setIsFiltered(true);
            setFilters([type]);
        }
    }, [location.state]);

    // const handleMultiChange = (value) => {
    //     let selectedValue = value;
    //     console.log(selectedValue);
    // };

    const handleSearch = (filters) => {
        if (filters) {
            setData(cardData.filter(d => filters.includes(d.status)));
            setIsFiltered(true);
            setFilters(filters);
        } else {
            resetData();
        }
    };

    const resetData = () => {
        setData(cardData);
        setIsFiltered(false);
        setFilters([]);
    };

    return (
        <div style={{ marginTop: '2rem' }} className="home">
            <div className="col-md-3 taskNotificationWrapper">
                <Tasks />
            </div>

            <div style={{ marginTop: '2rem' }} >
                <div className="row">
                    <div className="col-md-2" style={{ marginLeft: '1rem' }}>
                        <h2><b style={{ fontWeight: '600' }}>Dashboard</b></h2>
                    </div>
                    <div className="col-md-3">
                        <MultiDropdown
                            label={'\u00A0'}
                            value={filters}
                            // onChange={e => handleMultiChange(e)}
                            handleSearch={handleSearch}
                            options={selectOptions}
                            placeholder="Filter"
                            style={{ marginTop: '-1.2rem' }}
                        />
                    </div>
                    <div className="col-md-3">
                        <Button variant="assessment" caption={'New Assessment'}
                            onClick={() => {
                                history.push('/create');
                            }}
                        />
                    </div>
                </div>

                {isFiltered && <div style={{ marginLeft: '1rem' }}>
                    {/* Filtered By:  {selectOptions.map(o => filters.includes(o.ID))} */}
                    <Button onClick={resetData} className="col-md-2" variant="history" caption="Clear Filters" />
                </div>}

                <Card data={data} />
            </div >
        </div>
    )
});