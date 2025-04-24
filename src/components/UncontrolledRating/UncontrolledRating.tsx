import React, {useState} from 'react';

type RatingPropsType = {
//    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating is rendering')

    let [value, setValue] = useState(0)

    const ButtonOnClickHandler = (NumberValue: number) => {
        setValue(NumberValue)
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