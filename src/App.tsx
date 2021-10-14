import { Home } from "./pages/home";
import { Head } from "./components/header";
import { Bottom } from "./components/footer";
import './global.css';

function App() {
  return (
    <>
      <Head />
      <Home />
      <Bottom />
    </>
  );
};

export default App;