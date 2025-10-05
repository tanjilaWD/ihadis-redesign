import App_Store from "./Components/UI/App_Store";
import Books from "./Components/UI/Books";
import Header from "./Components/UI/Header";
import Remainder from "./Components/UI/Remainder";
import Search_ber from "./Components/UI/Search_ber";
import Subscribe from "./Components/UI/Subscribe";


const App = () => {
  return (
    <div>
      <Header/>
      <Search_ber/>
      <App_Store/>
      <Books/>
      <Remainder/>
      <Subscribe/>
    </div>
  );
};

export default App;