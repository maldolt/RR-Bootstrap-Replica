import './App.css';
import splashImage from './embedded/splash.webp'
import TopBar from './components/TopBar';
import styled from 'styled-components';
import StoreListing from './components/StoreListing';

const Splash = styled.div`
  width: 100vw;
  height: 250px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${ splashImage });
  background-color: #dfeed6;
  position: absolute;
  left: 0;
  top:40px;
  right: 0;
  z-index: -1
`

function App() {
  return <>
    <TopBar/>
    <Splash/>
    <StoreListing />
  </>
}

export default App;