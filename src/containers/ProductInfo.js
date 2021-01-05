import React from 'react';
import { CustomLabel } from '../components';

export default ({
    stage = 3,
    rdOwner = 'Alexa Richardson',
    mfgPlant = 'Leycroft Road, UK',
    mfgLine = 'CKF Line',
    fsAssessor = 'Helen Booden Fedor Kholodov',
    qcOwner = 'James Dougherty',
    processPlatform = 'Fried PC - Full fat flat'
}) => {

    const fields = [
        { title: 'Stage', value: stage },
        { title: 'R&D Owner', value: rdOwner },
        { title: 'MFG Plant', value: mfgPlant },
        { title: 'MFG line', value: mfgLine },
        { title: 'FS Assessor(s)', value: fsAssessor },
        { title: 'QC owner', value: qcOwner },
        { title: 'Process platform', value: processPlatform },
    ];

    return (
        <div className="row">
            {fields.map((f, i) => (
                <div key={`cl-${i}`} className="col-md-5">
                    <CustomLabel title={f.title} value={f.value} />
                </div>
            ))}
        </div>
    )
}