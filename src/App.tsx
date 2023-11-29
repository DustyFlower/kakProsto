import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';

function App(props: any) {
    console.log("App is rendering")
    return (
        <div className={'App'}>
            <OnOff />

            <UnControlledAccordion titleValue={'Menu collapsed'}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>

            <UnControlledRating/>
{/*            <Rating value={3}/>*/}

{/*            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            
        </div>
    );
}

type PageTitlePropsType = {
 title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    console.log("PageTitle is rendering")
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
