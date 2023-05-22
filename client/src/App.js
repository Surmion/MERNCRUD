import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit'
import Details from './components/Details';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/edit/:id',
        element: <Edit />
      },
      {
        path: '/view/:id',
        element: <Details />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <Navbar />
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route exact path="/register" component={Register} />
  //       <Route exact path="/edit/:id" component={Edit} />
  //       <Route exact path="/view/:id" component={Details} />
  //     </Switch>

  //   </>
  // );
}

export default App;
