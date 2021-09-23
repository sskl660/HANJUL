import { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Hanjul from './Hanjul/Hanjul';
import Recommend from './Recommend';
import Traces from './Traces';
import User from './User';
import BookDetail from './BookDetail';
import MyLibrary from './MyLibrary';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="app">
        <BrowserRouter>
        {/* 원하는 주소와 component를 설치해줘야합니다. exact는 공통으로 겹치는 home에만 */}
          <Route path="/" component={Hanjul} exact />
          <Route path="/recommend" component={Recommend} />
          <Route path="/traces" component={Traces} />
          <Route path="/book-detail" component={BookDetail} />
          <Route path="/mylibrary" component={MyLibrary} />
          <Route path="/user" component={User} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
