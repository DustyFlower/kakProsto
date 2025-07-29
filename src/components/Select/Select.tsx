import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClicked = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
        if (e.key === 'Enter') {
            setActive(!active)
        }
    }
    return (
        <>
            <div className={`${styles.select}`} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={`${styles.item} ${hoveredItem === i ? styles.selected : ''}`}
                            key={i.value}
                            onClick={() => {
                                onItemClicked(i.value)
                            }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>

        </>
    )
}


//----------------------------------------------------------------------------------------------------------------------------------------------

/*
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    onClick?: () => void
    items: ItemType[]
 /!*   collapsed: boolean*!/
}

export function Select(props: SelectPropsType) {

    return <div className={styles.container}>
        <div className={`${styles.mainFrame} ${!props.collapsed ? styles.mainFrameOpen : ''}`}
             onClick={props.onClick}>
            {props.items.find(el => el.value === props.value)?.title || 'Выберите...'}
        </div>
        {!props.collapsed && props.items.map(i =>
            <div className={styles.innerFrame}
                 key={i.value}
                 onClick={() => props.onChange(i.value)}>
                {i.title}
            </div>)}
    </div>
}*/
