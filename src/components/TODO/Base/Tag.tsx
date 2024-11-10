import React from 'react'
import { Badge } from "@/components/ui/badge"

type TagType = {
  tagName: string
}

export const Tag = ({tagName}: TagType) => {
  return (
    <Badge className='bg-teal-50 text-teal-700'>#{tagName}</Badge>  
  )
}
