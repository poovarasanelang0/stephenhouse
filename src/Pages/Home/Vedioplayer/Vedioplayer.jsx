
import React from "react";
import "./Vedioplayer.css";
import vedio2 from "../../Home/Vedioplayer/Assets/1.mp4";

const Vedioplayer = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-12">
        <div className="player_wrapper01 text-center">
          <video className="react_player01  " src={vedio2} loop autoPlay muted>
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Vedioplayer
