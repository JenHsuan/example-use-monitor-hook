import React from 'react';
import useMonitor from 'use-react-monitor';

const Results = ({ results , status, lastTimes}) => {
    return (
        <div>
        {results && results.map((result, i) =>{
            return (
                <>
                <div key={`lastTime-${i}`}> Last updated time: {lastTimes[i]}</div>
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

const MemorizedResults = React.memo(Results);

const ReduxTester = () => {
    const interval = 3000;
    const {results, status, lastTimes} = useMonitor(
        { urls:['http://rem-rest-api.herokuapp.com/api/users',
                'http://rem-rest-api.herokuapp.com/api/users'],
          freshRate: interval});

    return (
        <>
            <MemorizedResults results = {results}
                              status = {status}
                              lastTimes = {lastTimes}/>
        </>
    )
}

export default ReduxTester



