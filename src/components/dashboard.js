import React from 'react';


const Dashboard = props => {
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <h1>Status: {props.loggedInstatus}</h1>
            </div>
        </div>
    );

    
};

export default Dashboard;