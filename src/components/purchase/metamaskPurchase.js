import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useCurrencies from '../../hooks/useCurrencies';
import { METAMASK_PROGRESS, METAMASK_PROGRESS_TITLES } from '../../constants/progress';
import { EXCHANGE_LINKS } from '../../constants/links';

import Layout from '../layout';
import Progress from '../Progress/progress';
import ContentWrapper from '../ContentWrapper/contentWrapper';
import { AddLiquidityButton } from '../Header/buttons';
import Amount from '../exchange/Amount/metamaskAmount';

import EmailIcon from  '../../images/support-email.svg';

const MetamaskPurchase = ({ setMode }) => {
    const { currencies: { USER_CURRENCIES, CURRENCIES }} = useCurrencies();

    const [amount, setAmount] = useState(0);
    const [ userCurrency, setUserCurrency ] = useState(USER_CURRENCIES.find(x => x.name === 'ETH'));
    const [ targetCurrency, setTargetCurrency ] = useState(CURRENCIES[0]);

    useEffect(() => {
        if (!USER_CURRENCIES.includes(userCurrency)) {
            const newUserCurrency = USER_CURRENCIES.find(({ label }) => label === userCurrency.label);
            setUserCurrency(newUserCurrency || USER_CURRENCIES.find(x => x.name === 'ETH'));
        }
        if (!CURRENCIES.includes(targetCurrency)) {
            const newTargetCurrency = CURRENCIES.find(({ label }) => label === targetCurrency.label);
            setUserCurrency(newTargetCurrency || CURRENCIES[0]);
        }
    }, [USER_CURRENCIES, CURRENCIES]);

    const valueChangeHandler = (value) => setAmount(+value);

    const backClickHandler = () => setMode(undefined);

    return (
        <Layout
            hideFooter
            theme='dark'
            headerProps={{
                logo: 'black',
                links: EXCHANGE_LINKS,
                showBalance: true,
                buttons: <AddLiquidityButton $style='blue' />
            }}>
            <Container>
                <ContentWrapper alignItems='center' column>
                    <Progress dots={[...Object.values(METAMASK_PROGRESS)]} titles={METAMASK_PROGRESS_TITLES} step={METAMASK_PROGRESS.AMOUNT} />
                    <Amount
                        amount={amount}
                        setAmount={valueChangeHandler}
                        userCurrency={userCurrency}
                        setUserCurrency={setUserCurrency}
                        targetCurrency={targetCurrency}
                        setTargetCurrency={setTargetCurrency}
                        backClickHandler={backClickHandler}
                    />
                </ContentWrapper>
            </Container>
            <Email>
                <Icon src={EmailIcon} />
                support@forsage.fi
            </Email>
        </Layout>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 60px;
`;

const Email = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 1px;
    text-decoration: underline;
    color: #1BB978;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0%;
    width: 100%;
`;

const Icon = styled.img`
    margin-right: 10px;
`;

export default MetamaskPurchase;
