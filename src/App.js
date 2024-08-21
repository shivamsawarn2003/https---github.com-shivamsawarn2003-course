import styled,{ThemeProvider} from "styled-components";
import {lightTheme} from "./utils/Themes";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
`;

function App() {
return <ThemeProvider theme={lightTheme}>
  <BrowserRouter>
</BrowserRouter>
</ThemeProvider>
}

export default App;
