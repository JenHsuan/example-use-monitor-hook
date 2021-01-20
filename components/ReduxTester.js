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

const ReduxTester = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    useEffect(() => {
        dispatch(getData());
    },[]);

    return (
        <TemplateStyle variant='main'>
            <div data-testid="text-content">
                {data}
            </div>
        </TemplateStyle>
    )
}

export default ReduxTester
