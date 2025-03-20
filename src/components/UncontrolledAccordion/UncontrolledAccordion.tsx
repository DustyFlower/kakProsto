import {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion is rendering')

    const [collapsed, setCollapsed] = useState(true);

    const CollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle onClick={CollapsedHandler} title={props.titleValue}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering')
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody is rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}