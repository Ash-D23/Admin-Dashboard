import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from './pages/home';
import Login from './components/login/login';
import Orders from './components/orders/orders';
import UserList from './components/userlist/userlist';
import User from './components/user/user';
import NewUser from './components/newuser/newuser';
import ProductList from './components/productlist/productlist';
import Product from './components/product/product';
import NewProduct from './components/newproduct/newproduct';

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!admin ? <Login /> : <Redirect to="/" /> }
        </Route>
        <Route exact path="/">
          {!admin ? <Redirect to="/login" /> : <Home />}
        </Route>
        
        {admin && (
          <>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;