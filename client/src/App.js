import './App.css';
import Navbar from './components/Navbar';

import ProjectedRoutes from './pages/ProjectedRoutes'
import ProjectedUser from "./pages/User/ProjectedUser";

import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';

import Profile from './pages/Profile';
import UserTodos from "./pages/User/Todos";
import UserTodosDetail from "./pages/User/TodoDetail";
import NewTodo from "./pages/User/Todos/new";



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
            <Navbar/>
            <div id='content'>
              <Routes>
                <Route path='/signin' element={<Signin/>}/>
                <Route exact path='/' element={<Signin/>}/>
                <Route path={'/signup'} element={<Signup/>}/>

                <Route element={<ProjectedRoutes />}>
                  <Route path="/profile" element={<Profile />}/>
                </Route>
                
                <Route element={<ProjectedUser />}>
                  {/* https://www.robinwieruch.de/react-router-nested-routes/ */}
                  <Route path="/user/todos" element={<UserTodos />} />
                  <Route
                    path="/user/todos/:product_id"
                    element={<UserTodosDetail />}
                  />
                  <Route path="/user/todos/new" element={<NewTodo />} />
                  
                </Route>

              </Routes>
            </div>
        </div>
    </Router>
  );
}
export default App;
