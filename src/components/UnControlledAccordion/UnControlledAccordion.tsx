import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
}

export const UnControlledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion is rendering')

    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={(event) => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </>
    )
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle is rendering')
    return (
        <h3>{props.title}</h3>
    )
}

const AccordionBody = () => {
    console.log('AccordionBody is rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

