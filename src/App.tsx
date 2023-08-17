import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/skills/Skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;


const Checkbox = styled.input.attrs(() => ({
    type: "checkbox"

}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100px;
  font-size: 1rem;

`