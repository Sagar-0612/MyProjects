import React from "react";
import "./scoreboard.css"
export default function ScoreBoard({score,xPlaying}){
    const{xScore,oScore}=score
    return(
        <div className="scoreboard">
          <span className={`score x-score ${!xPlaying && "inactive"}`}>Player X = {xScore}</span>
          <span className={`score o-score ${xPlaying && "inactive"}`}>Player O = {oScore}</span>
        </div>
    );
}