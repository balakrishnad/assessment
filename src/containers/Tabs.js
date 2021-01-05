import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ProductDetailPage.css'
import { Progress } from '../components';
import { ProductInfo, History } from '.';
import Form from './Form';
import { INGREDIENTS, PACKAGING, FINISHED_PRODUCT } from '../utils/formioUtils';

export default ({ isHistory }) => {
    useEffect(() => {
        if (isHistory) {
           
        }
    }, [isHistory]);

    const dummydata = { accolade: "59378", productName: "Lays UCL 2019", modifiedDate: "3/22/19" }

    return (
        <div className="productDetails">
            <div className="productInfo">
                <div className="col-md-6">
                    <p style={{ "color": "#b7b7b7" }}>Accolade # <b style={{ "color": "#b9b9b9" }}>{dummydata.accolade}</b></p>
                    <p className="productName" style={{ minHeight: '1rem' }}>
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
                <Tabs forceRenderTabPanel defaultIndex={(isHistory ? 2 : 0)} >
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Assessments</Tab>
                        <Tab>History</Tab>
                    </TabList>
                    <TabPanel >
                        <div className="tab-content">
                            <Progress creation={true} fsReview={true} QCPDReview={false} finalFSHA={false} />
                            <div className="productDetailsWrapper">
                                <div className="col-md-6">
                                    <p><b>PROJECT DESCRIPTION:</b></p>
                                    <p className="description">New seasoning development for Lays Potato Chips, 5 new seasonings to be developed for existing PC base. No change in base recipe, base materials, packaging, process.</p>
                                </div>

                                <div className="productInfo col-md-5">
                                    <ProductInfo />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList className="sub-heading-tabs">
                                <Tab>Ingredients <br />Assessment</Tab>
                                <Tab>Allergen <br />Assessment</Tab>
                                <Tab>Packaging Materials<br /> Assessment</Tab>
                                <Tab>Process Flow <br />Assessment</Tab>
                                <Tab>Finished Product <br />Assessment</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="tab-content">
                                    <h3>Ingredients Assessment</h3>
                                    <Form formName={INGREDIENTS} />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-content">
                                    Allergen Assessment will come here
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-content">
                                    <h3>Packaging Materials Assessment</h3>
                                    <Form formName={PACKAGING} />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-content">
                                    Process Flow Assessment will come here
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-content">
                                    <h3>Finished Product Assessment</h3>
                                    <Form formName={FINISHED_PRODUCT} />
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>

                        <div id="History" className="tab-content">
                            <h3>Assessment History</h3>
                            <br />
                            <History />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );

};