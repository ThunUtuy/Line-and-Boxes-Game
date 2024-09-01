export default function({HOR_LINES,VER_LINES,BOX,turn,onSelectButton}){
    // console.log("gameboard")

    function makeRow1(row){
        let row1Class="h-5 w-16 text-black";
        const row1=[]
        let currentClass =""
      
        for(let col=0 ; col <6 ; col++){
          //check true false
          //bg-${HOR_LINES[row][col]}-500
          if(HOR_LINES[row][col]){
            const color = HOR_LINES[row][col]
            if(color === "red"){
              currentClass = row1Class + " bg-red-500";
            }
            else{
              currentClass = row1Class + " bg-blue-500";
            }

          }
          else{
            currentClass = row1Class + " bg-white";
          }
      
          row1.push(
          <button 
            key={"hor_line"+row+col}
            className={currentClass}
            onClick={()=>onSelectButton("hor", row, col)}
          >
          </button>)
        }
        return row1;
      }
      
    function makeRow2(row){
        let lineClass="h-16 w-5 text-black";
        let boxClass="h-16 w-16 bg-gray-400";
        let currentLineClass="";
        let currentBoxClass="";
        const row2=[]
        for(let col=0 ; col <6 ; col++){
          //check true false
          if(VER_LINES[row][col]){
            const color = VER_LINES[row][col]
            if(color === "red"){
              currentLineClass = lineClass + " bg-red-500";
            }
            else{
              currentLineClass = lineClass + " bg-blue-500";
            }
          }
          else{
            currentLineClass = lineClass + " bg-white";
          }
      
          //check true false
          if(BOX[row][col]){
            const color = BOX[row][col]
            if(color === "red"){
              currentBoxClass = boxClass + " bg-red-300";
            }
            else{
              currentBoxClass = boxClass + " bg-blue-300";
            }
          }
          else{
            currentBoxClass = boxClass + " bg-gray-400";
          }
      
          row2.push(
          <button 
            key={"ver_line"+row+col} 
            className={currentLineClass}
            onClick={()=>onSelectButton("ver", row, col)}
          ></button>);
      
          row2.push(
          <div 
          key={"box"+row+col}
          className={currentBoxClass}
          //onClick={()=>onSelectSquare(rowIndex,colIndex)
          ></div>);
        }
      
        const lastColor = VER_LINES[row][6]
        if(lastColor === "red"){
          currentLineClass = lineClass + " bg-red-500"
        }
        else if(lastColor === "blue"){
          currentLineClass = lineClass + " bg-blue-500"
        }
        else{
          currentLineClass = lineClass + " bg-white"
        }
        row2.push(
          <button 
            key={"ver_line"+6+6} 
            className={currentLineClass}
            onClick={()=>onSelectButton("ver", row, 6)}
          ></button>);
      
        return row2;
      }
      
      
    const board = [];
    for(let row = 0 ; row < 6 ; row++){
    board.push(<li key={"row1_"+row} className="flex justify-center gap-5 m-0 p-0 flex-row">{makeRow1(row)}</li>)
    board.push(<li key={"row2_"+row} className="flex justify-center gap-0 m-0 p-0 flex-row">{makeRow2(row)}</li>)
    }
    board.push(<li key={"row1_"+6} className="flex justify-center gap-5 m-0 p-0 flex-row">{makeRow1(6)}</li>)

    return(
        <>{board}</>
    );
}

