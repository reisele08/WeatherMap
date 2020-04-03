import React from 'react';
import {Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';

export default function UserNavigation() {
    return (
        <Navigation>
            <Link to = "/">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/CovidTable">COVID-19 Tracker</Link>
            <Link to="/CovidStats">COVID-19 stats</Link>

        </Navigation>
    )
}