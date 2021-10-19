
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import AllDepartment from './Pages/AllDepartmet/AllDepartment';
import Contact from './Pages/Contact/Contact';
import DepartmentDetails from './Pages/DepartmentDetails/DepartmentDetails';
import DoctorDetail from './Pages/Doctors/DoctorDetail.js/DoctorDetail';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import MainNavbar  from './Pages/Shared/Navbar/Navbar'
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <MainNavbar></MainNavbar>
        <Switch>
           <Route exact path="/">
                  <Home></Home>
            </Route>
           <Route path="/home">
                  <Home></Home>
            </Route>
            
           <Route path="/about">
                  <About></About>
            </Route>
           <Route exact path="/doctors">
                  <Doctors></Doctors>
            </Route>
            {/* dynamic route for doctor */}
           <Route path="/doctors/:doctorId">
                  <DoctorDetail></DoctorDetail>
            </Route>
           <Route exact path="/departments">
                  <AllDepartment></AllDepartment>
          </Route>
          
          {/* dynamic route */}
          <PrivateRoute path="/departments/:departmentId">
                  <DepartmentDetails></DepartmentDetails>
          </PrivateRoute>
           <Route path="/contact">
                  <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
            </Route>
          <Route path="/register">
            <Register></Register>
            </Route>
            
            {/* not found page */}
            <Route path="/*">
            <NotFound></NotFound>
            </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
