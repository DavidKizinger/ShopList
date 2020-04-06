import React from 'react'

function ListItem(props) {
    return (
    <li onClick={() => props.handleClick(props.name)}>
        {props.name}
    </li>
    )
}

export default ListItem;