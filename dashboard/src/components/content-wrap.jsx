import Bikes from "./Products/Bikes"; 
import Categories from './Content/Categoria';
import { Route, Switch } from 'react-router-dom';
import Users from './Content/Usuarios'

export default function ContentWrap() {
    return (
      <main
        className="content-wrap"
        style={{
          maxHeight: "calc(100vh - 6rem)",
        }}
      >
       <Switch>
        <Route path="/bicicletas"> 
        <Bikes />
        </Route> 
        <Route path='/categorias'>
          <Categories />
        </Route> 
        <Route path='/usuarios'>
          <Users />
        </Route>
        <Route path="*" >
          <p>404 - página no encontrada</p>
          </Route> 
      </Switch>
      </main>
    );
  }