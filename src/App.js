import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import User from './componenets/getuser/user';
import Add from './componenets/adduser/add';
import Edite from './componenets/updateuser/edite';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edite />,
    },

    {
      path: "/delete",
      element: "dele",
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
