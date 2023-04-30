import "./ResetButton.css"
export default function ResetButton({resetBoard}){
    return(
        <button className="reset-btn" onClick={resetBoard}>Reset</button>
    );
}