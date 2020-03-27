import React from 'react';
import {Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';

export default function AdminNavigation() {
    return (
        <Navigation>
            <Link to = "/">Home</Link>
            <Link to="/UserList">Admin Page</Link>
            <Link to="/Profile">Profile</Link>

        </Navigation>
    )
}