import './App.css';
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import nitteLogo from "./assets/nitte2.png";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import botImgLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo"></img><span className="brand">CampusFlow</span></div>
        <div className="nitteLogo"><img src={nitteLogo} alt="Logo" className="collegeLogo"></img></div>
        <button className="midBtn"><img src={addBtn} alt="New Chat" className="addBtn"></img>New Chat</button>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt=""></img><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={botImgLogo} alt=""></img><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec. Blandit massa enim nec dui nunc mattis enim. Aliquet risus feugiat in ante metus dictum at. Tempor commodo ullamcorper a lacus vestibulum sed. Quam quisque id diam vel quam elementum pulvinar etiam non. Nisi vitae suscipit tellus mauris a diam maecenas. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Ut diam quam nulla porttitor massa id. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Sit amet aliquam id diam maecenas ultricies mi. Tincidunt arcu non sodales neque sodales ut etiam sit. Mauris vitae ultricies leo integer malesuada nunc. Tellus rutrum tellus pellentesque eu tincidunt. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" name="" id="" placeholder="Send a message..."></input><button className="send"><img src={sendBtn} alt="sendBtn"></img></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
