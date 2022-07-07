import './App.css';
import Footer from './Footer/Footer';
import GreetUser from './GreetUser/GreetUser';
import HeroTitle from './HeroTitle/HeroTitle';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import StopWatch from './StopWatch/StopWatch';

function App() {
  // React.createElement(GreetUser, {user:"Sam"});
  const notifications = {
    count : 3
  };

  return (
    <>
      <Login/>
      <Notifications data={notifications}/>
      <HeroTitle>Sam</HeroTitle>
      <GreetUser user="Sam"/> 
      <Footer/>
      <StopWatch/>
    </>
  );
}

export default App;
