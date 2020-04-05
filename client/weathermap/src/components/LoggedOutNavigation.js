import React from 'react';
import {Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';



export default function UserNavigation() {
    return (

        <div>
            <Navigation>
            <Link to="/">Map</Link>
            <Link to="/login">Login</Link>
            <Link to="/CovidTable">COVID-19 Tracker</Link>
            <Link to="/CovidStatsWorld">COVID-19 Stats</Link>
            </Navigation>

        </div>

    )
}