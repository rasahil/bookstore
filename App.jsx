import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import ContactUs from "./components/ContactUs"
import BookStore from "./components/BookStore"
import DonorForm from "./components/DonorForm"
import BookSellForm from "./components/BookSellForm"
import Aboutus from "./pages/Aboutus"

const App = () => {
  return (
    <div>
   
<Navbar/>
<Routes>
  <Route path="/" element={<Landing/>} />
  <Route path="/contactus" element={<ContactUs/>}/>
  <Route path="/store" element={<BookStore/>}/>
  <Route path="/donate" element={<DonorForm/>}/>
  <Route path="/sell" element={<BookSellForm/>}/>
  <Route path="/aboutus" element={<Aboutus/>}/>

  
  

</Routes>
    </div>
  )
}
export default App