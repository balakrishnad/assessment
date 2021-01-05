import React from 'react';
import './Progress.css';

export default ({ creation, fsReview, QCPDReview, finalFSHA }) => {
    return (
        <div>
            <div className="labelWrapper">
                <div className="col-md-3 offset-md-1">
                    <div className="label">Creation</div>
                </div>
                <div className="col-md-3">
                    <div className="label">FS Review</div>
                </div>
                <div className="col-md-3">
                    <div className="label QCReview">QC/PD Review</div>
                </div>
                <div className="col-md-2">
                    <div className="label finalFSHAHTD">Final FSHA, HTD</div>
                </div>
            </div>

            <div className="progressBar">
                <div className="col-md-3 offset-md-1">
                    <div className={`circle ${creation ? "creation" : ""}`} ><span></span></div>
                    <p></p>
                    <div className="date">DUE: 3/22/19</div>
                </div>
                <div className="col-md-3">
                    <div className={`circle ${fsReview ? "fsReview" : ""}`}><span></span></div>
                    <p></p>
                    <div className="date">DUE: 3/23/19</div>
                </div>
                <div className="col-md-3">
                    <div className={`circle ${QCPDReview ? "QCPDReview" : ""}`}><span></span></div>
                    <p></p>
                    <div className="date">DUE: 3/24/19</div>
                </div>
                <div className="col-md-2">
                    <div className={`circle ${finalFSHA ? "finalFSHA" : ""}`}><span></span></div>
                    <div className="date" style={{ "clear": "both" }}>DUE: 3/25/19</div>
                </div>
            </div>
        </div>
    );
};
