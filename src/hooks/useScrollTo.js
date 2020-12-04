import { useState, useEffect } from 'react';

function useScrollTo() {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [timeout, setTimeout] = useState(null);

    const initialize = () => {
        const header = document.getElementById('header');

        if (header) {
            setHeaderHeight(header.offsetHeight);
        } else {
            const timeout = setTimeout(initialize, 500);
            setTimeout(timeout);
        }
    }

    useEffect(() => {
        initialize();
        return () => window.clearTimeout(timeout);
    }, []);

    const scrollTo = (element) => {
        const offset = element.offsetTop - headerHeight;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }

    return scrollTo;
}

export default useScrollTo;
