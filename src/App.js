
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import UserList from './Components/UserList';
import Footer from './Components/Footer';



function App() {

  return (
    <div className="App">
      
   <UserList/>
   <Footer/>
    </div>
  );
}

export default App;
