import {Select} from './Select';
import React, {ChangeEvent, useState} from 'react';
import {action} from 'storybook/actions';

export default {
    title: 'Select',
    component: Select
}

export const SelectCollapsedMode = () => {
    return <Select collapsed={true} onChange={()=>{}} items={[]}/>
}

export const SelectUncollapsedMode = () => {
    const countries = [
        {title: 'Россия', value: 'RU'},
        {title: 'США', value: 'US'},
        {title: 'Германия', value: 'DE'}
    ];
    return <Select collapsed={false} onChange={()=>{}} items={countries}/>
}

export const DemoSelectMode = () => {

    const [selectedCountry, setSelectedCountry] = useState('')
    const [collapsed, setCollapsed] = useState(true)

    const countries = [
        {title: 'Россия', value: 'RU'},
        {title: 'США', value: 'US'},
        {title: 'Германия', value: 'DE'}
    ];

    const onChangeHandler = (value: any) => {
        setSelectedCountry(value)
        setCollapsed(true)
    }

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return <Select collapsed={collapsed} onClick={onClickHandler} onChange={onChangeHandler} items={countries} value={selectedCountry}/>
}