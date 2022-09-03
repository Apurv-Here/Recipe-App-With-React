import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import AppLogo from "./pages/AppLogo";

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <AppLogo />
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
