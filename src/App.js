import styld,{ThemeProvider} from "styled-components";
import {ligtTheme} from "./utils/Themes";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Contaier = styld.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
`;

function App() {
return <ThemeProvider theme={ligtTheme}>
  <BrowserRouter>
</BrowserRouter>
</ThemeProvider>
}

export default App;
