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

import useMonitor from 'use-react-monitor';

const ReduxTester = () => {
    const interval = 3000;
    const {results, status, lastTimes} = useMonitor(
        { urls:['http://rem-rest-api.herokuapp.com/api/users',
                'http://rem-rest-api.herokuapp.com/api/users',
                'http://rem-rest-api.herokuapp.com/api/users'],
          freshRate: interval});

    return (
        <div>
            {results.map((result, i) =>{
                return (
                    <>
                        <div>Last updated time: {lastTimes[i]}</div>
                        <div>Status: {status[i]}</div>
                        <ul key={i}>
                            {result.data.map((r, index) => {
                                return (<li key={index}>{r.id} {r.firstName} {r.lastName}</li>)
                            })}
                        </ul>
                    </>)
            })}
         </div>

    )
}

export default ReduxTester
