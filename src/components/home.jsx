import "../styles/home.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-logo">Welcome!</div>

      <div className="home-row">
        <div className="img-container">
          <img src="/home.png" alt="Home Image" className="home-img" />
      
        </div>
        
        <div className="text-container">
          <p className="home-text">
            Virtual Environments and Spatial Cognition lab (VESC lab) is investigating human spatial cognition using behavioral methods including immersive virtual environments.
            VESC lab is also investigating psychological issues for the applications based on augmented reality. The immersive virtual environments are presented by a system including Worldviz Vizard,
            Oculus Rift, and Intersense 900 tracking systems. The research in this lab is funded by NSERC, CFI, and the University of Alberta.
            {/* right side */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
