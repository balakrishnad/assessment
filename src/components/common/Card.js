import React, { useState, useEffect, Fragment } from 'react';

import Button from "./Button";
import "./Card.css";
import { CustomLabel } from '..';
import { withRouter } from 'react-router';

export default withRouter(({ data, history }) => {
    const [cardData, setCardData] = useState(data);

    useEffect(() => {
        setCardData(data);
    }, [data]);

    const handleOnClick = (type) => {
        history.push({
            pathname: '/details',
            state: { isHistory: type === 'history' }
        });
    };

    return (
        <div className="card-wrpper">
            {
                cardData.length > 0
                    ? <Fragment>
                        {cardData.map((data, index) => {
                            return (
                                <div className="col-md-4 individual-card" key={`card-${index}`}>
                                    <div className="card">
                                        <div className="card-header">
                                            <p className="status col-md-6 bold">{data.status}</p>
                                            <p className="dueDate col-md-6"> DUE DATE : {data.dueDate}</p>
                                        </div>
                                        <div className="card-body">
                                            <p className="accoladeNum col-md-12" style={{ "marginBottom": 0 }}> ACCOLADE #{data.accoladeNumber}</p>
                                            <p className="productName col-md-12 bold">{data.productName}</p>
                                            <p className="stage col-md-6">STAGE<br /> <span>{data.stage}</span></p>
                                            <p className="complexity col-md-6">COMPLEXITY <br /><span>{data.complexity}</span></p>
                                            <p className="plant col-md-6">MFG PLANT <br /> <span>{data.plant}</span></p>
                                            <p className="line col-md-6">MFG LINE <br /> <span>{data.line}</span></p>
                                            <hr style={{ "width": "100%", "background": "#e0e0e0" }} />
                                            <div className="btnGroup">
                                                <Button onClick={() => handleOnClick('history')} className="col-md-6" variant="history" caption="History" />
                                                <Button onClick={() => handleOnClick('details')} className="col-md-5" variant="details" caption="Details" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Fragment>
                    : <Fragment>
                        No Records available.
                    </Fragment>
            }
        </div>
    );
});
