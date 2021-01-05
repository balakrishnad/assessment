import React, { Fragment } from 'react';
import './Task.css'

import { BellIcon, TaskIcon, ArrowDownIcon } from './SVG';

const tasksData = [
    { accoladeNumber: 56746, productName: 'Lays UCL 2019', fshaStatus: 'Assessment Complete', type: 'notification', date: '07/01/2020 18:20' },
    { accoladeNumber: 56746, productName: 'Lays UCL 2019', fshaStatus: 'Assessment Submission', type: 'task', date: '07/01/2020' },
    { accoladeNumber: 47830, productName: 'Simba Sodium Reduction', fshaStatus: 'Assessment Submission', type: 'task', date: '07/01/2020' },
    { accoladeNumber: 47830, productName: 'Simba Sodium Reduction', fshaStatus: 'Assessment Submitted', type: 'notification', date: '06/29/2020 15:10' },
    { accoladeNumber: 52204, productName: 'Lays Red Caviar', fshaStatus: 'Assessment Submission', type: 'task', date: '07/01/2020' },
    { accoladeNumber: 52920, productName: 'Oven Baked Thins Salted Flavour', fshaStatus: 'Assessment Submitted', type: 'notification', date: '06/28/2020 15:10' },
];

export default () => {
    return (
        <Fragment>
            <div style={{
                fontSize: '14px', color: 'rgb(111, 111, 111)', padding: '1rem 0.3rem 0.5rem',
                borderBottom: '1px solid #a7a7a7', // marginBottom: '0.8rem'
            }}>
                <span>All Tasks and Notifications</span>
                <span style={{ float: 'right' }}><ArrowDownIcon /></span>
            </div>
            {
                tasksData.map(({ accoladeNumber, productName, fshaStatus, type, date }, i) => {
                    let Icon = null;
                    let dateText = '';

                    if (type === 'task') {
                        Icon = <TaskIcon />;
                        dateText = `Due ${date}`;
                    } else {
                        Icon = <BellIcon />;
                        const todayDate = (new Date()).getTime();
                        const nDate = (new Date(date)).getTime();
                        let diff = (todayDate - nDate) / (1000 * 3600);
                        let shdText = 'hour(s)';

                        if (diff > 24) {
                            diff = diff / 24;
                            shdText = 'day(s)';
                        } else if (diff < 1) {
                            diff = Math.floor(diff * 60);
                            shdText = 'minute(s)';

                            debugger;
                        }

                        const h = diff.toFixed(0);
                        dateText = `${h} ${shdText} ago`;
                    }
                    return (
                        <div key={`task-${i}`} className="eachRow row">
                            <div className="col-md-1" style={{ padding: '0' }}>
                                {Icon}
                            </div>
                            <div className="col-md-4">
                                <span style={{ fontSize: '12px', color: '#a7a7a7' }}>
                                    {dateText}
                                </span>
                            </div>
                            <div className="col-md-7" style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
                                <span style={{ textTransform: 'uppercase', fontWeight: 'bolder', color: '#6f6f6f', fontSize: '10px' }}>
                                    Accolade # {accoladeNumber}
                                </span>
                                <span style={{ fontWeight: 'bolder', color: '#6f6f6f', fontSize: '17px' }}>
                                    {productName}
                                </span>
                                <span style={{ fontSize: '12px', color: '#a7a7a7' }}>
                                    {fshaStatus}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    );
}