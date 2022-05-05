import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Detail() {
  const { id } = useParams();

  return (
    <>
      <h1>Character {id}</h1>
    </>
  );
}
