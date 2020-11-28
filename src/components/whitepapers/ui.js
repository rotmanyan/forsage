import styled from 'styled-components';

export const Header = styled.h2`
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #2F2F2E;
    margin: 64px 0 10px;
    width: 100%;
    text-align: center;
    &:first-of-type {
        margin-top: 0;
    }
`;

export const Text = styled.p`
    h2 {
        text-align: left;   
    }
`;

export const Paragraph = styled.span`
    display: inline-block;
    text-indent: 2rem;
    &:not(:first-child) {
        margin-top: 20px;
    }
`;

export const Menu = styled.ul`
    font-size: 16px;
    line-height: 36px;
    color: #4357FF;
`;

export const MenuItem = styled.li``;

export const Icon = styled.img`
    margin-right: 20px;
`;

export const FormulaIcon = styled.img`
    display: block;
    margin: 20px auto 0;
`;

export const Link = styled.a`
    color: #4357FF;
    text-decoration: none;
`;

export const Red = styled.span`
    color: #eb6060;
`;

export const LogoBack = styled.img`
    margin: 0 auto;
    max-width: 100%;
    min-height: 350px;
`;

export const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
`;

export const WhitepaperLogo = styled.img`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    max-width: 100%;
`;