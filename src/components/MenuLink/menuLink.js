import React from 'react';
import styled from 'styled-components';

const MenuLink = (props) => {
    const headerHeight = 80 + 50; //px
    const clickHandler = e => {
        e.preventDefault();
        const { currentTarget: { href }} = e;
        const [, id] = href.split('#');
        const element = document.getElementById(id);
        if (element) {
            const offset = element.offsetTop - headerHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }
    return <Link onClick={clickHandler} {...props}/>;
}

const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    &:focus { outline: 0; }
    &:hover, &:click, &:visited{
        border:none;
        outline:none;
        text-decoration:none;
        color:inherit;
        -webkit-tap-highlight-color: white;
    }
`;

export default MenuLink;
