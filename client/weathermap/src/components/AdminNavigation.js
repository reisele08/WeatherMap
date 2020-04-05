import React from 'react';
import {Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';

export default function AdminNavigation() {
    return (
        <Navigation>
            <Link to = "/">Home</Link>
            <Link to="/UserList">Admin Page</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/CovidTable">COVID-19 Tracker</Link>
            <Link to="/CovidStatsWorld">COVID-19 Stats</Link>


        </Navigation>
    )
}