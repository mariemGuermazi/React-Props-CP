import './App.css';
import Profile from './profileComponent/Profile';
import myPic from "./profileComponent/profilePic.jpg";
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {

  const profileStyle = {
    backgroundColor: "#9bd7f393",
    margin: 20,
    borderRadius: 20

};

const profilePicStyle = {
  width: 350,
  margin: 20,
  borderRadius: 20
};


  return (
    <div className="App">
      <MyNavbar />
      <div style={profileStyle}>
      <Profile
      fullName="Mariem Guermazi" 
      bio="this is my bio" 
      profession="student">
      <img src={myPic} alt="this is a profile pic" style ={profilePicStyle} />
      </Profile>
      </div>
      <MyFooter/>
    </div>
  );
}

export default App;

