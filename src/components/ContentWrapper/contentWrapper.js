import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentWrapper = props => <Container {...props} />;

const PADDINGS = {
    default: 15.2,
    // default: '16.25%',
    none: 0,
    narrow: 5.125,
    // narrow: '9.125%',
};

const Container = styled.div`
    z-index: 50;
    width: 100%;
    max-width: 1440px;
    padding: 0 ${({ padding = 'default' }) => `${PADDINGS[padding]}%`};
    margin: 0 auto;
    display: flex;
    flex-direction: ${({ column }) => ( column ? 'column' : 'row' )};
    align-items: ${({ alignItems = 'normal' }) => alignItems };
    justify-content: ${({ justifyContent = 'normal' }) => justifyContent };
    @media (max-width: 860px) {
        box-sizing: border-box;
    }
    @media (max-width: 600px) {
        padding: 0 ${({ padding = 'default' }) => `${PADDINGS[padding] / 2}%`};
    }
`;

ContentWrapper.propTypes = {
    children: PropTypes.any,
    column: PropTypes.bool,
    alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start']),
    justifyContent: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
    padding: PropTypes.oneOf(['default', 'none', 'narrow'])
};

export default ContentWrapper;
