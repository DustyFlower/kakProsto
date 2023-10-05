import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {debug} from "util";
import {OnOff} from './components/OnOff/OnOff';

function App(props: any) {
    console.log("App is rendering")
    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff turn={'on'}/>
            <OnOff turn={'off'}/>
            <OnOff turn={'inactive'}/>
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
