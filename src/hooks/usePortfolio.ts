'use client'

import { useState } from 'react'

import {
  projects,
  techStacks,
} from '@/data/portfolioData'

import {
  certificates
} from "@/data/certificateData"


export default function usePortfolio() {
  const [loading] = useState(false)

  return {
    projects,
    certificates,
    techStacks,
    loading,
  }
}