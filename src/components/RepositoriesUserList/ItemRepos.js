import React from 'react'
import propTypes from 'prop-types'
import "./ReposUser.css"

function ItemRepos({item}) {
    return (
        <li>
            <span>
                {item}
            </span>
        </li>
    )
}

ItemRepos.propTypes = {
    item: propTypes.string
}
export default ItemRepos;