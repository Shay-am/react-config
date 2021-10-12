import React from 'react';
import styled from 'styled-components';
import './App.css';

const MyButton = styled.button`
  padding: 10px;
`;

function App() {
  return (
    <div className="App">
      <h1>Hello Ada, How are you ?</h1>
      <MyButton>This is my button</MyButton>
      <p>i m fine, thanks</p>
    </div>
  );
}

export default App;
