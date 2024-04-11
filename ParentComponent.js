import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const person = {
    name: "Alice",
    age: 25,
    address: "123 Main St",
    city: "Anytown"
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent person={person} />
    </div>
  );
};

export default ParentComponent;
