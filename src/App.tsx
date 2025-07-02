import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {OnOff} from './components/OnOff/OnOff';


//function declaration
function App() {
    //делает что-то

    //возврщает .JSX
    console.log('App is rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className="App">
            <PageTitle title={'Page Title'}/>
            <OnOff onClick={setSwitchOn} value={switchOn}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)} onChange={()=>{}} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
                title: 'Artem',
                value: 3
            }, {title: 'Victor', value: 4}]}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating onChange={setRatingValue}/>
            <UncontrolledAccordion titleValue={'Uncontrolled Accordion'}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('App Title is rendering');
    return <h1>{props.title}</h1>
}

export default App;
