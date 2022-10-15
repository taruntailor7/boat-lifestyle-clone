import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";

function App() {
  let isAuth = localStorage.getItem('isAuth');
  let name = localStorage.getItem("name");
  const handleLogout = ()=>{
    // setIsAuth(false);
    localStorage.setItem("isAuth", false);
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
  }
  return (
    <div className="App">
      <Navbar isAuth={isAuth} name={name} handleLogout={handleLogout}/>
      <AllRoutes />
    </div>
  );
}

export default App;
