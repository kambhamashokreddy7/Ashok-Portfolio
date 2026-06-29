'use client'

import { useState } from 'react'

export default function useComments() {

  const [comments, setComments] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  return {
    comments,
    setComments,
    loading
  }

}