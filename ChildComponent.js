import React from 'react';

const ChildComponent = (props) => {
  const { person } = props;

  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Address: {person.address}</p>
      <p>City: {person.city}</p>
    </div>
  );
};

export default ChildComponent;
