import React from 'react';
import {Link} from 'react-router-dom';

const navs = () => {

    const LINKS = [
        {to: '/', text: 'Home'},
        {to: '/starred', text: 'starred'}
    ]

    return (
        <div>
            <ul>
                {
                    LINKS.map(page => <li key={page.to}><Link to={page.to}>{page.text}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default navs;