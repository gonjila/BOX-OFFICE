import React, {memo} from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, NavList } from './Navs.styled';


const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/starred', text: 'starred'}
]


const navs = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();

    return (
        <div>
            <NavList>
                {
                    LINKS.map(page => <li key={page.to}><LinkStyled className={page.to === location.pathname ? 'active' : ""} to={page.to}>{page.text}</LinkStyled></li>)
                }
            </NavList>
        </div>
    )
}

export default memo(navs);