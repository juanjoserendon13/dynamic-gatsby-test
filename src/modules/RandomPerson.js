import React, { useState, useEffect } from 'react';

const RandomPerson = () => {
  const [person, setPerson] = useState();
  useEffect(() => {
   const fetchPerson = async () => {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      setPerson(data);
    };
    fetchPerson();
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  );
};

export default RandomPerson;
