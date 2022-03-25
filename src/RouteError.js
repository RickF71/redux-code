import React from 'react';

function RouteError(props) {
    return (
        <div>
            <h1>Routing Doesn't See This Location</h1>
            <p>Back in the day this would be a 404 not found page</p>
            <p>With react we have many options, let's just say it's 
                "Under Construction"
            </p>
        </div>
    );
}

export default RouteError;