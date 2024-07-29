import { BrowserRouter, Route } from "react-router-dom";
import App from "./pages/home";
import ButtonHome from "./components/buttonHome";

export default function Routes() {
    return(
        <BrowserRouter>
            <Route Component={App} exact={true} path="/" /> 
            <Route Component={ButtonHome} path="/buttonhome" />
        </BrowserRouter>
    )
}