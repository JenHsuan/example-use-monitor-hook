import React, { useEffect } from 'react';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    getUsers,
    getData
} from "./actions/action";

import {
    selectUsers,
    selectData
} from "./states/states";

import {
    TemplateStyle,
} from './styles/Style';

import useMonitor from '../../../build/useMonitor';

const ReduxTester = () => {
    const {results, status} = useMonitor(['https://arena.garmin.com.tw/ciqarena/api/japan-wearable-expo-2020-service/data',
                           'https://arena.garmin.com.tw/ciqarena/api/japan-wearable-expo-2020-service/data'], 3000);

    return (
        <TemplateStyle variant='main'>
            {results.map((result, index) =>{
                return <div key = {index}>{result.ca}</div>
            })}
            {status.map((s, index) =>{
                return <div key = {index}>{s}</div>
            })}
        </TemplateStyle>
    )
}

export default ReduxTester
