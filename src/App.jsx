import App_Store from "./Components/UI/App_Store";
import Books from "./Components/UI/Books";
import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header";
import Remainder from "./Components/UI/Remainder";
import Search_ber from "./Components/UI/Search_ber";
import Subjectwise from "./Components/UI/Subjectwise";
import Subscribe from "./Components/UI/Subscribe";
import Testimonial from "./Components/UI/Testimonial";


const App = () => {
  return (
    <div>
      <Header/>
      <Search_ber/>
      <App_Store/>
      <Books/>
      <Remainder/>
      <Subscribe/>
      <Subjectwise/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;