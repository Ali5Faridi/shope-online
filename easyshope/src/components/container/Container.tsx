import React from 'react'


interface Container{
    children: React.ReactNode;
}

function Container({children}: Container) {
  return (
    <div className='container mx-2'> {children} </div>
  )
}

export default Container
