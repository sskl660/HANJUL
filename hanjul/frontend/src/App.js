import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Hanjul from './Hanjul/Hanjul';
import Recommend from './Recommend/Recommend';
import History from './History/History';
import User from './User';
import BookDetail from './BookDetail';
import MyLibrary from './MyLibrary';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
      {/* 원하는 주소와 component를 설치해줘야합니다. exact는 공통으로 겹치는 home에만 */}
        <Route exact path="/" component={Hanjul} />
        <Route path="/recommend" component={Recommend} />
        <Route path="/history" component={History} />
        <Route path="/book-detail" component={BookDetail} />
        <Route path="/mylibrary" component={MyLibrary} />
        <Route path="/user" component={User} />
      </BrowserRouter>
    </div>
  );
}

export default App;
