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
      <h1>Character {id}</h1>
      <h3>{character.name}</h3>
    </>
  );
}
