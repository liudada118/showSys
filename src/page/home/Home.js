import React from 'react'
import Title from '../../components/title/Title'
import './index.scss'
import Canvas from '../../components/three/Three'
export default function Home() {
  return (
    <div className='home'>
        <Title />
        <Canvas />
    </div>
  )
}
