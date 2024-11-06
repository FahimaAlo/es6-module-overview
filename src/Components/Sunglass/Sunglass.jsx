import React, { useEffect } from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply } from '../../Utils/calculate';
// import add from '../../Utils/calculate';

const Sunglass = () => {
    const first = 55;
    const second = 223;
    const sum = add(first, second);
    const mult = multiply(first, second);

        useEffect

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;