import React, { useState } from 'react';
import "./Navigation.css"
import { withRouter } from 'react-router';

export default withRouter(({ history, location, onClickToggle }) => {

    const onClick = (type) => {
        if (type === 'create') {
            history.push('/create');
        } else {
            if (history.location.pathname === '/') {
                history.replace({
                    pathname: '/',
                    state: { type }
                });
            } else {
                history.push({
                    pathname: '/',
                    state: { type }
                });
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fsha-nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbars">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">FSHA's</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <a className="dropdown-item" onClick={() => onClick('create')}>Create New</a>
                            <a className="dropdown-item" onClick={() => onClick('draft')}>Drafts</a>
                            <a className="dropdown-item" onClick={() => onClick('pending')}>Pending</a>
                            <a className="dropdown-item" onClick={() => onClick('approved')}>Approved</a>
                            <a className="dropdown-item" onClick={() => onClick('archive')}>Archive</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={onClickToggle}>Task / Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className="input-group search">
                                <input type="text" className="form-control" placeholder="Search FSHAs" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <span className="input-group-append">
                                    <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="#686868" xmlns="http://www.w3.org/2000/svg">
                                        {/* <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" /> */}

                                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
    );
});
