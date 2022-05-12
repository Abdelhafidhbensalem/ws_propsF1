import React from 'react'
import { ReceipeCard } from '../ReceipeCard/ReceipeCard'

const ListReceipes = ({recipes,getName}) => {
   // console.log(recipes)
    return (
        <div className="List">
            <div><h1>ListReceipes</h1></div>
            {recipes.map(el=><ReceipeCard getName={getName} el={el} key={el.id}/>)}
        </div>
    )
}

export default ListReceipes