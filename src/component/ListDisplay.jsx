import React from 'react'
import ListItem from '../component/ListItem'

function ListDisplay(props) {
    const items = props.items.map((item, i) => (
        <ListItem 
        key={i}
        name={item}
        handleClick={props.handleClick}
        />
    ))
    return (
        <ul>
            {items}
        </ul>
    )
}

export default ListDisplay;