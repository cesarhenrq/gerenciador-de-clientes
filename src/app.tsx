import { BrowserRouter } from "react-router-dom";
import Router from "@presentation/components/routes";

import GlobalStyle from "@presentation/styles/global";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Router />
  </BrowserRouter>
);

export default App;
