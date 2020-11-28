import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { PurchaseContext } from '../../../contexts/purchaseContext';
import { MANUAL_PROGRESS } from '../../../constants/progress';
import { TRANSACTION_STATUS } from '../../../constants/transactionStatus';

import Form from '../../Form/form';
import ExchangeButton from '../../ExchangeButton/exchangeButton';

import QrCodeIcon from '../../../images/qr-code.svg';
import CopyIconSrc from '../../../images/copy.svg';

const Deposit = ({ nextHandler }) => {
    const {
        amount,
        rValue,
        userCurrency,
        address,
        setTransactionStatus,
        email
    } = React.useContext(PurchaseContext);
    const [transactionId, setTransactionId] = useState('');
    const [isValid, setValidity] = useState(true);
    const addressRef = useRef(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        const valid = !!transactionId;
        setValidity(valid);

        if (!valid) return;

        const formData = new FormData();
        formData.append('cryptocurrency', userCurrency.currency);
        formData.append('count', amount);
        formData.append('total', rValue);
        formData.append('recipient_address', address);
        formData.append('rate', userCurrency.rate);
        formData.append('platform_address', userCurrency.address);
        if (email) formData.append('email', email);
        formData.append('transaction_id', transactionId);
        
        const result = await fetch('/backend/request/new', {
            method: 'POST',
            body: formData
        }).then(response => {
            return TRANSACTION_STATUS.OK;
            // return response.ok
            //     ? TRANSACTION_STATUS.OK
            //     : TRANSACTION_STATUS.ERROR;
        })
          .catch((e) => {
            console.log('post error');
            console.error('error: ', e);
            return TRANSACTION_STATUS.ERROR;
        });
        console.log({ result });
        setTransactionStatus(result);
        nextHandler(MANUAL_PROGRESS.INFO);
    }
    const prevHandler = () => nextHandler(MANUAL_PROGRESS.CONFIRMATION);

    const copyClickHandler = () => {
        if (!addressRef.current) return;
        addressRef.current.focus();
        addressRef.current.select();

        try {
            const success = document.execCommand('copy');
            console.log(success);
        } catch {
            console.log('error')
        }
    }

    const transactionChangeHandler = ({ target: { value }}) => {
        setTransactionId(value);
        setValidity(true);
    }

    const sendValue = `${amount} ${userCurrency.label}`;

    return (
        <Form
            submitHandler={submitHandler}
            contentProps={{
                direction: 'row',
                padding: '20px 60px 30px',
                flexWrap: 'wrap'
                // alignItems: 'stretch'
            }}
            title={<FormattedMessage id='buy.deposit.title' />}>
            <Container order={2} direction='column'>
                <Extra>
                    <span>
                        <FormattedMessage id='buy.deposit.text1' />
                    </span>
                </Extra>
                <Container fullWidth direction='column' align='flex-start'>
                    <Label>
                        <FormattedMessage id='buy.deposit.label1' />
                    </Label>
                    <StyledInput value={sendValue} readOnly disabled />
                </Container>
                <Container fullWidth direction='column' align='flex-start'>
                    <Label>
                        <FormattedMessage id='buy.deposit.label2' />
                    </Label>
                    <Container fullWidth>
                        <StyledInput ref={addressRef} value={userCurrency.address} readOnly padded/>
                        <CopyIcon onClick={copyClickHandler} src={CopyIconSrc} />
                    </Container>
                </Container>
                <Container fullWidth direction='column' align='flex-start' topMargin>
                    <Label>
                        <FormattedMessage id='buy.deposit.label3' />
                    </Label>
                    <StyledInput valid={isValid} value={transactionId} onChange={transactionChangeHandler} />
                </Container>
            </Container>
            <Container order={1} direction='column' align='flex-end'>
                {/* <QrCode src={QrCodeIcon} /> */}
                <QrCode src={`/images/wallets/${userCurrency.img}`} />
                <Muted restricted><FormattedMessage id='buy.deposit.label4' /></Muted>
            </Container>
            <Container justify='space-between' order={3} $withButtons fullWidth>
                <StyledButton onClick={prevHandler} outlined>
                    <FormattedMessage id='back' />
                </StyledButton>
                <StyledButton type='submit' ml>
                    <FormattedMessage id='submit' />
                </StyledButton>
            </Container>
        </Form>
    );
}

const CopyIcon = styled.img`
    position: absolute;
    width: 17px;
    height: 14px;
    bottom: 50%;
    transform: translateY(-50%);
    right: 10px;
`;

const Container = styled.div`
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
    display: flex;
    position: relative; 
    flex-direction: ${({ direction = 'row' }) => direction};
    justify-content: ${({ justify = 'normal'}) => justify};
    align-items: ${({ align = 'normal' }) => align};
    ${
        ({ topMargin }) => (
            topMargin
            ? 'margin-top: 20px'
            : ''
        )
    }
    @media (max-width: 840px) {
        width: 100%;
        order: ${({ order = 0 }) => order};
    }
    ${ ({ $withButtons }) => $withButtons && `
        flex-direction: column;
        button {
            max-width: none;
            margin-top: 20px;
        }
        @media screen and (min-width: 600px) {
            flex-direction: row;
            button {
            margin-top: 0;
            :first-of-type {
                margin-right: 10px;
            }
            :last-of-type {
                margin-left: 10px;
            }
            }
        }
    `}
`;

const Muted = styled.p`
    width: ${({ restricted }) => (restricted ? '220px' : '100%')};
    text-align: center;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    color: #A2A7AE;
    position: relative;
    margin-bottom: 25px;
    z-index: 10;
    @media (max-width: 840px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Extra = styled(Muted)`
    &:before {
        position: absolute;
        content: '';
        width: 20px;
        height: 1px;
        background-color: #A2A7AE;
        left: 0;
        top: 50%;
        z-index: -1;
    }
    &:after {
        position: absolute;
        content: '';
        width: 20px;
        height: 1px;
        background-color: #A2A7AE;
        right: 0;
        top: 50%;
        z-index: -1;
    }
    & > span {
        background: #282D40;
        padding: 0 10px;
    }
`;

const Label = styled.p`
    font-size: 10px;
    line-height: 10px;
    color: #A2A7AE;
    margin: 0 0 8px;
`;

const StyledInput = styled.input`
    width: 100%;
    background-color: #383D4F;
    border-radius: 2px;
    font-size: 12px;
    line-height: 12px;
    height: 36px;
    padding: 0 16px;    
    box-sizing: border-box;
    color: #FFFFFF;
    margin-bottom: 30px;
    outline: none;
    ${({ padded }) => (padded ? 'padding-right: 35px;' : '0' )};
    transition: 0.2s;
    border: 1px solid ${({ valid = true }) => (
        valid
        ? 'transparent;'
        : '#ff0000a1;'
    )};
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px #505463;
        border-color: #505463;
    }
`;

const StyledButton = styled(ExchangeButton)`
    margin-top: auto;
    margin-left: ${({ ml }) => (ml ? 'auto' : '0')};
    /* @media (max-width: 840px) {
        &:first-of-type {
            margin-right: 10px
        }
        &:last-of-type {
            margin-left: 10px
        }
    } */
`;

const QrCode = styled.img`
    width: 220px;
    height: 220px;
    @media (max-width: 840px) {
        margin: 0 auto;
    }
`;

export default Deposit;
