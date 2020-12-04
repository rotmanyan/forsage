import React from 'react';
import styled from 'styled-components';

import { PurchaseContext } from '../../../contexts/purchaseContext';
import { TRANSACTION_STATUS } from '../../../constants/transactionStatus';
import { MANUAL_PROGRESS } from '../../../constants/progress';

import Form from '../../Form/form';
import ExchangeButton from '../../ExchangeButton/exchangeButton';
import SuccessIcon from '../../../images/success2.svg';
import ErrorIcon from '../../../images/close.svg';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Info = ({ nextHandler }) => {
    const { transactionStatus } = React.useContext(PurchaseContext);

    const submitHandler = () => nextHandler(MANUAL_PROGRESS.AMOUNT, true);

    const isOk = transactionStatus === TRANSACTION_STATUS.OK;

    return (
        <StyledForm
            submitHandler={submitHandler}
            contentProps={{ padding: '20px 60px 30px' }}>
            <Pin isOk={isOk} />
            <Text>
                <FormattedMessage
                    id={
                        isOk
                        ? 'buy.info.text.ok'
                        : 'buy.info.text.error'
                    }
                />
            </Text>
            <StyledButton error={!isOk} type='submit'>
                <FormattedMessage
                    id={
                        isOk
                        ? 'buy.info.button.ok'
                        : 'buy.info.button.error'
                    }
                />
            </StyledButton>
        </StyledForm>
    );
};

const Pin = ({ isOk }) => (
    <PinRoot isOk={isOk}>
        <PinIcon src={isOk ? SuccessIcon : ErrorIcon} />
    </PinRoot>
);

const StyledButton = styled(ExchangeButton)`
    @media (max-width: 900px) {
        margin-top: 137px;
    }
`;

const StyledForm = styled(Form)`
    max-width: 500px;
`;

const Text = styled.p`
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    max-width: 220px;
    margin: 20px 0 40px;
`;

const PinRoot = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ isOk }) => (
        isOk ? '#B9F4BC;' : '#F4B9B9;' 
    )};
`;

const PinIcon = styled.img``;

export default Info;
