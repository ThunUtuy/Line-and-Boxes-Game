export default function({redPoints, bluePoints, handleRestart}){
    //console.log(redPoints + bluePoints);
    let textClass = "text-6xl text-center ";
    let text = "";
    if(redPoints > bluePoints){
        textClass += "text-red-500";
        text = "Red Won!";
    }
    else if(bluePoints > redPoints){
        textClass += "text-blue-500";
        text = "Blue Won!"; 
    }
    else{
        textClass += "text-yellow-500";
        text = "Draw!"
    }

    return(
        <div className=" absolute left-0 top-0 w-full h-full flex flex-col place-content-center items-center bg-stone-900/85">
            <h1 className = {textClass}>{text}</h1>
            <button className="bg-yellow-500/70 hover:bg-yellow-600/70 text-white m-5 p-2 rounded-full border-2 text-xl" onClick={handleRestart}>Restart?</button>
        </div>
    );
}