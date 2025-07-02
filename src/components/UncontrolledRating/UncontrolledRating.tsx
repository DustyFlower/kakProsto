import React, {useState} from 'react';
import {RatingValueType} from '../Rating/Rating';

type RatingPropsType = {
    defaultValue?: RatingValueType;
    onChange: (value: RatingValueType)=> void
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating is rendering')

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    const ButtonOnClickHandler = (NumberValue: RatingValueType) => {
        setValue(NumberValue)
        props.onChange(NumberValue)
    }

    return (
        <div>
            <h4>
                Uncontrolled Rating down
            </h4>

            <Star onClick={() => ButtonOnClickHandler(1)} selected={value > 0}/>
            <Star onClick={() => ButtonOnClickHandler(2)} selected={value > 1}/>
            <Star onClick={() => ButtonOnClickHandler(3)} selected={value > 2}/>
            <Star onClick={() => ButtonOnClickHandler(4)} selected={value > 3}/>
            <Star onClick={() => ButtonOnClickHandler(5)} selected={value > 4}/>
        </div>
    )
}

type StarPropsValue = {
    selected: boolean;
    onClick: () => void;
}

function Star(props: StarPropsValue) {
    console.log('Star is rendering')

    return <span onClick={() => props.onClick()}>{props.selected ? <b>star </b> : 'star '}</span>

}