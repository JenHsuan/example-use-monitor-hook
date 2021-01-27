import React, {memo} from 'react';
import useMonitor, {monitoredPropsAreEqual} from 'use-react-monitor';

const ReduxTester = () => {
    const interval = 3000;
    const {results, status, lastTimes} = useMonitor(
        { urls:['http://rem-rest-api.herokuapp.com/api/users',
                'http://rem-rest-api.herokuapp.com/api/users'],
          freshRate: interval});

    return (
        <>
            {<MemorizedResults results = {results} status = {status}/>}
        </>
    )
}

const Results = ({ results, status}) => {
    const refCount = React.useRef(0);
    refCount.current++;
    return (
        <div>
        <p>
       {`render time: ${refCount.current}`}
        </p>
        {results && results.map((result, i) =>{
            return (
                <>
                    <div key={`status-${i}`}>Status: {status && status[i]}</div>
                    <ul key={i}>
                        {result.data.map((r, index) => {
                            return (<li key={index}>{r.id} {r.firstName} {r.lastName}</li>)
                        })}
                    </ul>
                </>)
        })}
     </div>
    );
};

const MemorizedResults = memo(Results, monitoredPropsAreEqual);

export default ReduxTester



