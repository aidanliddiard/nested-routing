import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Detail({ characters = [] }) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const selectedCharacter = characters.find((character) => {
      return character.id === Number(id);
    });
    setCharacter(selectedCharacter);
  }, [id]);
  return (
    <>
      <h1>{character.name}</h1>
      <h3>{character.status}</h3>
      <h5>{character.species}</h5>
      <img src={character.image} />
    </>
  );
}
