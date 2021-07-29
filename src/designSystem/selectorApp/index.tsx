import React, { useState } from 'react'
import DS from '..'

interface ISelectorApp {
    value?: string
    width?: number
    items: string[]
    onChange?: (value: string) => void
}

const SelectorApp: React.FC<ISelectorApp> = props => {
    const styles = {
        width: props.width ? `${props.width}%` : 'auto'
    }

    const [selected, setSelected] = useState(props.value || null)

    const handleSelectorChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelected(event.target.value as string);
    };

    return (
        <DS.Select
            value={selected}
            onChange={handleSelectorChange}
            style={styles}
        >
            {props.items.map(item => <DS.MenuItem value={item}>{item}</DS.MenuItem>)}
        </DS.Select>
    )
}

export default SelectorApp
