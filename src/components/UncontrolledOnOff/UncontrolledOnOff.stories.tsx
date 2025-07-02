import {action} from 'storybook/actions';
import React from 'react';
import UncontrolledOnOff from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff defaultValue={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultValue={false} onChange={callback}/>
export const BugMode = () =><div>Unsync when change defaultValue when already rendered</div>
