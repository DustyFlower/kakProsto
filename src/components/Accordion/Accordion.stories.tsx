import Accordion from './Accordion';
import React, {useState} from 'react';
import {action} from 'storybook/actions';

export default {
    component: Accordion
}

const onChangeHandler = action('accordion mode change event fired')
const onClickHandler = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true}
                      onChange={onChangeHandler} items={[]} onClick={onClickHandler}/>
}

export const UsersUncollapsedMode = () => {
    return <Accordion titleValue={'Opened Accordion'} collapsed={false}
                      onChange={onChangeHandler} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
        title: 'Artem',
        value: 3
    }, {title: 'Victor', value: 4}]} onClick={onClickHandler}/>
}

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion titleValue={'Accordion Demo'} collapsed={collapsed}
                      onChange={() => setCollapsed(!collapsed)}
                      items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
                          title: 'Artem',
                          value: 3
                      }, {title: 'Victor', value: 4}]} onClick={(value) => {
        alert(`user with ID ${value} should be happy`)
    }}/>
}