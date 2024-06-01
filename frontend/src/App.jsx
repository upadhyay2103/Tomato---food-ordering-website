import Navbar from "./components/Navbar/Navbar.jsx"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import PlaceOrder from "./pages/Place_order/PlaceOrder.jsx"
import Futer from "./components/Footer/Futer.jsx"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx"
import Verify from "./pages/verify/Verify.jsx"
import MyOrders from "./pages/MyOrders/MyOrders.jsx"

function App() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/placeOrder" element={<PlaceOrder/>}></Route>
        <Route path="/verify" element={<Verify/>}></Route>
        <Route path="/myorders" element={<MyOrders/>}></Route>
      </Routes>
    </div>
    <Futer></Futer>
    </>
  )
}

export default App
