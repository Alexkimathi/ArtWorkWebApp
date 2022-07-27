import React from 'react'
import ArtsItem from './ArtsItem'
import "../../../src/App.css";


function ArtsList(props) {
  return (
    <ul className='many'>
    {props.arts.map(art => <ArtsItem 
        key={art.id}
        id = {art.id}
        image ={art.image}
        title ={art.title}
        desc ={art.desc}
        contact={art.contact}
        author = {art.author}

        // art={art}
        />)}

    </ul>
   
  )
}

export default ArtsList