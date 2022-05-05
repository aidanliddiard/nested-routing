import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Detail from './Detail';

export default function List() {
  const { url, path } = useRouteMatch();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    }
    getCharacters();
  }, []);
  return (
    <>
      <h1>Character List</h1>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <Link to={`${url}/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      )}

      <Route path={`${path}/:id`}>
        <Detail />
      </Route>
    </>
  );
}
