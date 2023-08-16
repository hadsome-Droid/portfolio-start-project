import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>
            <Checkbox/>
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;

const Checkbox = styled.input.attrs(() => ({
    type: "checkbox"

}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100px;
  font-size: 1rem;

`