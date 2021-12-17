import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';

import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';

import Logout from './Logout';
import View from './View';
//1. Create and import PrivateRoute component.
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AppContainer>
      <BloomHeader/>
      <Header/>
      <RouteContainer>

        {/* //3. Create a PrivateRoute for View component point to '/view.' */}
        <PrivateRoute exact path="/view" component={View} />
        {/* <PrivateRoute exact path="/view" >
          <View />
        </PrivateRoute> */}

        {/* //4. Create a PrivateRoute for Logout component pointing to '/logout.' */}
        <PrivateRoute exact path="/logout" component={Logout} />
        {/* <PrivateRoute path="/logout" >
          <Logout />
        </PrivateRoute> */}

        {/* //2. Create a Route for Login pointing to '/login.' */}
        <Route path="/login" component={Login} /> 

        <Route exact path="/">
          <Login/>
        </Route>          
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List

const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
