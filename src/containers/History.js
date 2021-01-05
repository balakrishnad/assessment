import React from 'react';

const historyData = [
    { fileVersionType: 'Input Form Submitted (v1)' },
    { fileVersionType: 'FSHA + HTD Draft 1 (Automated content)' },
    { fileVersionType: 'FSHA + HTD Draft 2 (FS Approved)' },
    { fileVersionType: 'or FSHA + HTD Draft 2 (FS edits + Approved)' },
    { fileVersionType: 'or FSHA + HTD Draft 2 (FS comments + Reject)' },
    { fileVersionType: 'FSHA + HTD (Fully Approved)' },
    { fileVersionType: 'or FSHA + HTD Draft 2 (FS edits + Approved)' },
    { fileVersionType: 'or Input Form submitted (v2) if rejected' },
];

export default () => {
    return (
        <table className="table" style={{ width: '90%', marginLeft: '1rem' }}>
            <thead>
                <tr>
                    <th scope="col">File Version Type</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Date Submitted</th>
                    <th scope="col">Date Approved/Rejected</th>
                    <th scope="col">Date Archived</th>
                </tr>
            </thead>
            <tbody>
                {
                    historyData.map((h, i) => (
                        <tr key={`tr-${i}`}>
                            <td>{h.fileVersionType}</td>
                            <td>{'MM/DD/YYYY'}</td>
                            <td>{'MM/DD/YYYY'}</td>
                            <td>{'MM/DD/YYYY'}</td>
                            <td>{'MM/DD/YYYY'}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}