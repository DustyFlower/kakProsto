import React from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    onClick?: () => void
    items: ItemType[]
    collapsed: boolean
}

export function Select(props: SelectPropsType) {

    return <div className={styles.container}>
        <div className={`${styles.mainFrame} ${!props.collapsed ? styles.mainFrameOpen : ''}`} onClick={props.onClick}>{props.items.find(el => el.value  === props.value)?.title || 'Выберите...'}</div>
        {!props.collapsed && props.items.map(i => <div className={styles.innerFrame} key={i.value} onClick={()=>props.onChange(i.value)}>{i.title}</div>)}
    </div>
}