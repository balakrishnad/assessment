import React, { useEffect } from 'react';
import $ from 'jquery';
import './ProductDetailPage.css'
import { Progress, CustomLabel } from '../components';
import { Assessments, ProductInfo, History } from '.';

export default ({ isHistory }) => {

    // TODO - if isHistory is true, history tab should be active... 

    useEffect(() => {
        $(document).ready(function () {
            $(".nav-tabs a").click(function () {
                $(this).tab('show');
            });
        });
    });

    useEffect(() => {
        if (isHistory) {
            // $('#History').tab('show');
        }
    }, [isHistory]);

    const dummydata = { accolade: "59378", productName: "Lays UCL 2019", modifiedDate: "3/22/19" }

    return (
        <div className="productDetails">
            <div className="productInfo">
                <div className="col-md-6">
                    <p style={{ "color": "#b7b7b7" }}>Accolade # <b style={{ "color": "#b9b9b9" }}>{dummydata.accolade}</b></p>
                    <p className="productName">
                        <b style={{ "color": "#4e4e4e" }}>{dummydata.productName}</b>
                        <a href="#/create" className="edit">Edit</a>
                    </p>
                </div>
                <div className="col-md-6 modifiedDate">
                    <div style={{ "color": "#8c8c8c", "fontSize": "14px", "float": "right" }}>LAST MODIFIED
                        <br />
                        <p style={{ "textAlign": "center", "color": "#848484" }}>
                            <b>{dummydata.modifiedDate}</b>
                        </p>
                    </div>
                </div>
            </div>
            <div className="tabWrapper">
                <ul className="nav nav-tabs">
                    <li role="presentation">
                        <a href="#" className="active" data-target="#Overview" id="tab1" aria-controls="Overview" role="tab" data-toggle="tab">Overview</a>
                    </li>
                    <li role="presentation">
                        <a href="#" data-target="#Assessments" aria-controls="Assessments" role="tab" data-toggle="tab">Assessments</a>
                    </li>
                    <li role="presentation">
                        <a href="#" data-target="#History" aria-controls="History" role="tab" data-toggle="tab">History</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="Overview" className="tab-pane fade in active show">
                        <Progress creation={true} fsReview={true} QCPDReview={false} finalFSHA={false} />
                        <div className="productDetailsWrapper">
                            <div className="col-md-6">
                                <p><b>PROJECT DESCRIPTION:</b></p>
                                <p className="description">New seasoning development for Lays Potato Chips, 5 new seasonings to be developed for existing PC base. No change in base recipe, base materials, packaging, process.</p>
                            </div>
                            {/* <div className="col-md-5 rightSide">
                                <div className="col-md-6">
                                    <CustomLabel title="STAGE" value="3" />
                                    <CustomLabel title="MFG PLANT" value="Leycroft Road, UK" />
                                    <CustomLabel title="FS ASSESSOR (s)" value="Helen Booden, Fedor Kholodov" />
                                    <CustomLabel title="PROCESS PLATFORM" value="Fried PC - Full fat flat" />

                                </div>
                                <div className="col-md-6">
                                    <CustomLabel title="R&D" value="Alex Richardson" />
                                    <CustomLabel title="MFG LINE" value="CKF Line" />
                                    <CustomLabel title="QC OWNER" value="James Dougherty" />

                                </div>
                            </div> */}
                            <div className="productInfo col-md-5">
                                <ProductInfo />
                            </div>
                        </div>
                    </div>
                    <div id="Assessments" className="tab-pane fade">
                        <h3>Assessments</h3>
                        <br />
                        <Assessments />
                    </div>
                    <div id="History" className="tab-pane fade">
                        <h3>Assessment History</h3>
                        <br />
                        <History />
                    </div>
                </div>
            </div>
        </div>
    );
};
