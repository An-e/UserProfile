
import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './userProfile.jsx';


class App extends React.Component {

    render() {
        return (
          <UserProfile/>
        );
     }
  }


document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
      <App />,
      document.getElementById('app')
  );
});
