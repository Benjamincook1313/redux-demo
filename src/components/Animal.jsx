import React from 'react'
import { useSelector } from 'react-redux'

export default function Animal() {

  const animals = useSelector((state) => state.animals);

  const eachAnimal = animals.map(animal => <li key={animal}>{animal}</li>);

  return (
    <>
      <ul>{eachAnimal}</ul>
    </>
  )
}
