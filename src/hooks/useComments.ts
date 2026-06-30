'use client'

import { useState } from 'react'

export default function useComments() {

  const [comments, setComments] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const addComment = async (newComment: any) => {
    setLoading(true)

    const commentData = {
      id: Date.now(),
      name: newComment.name,
      comment: newComment.comment,
      image: newComment.image,
      likes: 0,
      is_pinned: false,
    }

    setComments((prev) => [
      commentData,
      ...prev,
    ])

    setLoading(false)
  }


  const likeComment = (id: number) => {
    setComments((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              likes: (item.likes || 0) + 1,
            }
          : item
      )
    )
  }


  return {
    comments,
    setComments,
    loading,
    addComment,
    likeComment,
  }
}