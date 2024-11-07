import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion is rendering')
    if (props.collapsed) {
        return <AccordionTitle title={props.titleValue}/>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>

    }
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody(props: any) {
    console.log('AccordionBody is rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}