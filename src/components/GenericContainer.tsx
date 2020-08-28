import React from 'react';
import './GenericContainer.css';

interface ContainerProps {
  name: any;
  information: any;
}

const GenericContainer: React.FC<ContainerProps> = ({ name, information }) => {
  return (
    <div className="container">
      {name}
      {information}
    </div>
  );
};

export default GenericContainer;
