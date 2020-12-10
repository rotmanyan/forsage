import styled from 'styled-components'

export const StyledForm = styled.form`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width: 100%;
    background-color: #282D40;
    border-radius: 4px;
    box-shadow: 0 1px 5px #151515;
    /* @media (max-width: 900px) {
        min-height: 470px;
    } */
`;

export const Title = styled.h2`
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    line-height: 48px;
    color: #FFFFFF;
    margin: 0;
    height: 48px;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(238, 238, 238, 0.2);
`;

export const Content = styled.div`
    display: flex;
    height: 100%;
    flex-direction: ${({ direction = 'column '}) => direction};
    align-items: ${({ alignItems = 'center '}) => alignItems};
    padding: ${({ padding = '60px 60px 30px' }) => padding};
    flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
    @media (max-width: 900px) {
        padding: 30px;
    }
`;

export const Tabs = styled.ul`
    display: flex;
`

export const Tab = styled.li`
    list-style: none
`