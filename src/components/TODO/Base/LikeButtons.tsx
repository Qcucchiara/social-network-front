import React from 'react'
import { ThumbsDown, ThumbsUp } from 'lucide-react';

type LikeButtonsType = {
  likes: number
  dislikes: number
}

export const LikeButtons = ({likes, dislikes}: LikeButtonsType) => {
  return (
     <div className='flex gap-8'>
      <span className=' flex gap-2'>
        <ThumbsUp /> <span>{likes}</span>
      </span>
      <span className=' flex gap-2'>
        <ThumbsDown/> <span>{dislikes}</span>
      </span>
    </div>
  )
}
