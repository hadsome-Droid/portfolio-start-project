import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contacts/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";

const socialList = [
    {name: 'telegram', link: 'https://t.me/Hadsom1'},
    {name: 'vk-logo', link: ''},
    {name: 'linkedin', link: ''},
    {name: 'gitHub', link: 'https://github.com/hadsome-Droid',},
]

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer socialList={socialList}/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
