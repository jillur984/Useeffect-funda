import React, { useEffect, useState } from 'react'
import { fetchComments } from '../utils/fetchComment'

export default function Comments({postId}) {

  const[comments,setComments]=useState([])

  useEffect(()=>{
   let ignore=false
  //  console.log("Fetching") // 2 bar holo
    async function startFetching(){
      console.log("fetching") // 2 bar holo

      // here ignore function er keramoti er jonno ekbar setting call hoise
      const json=await fetchComments(postId)

      if(!ignore){
        // console.log("setting") // only one
        setComments(json)
      }
      
    }
    startFetching()
    return()=>{
      ignore=true
    }
  },[postId])
  return (
    <ul>
        {comments.map((comment)=><li key={comment.id}>{comment.name}</li>)}
    </ul>
  )
}
