import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import BooksByCategory from "./Pages/Home/PDFBooks/BooksByCategory/BooksByCategory";
import ContactUs from "./Pages/Shared/Menu/ContactUs/ContactUs";
import AppCredits from "./Pages/Shared/Menu/AppCredit/AppCredits";
import PrivacyPolicy from "./Pages/Shared/Menu/PrivacyPolicy/PrivacyPolicy";
import Menu from "./Pages/Shared/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* Menus */}
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/appCredits" element={<AppCredits></AppCredits>}></Route>
        <Route
          path="/privacyPolicy"
          element={<PrivacyPolicy></PrivacyPolicy>}
        ></Route>
        {/* Homes */}
        <Route
          path="/bookCategory/:bookCategory/:bookCategoryName"
          element={<BooksByCategory></BooksByCategory>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
