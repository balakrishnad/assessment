import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import Tabs from '../containers/Tabs';
import { Accordion } from '../components';

export default withRouter(({ history, location, data }) => {
    const [isHistory, setIsHistory] = useState(location.state ? location.state.isHistory : false)

    useEffect(() => {
        setIsHistory(location.state ? location.state.isHistory : false);
    }, [location.state]);

    return (
        <div>
            <Tabs isHistory={isHistory} />
            {/* <Accordion /> */}
        </div>
    )
});