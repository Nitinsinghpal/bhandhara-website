import React from 'react'
import './Posts.css'
import PostsCard from './PostsCard'
function Posts({data}) {
  console.log(data)
  function posts() {

    let cards = [];
    data.map((d) =>{
     cards.push(<PostsCard cardInfo={d}/>)
    })
    console.log(cards)
    return cards;
  }
  return (
    <div className='posts-main'>

    <PostsCard cardInfo={data}/>
        {/* <PostsCard/>
        <PostsCard/>
        <PostsCard/>
        <PostsCard/>
        <PostsCard/> */}
    
    </div>
  )
}

export default Posts