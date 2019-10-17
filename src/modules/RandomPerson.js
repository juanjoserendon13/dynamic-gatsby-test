import React, { useState, useEffect } from 'react';

const RandomPerson = ({ results = 1 }) => {
  console.log(results);
  const [person, setPerson] = useState();
  useEffect(() => {
    const fetchPerson = async () => {
      const response = await fetch(
        `https://randomuser.me/api?results=${results}`
      );
      const data = await response.json();
      setPerson(data);
    };
    fetchPerson();
  }, [results]);
  return (
    <div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  );
};

export default RandomPerson;
