import React, {useState} from 'react';

type OnOffType = {
    turn: 'on' | 'off'
}

export const OnOff = (props: OnOffType) => {
    const [status, setStatus] = useState(props.turn);

    const OnClickHandler = (newStatus: 'on' | 'off') => {
        setStatus(newStatus)
    }

    return (
        <div>
            <button onClick={() => {
                OnClickHandler('on')
            }} style={{backgroundColor: status === 'on' ? 'green' : 'inherit'}}>on
                </button>
                <button onClick={() => {
                OnClickHandler('off')
            }} style={{ backgroundColor: status === 'off' ? 'red' : 'inherit' }}>off
            </button>
            <div
                style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: status === 'on' ? 'green' : 'red',
                    display: 'inline-block',
                    marginLeft: '10px',
                }}
            ></div>
        </div>
    )
}