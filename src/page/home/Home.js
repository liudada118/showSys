import React from 'react'
import Title from '../../components/title/Title'
import './index.scss'
import Canvas from '../../components/three/Three'
import Aside from '../../components/aside/Aside'
export default function Home() {
  return (
    <div className='home'>
        <Title />
        <Aside />
        <Canvas />
    </div>
  )
}
