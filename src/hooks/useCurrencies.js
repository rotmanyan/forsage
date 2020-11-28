import { useState, useEffect } from 'react';
import { singletonHook } from 'react-singleton-hook';
import { USER_CURRENCIES, CURRENCIES } from '../constants/currencies';
import mockCurrencies from './mockCurrencies.json';

function floor(value){
    const precision = 100_000_000;
    return Math.floor(value * precision) / precision;
}

const ALL_CURRENCIES = { USER_CURRENCIES, CURRENCIES };
function useCurrencies() {
    const [ loaded, setLoaded ] = useState();
    const [ currencies, setCurrencies ] = useState(ALL_CURRENCIES);

    useEffect(() => {
        fetch('/backend/request/course')
        .then(response => response.json())
        // new Promise(resolve => resolve(mockCurrencies))
        .then(data => {
            if (!Array.isArray(data)) return;

            const newUserCurrencies = [];
            console.log('data: ', data);
            for (const info of data) {
                const {
                    address,
                    currency,
                    img,
                    cyrrency_label
                } = info;

                const item = USER_CURRENCIES.find(x => (x.name === cyrrency_label));
                if (item) {
                    const rate = floor(+info.rate);
                    const updated = {
                        ...item,
                        rate,
                        address,
                        currency,
                        img
                    };
                    newUserCurrencies.push(updated);
                }
            }

            setCurrencies({
                USER_CURRENCIES: newUserCurrencies,
                CURRENCIES
            });
            setLoaded(true);
        })
        .catch((e) => {
            console.error('error: currencies cant be loaded');
            console.error(e);
        });
    }, []);

    return { currencies, loaded };
}

const DEFAULT_STATE = { currencies: ALL_CURRENCIES, loaded: false };
export default singletonHook(DEFAULT_STATE, useCurrencies);
