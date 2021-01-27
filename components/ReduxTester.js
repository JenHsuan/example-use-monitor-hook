import React, {useCallback} from 'react';
import useMonitor from 'use-react-monitor';


const Results = ({ results , status}) => {
    const refCount = React.useRef(0);

    refCount.current++;
    return (
        <div>
        <p>
       {refCount.current}
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

const MemorizedResults = React.memo(Results);

const ReduxTester = () => {
    const interval = 3000;
    const {results, status, lastTimes} = useMonitor(
        { urls:['http://rem-rest-api.herokuapp.com/api/users',
                'http://rem-rest-api.herokuapp.com/api/users'],
          freshRate: interval});

    const mR = useCallback(()=> (results), [results])
    const mS = useCallback(()=> (status), [status])

    return (
        <>
            <MemorizedResults results = {mR()}
                              status = {mS()}/>
            <Results results = {results}
                                status = {status}/>
        </>
    )
}

export default ReduxTester



