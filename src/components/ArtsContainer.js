import React from 'react'
import AllArts from '../pages/AllArts'
import '../App.css';


function ArtsContainer({arts}) {
    // console.log(AllArts)

    const ArtList= arts.map((Arts,index)=>{
        return(
          <AllArts
          key ={index}
          id ={Arts.id}
          image={Arts.image}
          title ={Arts.title}
          content ={Arts.content}
          author ={Arts.author}
          />
    )
})

  return (
    
    <div className='many'>
    
    {ArtList}

    </div>
 
  )
}

export default ArtsContainer