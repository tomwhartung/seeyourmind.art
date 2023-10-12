//
// lib/jungian/ImageLib.ts: identifiers used to draw Jungian quiz type images
// ==========================================================================

// logLogicFlow: enable turning logging to the console on and off
// --------------------------------------------------------------
//   NOTE: Setting logLogicFlow to true for one page in effect sets it for all pages
//     Or so it seems like it does, sometimes...
export let logLogicFlow = false;
// export let logLogicFlow = true;
export function setLogLogicFlow( value: boolean ): void {
  logLogicFlow = value;
}
// setLogLogicFlow( true );

// ScoreValueIFace: giving names to the values that come from the Jungian sliders
export interface ScoreValueIFace {
  eVsIValue: number;    // [0 .. 100]
  nVsSValue: number;    // [0 .. 100]
  fVsTValue: number;    // [0 .. 100]
  jVsPValue: number;    // [0 .. 100]
}

// Image Parameters: These control how the App creates the image
// =============================================================
// -> See the README-React_notes.md file for specifics; following is an overview:
// The app stores each of these under the "jungian" item in local storage
// Use the set* functions to manipulate these values *in real time*
//   This works because of judicious use of state variables, event handlers, and useEffect() calls
// Use the initial values for initializing local storage
// Use the invalid values for initializing state variables
//
// *[Ss]coreValue* identifiers: values come from the four sliders on the Create page
// ---------------------------------------------------------------------------------
export const initialScoreValue = 50;        // Initial value of each slider before user changes it
export const initialScoreValueArr = [
  initialScoreValue,
  initialScoreValue,
  initialScoreValue,
  initialScoreValue
];
export const invalidScoreValue = -1;        // Used to create "default" value for state variable
export const invalidScoreValueArr = [     // Used as "default" value for state variable
  invalidScoreValue,
  invalidScoreValue,
  invalidScoreValue,
  invalidScoreValue
];
export const minScoreValue = 0;             // Minimum score value
export const maxScoreValue = 100;           // Maximum score value
export const ScoreValueObj = {
  eVsIValue: initialScoreValue,
  nVsSValue: initialScoreValue,
  fVsTValue: initialScoreValue,
  jVsPValue: initialScoreValue,
  toString: function(): string {
    return(
      "ImageLib.ScoreValueObj.eVsIValue = " + this.eVsIValue + "\n" +
      "ImageLib.ScoreValueObj.nVsSValue = " + this.nVsSValue + "\n" +
      "ImageLib.ScoreValueObj.fVsTValue = " + this.fVsTValue + "\n" +
      "ImageLib.ScoreValueObj.jVsPValue = " + this.jVsPValue
    );
  },
}
export function setScoreValueObj( newScoreValueArr: number[] ): void {
  ScoreValueObj.eVsIValue = newScoreValueArr[0];
  ScoreValueObj.nVsSValue = newScoreValueArr[1];
  ScoreValueObj.fVsTValue = newScoreValueArr[2];
  ScoreValueObj.jVsPValue = newScoreValueArr[3];
}

// *[Ii]mageStr identifiers contain a string of characters denoting the color of each square in the image
// ------------------------------------------------------------------------------------------------------
//   The characters go from left to right and from top to bottom
//   - The first letter is the color of the upper-left square
//   - The last letter is the color of the lower-right square
// The score values on the Create page determine the original strings
// Clicking on the image on the Refine page allows for fine-tuning the image one character at a time
export const initialImageStr = "";
export const invalidImageStr = "";
export let imageStr = invalidImageStr;
export function setImageStr( newImageStr: string ): void {
  imageStr = newImageStr;
}

// *[Ss]quareSize identifiers contain the number of pixels per square
// ------------------------------------------------------------------
// Set this value using a slider on the Create and Refine pages
// -> This value is irrelevant on the View page, because the image appears in a "d-flex" card
//    that automatically adjusts its size to the window in which it appears
export const initialSquareSize = 15;        // Size of each square before user changes it
export const invalidSquareSize = 0;         // Used as "default" value for state variable
export const minSquareSize = 1;             // Minimum size of each square
export const maxSquareSize = 33;            // Maximum size of each square
export let squareSize = initialSquareSize;  // Changed by a slider on Refine page
export function setSquareSize( newSquareSize: number ): void {
  squareSize = newSquareSize;
}

// *[Gg]ridSize identifiers contain the number of squares per side
// ---------------------------------------------------------------
// Set this value using a slider on the Create page
export const initialGridSize = 19;        // Default number of squares in each row and column
export const invalidGridSize = 0;         // Used as "default" value for state variable
export const minGridSize = 1;             // Minimum number of squares on each side
export const maxGridSize = 49;            // Maximum number of squares on each side
export let gridSize = initialGridSize;    // Changed by a slider on the Create page
export function setGridSize( newGridSize: number ): void {
  gridSize = newGridSize;
}
const maxTrivialGridSize = 5;    // Compositions are trivial for trivial grid sizes


// Constant Arrays:
// ================
//
export const scoreValueNames: readonly string[] = [
  "E vs I",
  "N vs S",
  "T vs R",
  "J vs P",
];
export const leftFcnNames: readonly string[] = [
  "Extraverted",
  "iNtuition",
  "Feeling",
  "Judging"
];
export const leftFcnLetters: readonly string[] = [
  "E",
  "N",
  "F",
  "J"
];
export const rightFcnNames: readonly string[] = [
  "Introverted",
  "Sensing",
  "Thinking",
  "Perception"
];
export const rightFcnLetters: readonly string[] = [
  "I",
  "S",
  "T",
  "P"
];

export const colorLetters: readonly string[] = [
  "B",   // "B"lue
  "G",   // "G"reen
  "R",   // "R"ed
  "Y"    // "Y"ellow
];
export const colorNames: readonly string[] = [
  "Blue",
  "Green",
  "Red",
  "Yellow"
];


// Derived Values:
// ===============
//
// gridTopX and gridTopY in effect define the width of the image's border
//   IT WOULD BE NICE if the size of the border would increase gradually with the size of the image
// =-> NOT SURE WHY THIS DOESN'T WORK, and not wanting to worry about it right now:
// export const gridTopX = Math.round( (squareSize * gridSize) / 50 );    // X location of top left corner
// export const gridTopY = Math.round( (squareSize * gridSize) / 50 );    // Y location of top left corner
export const gridTopX = 4;       // X location of top left corner of grid
export const gridTopY = 4;       // Y location of top left corner of grid

export function getCanvasWidth(): number {
  return ( squareSize * gridSize ) + ( 2 * gridTopX );
}
export function getCanvasHeight(): number {
  return ( squareSize * gridSize ) + ( 2 * gridTopY );
}

export const unknownFcnLetter = "X";
export const fourLtrTypeArr : string[] = [ unknownFcnLetter, unknownFcnLetter, unknownFcnLetter, unknownFcnLetter ];
export let fourLtrTypeStr = fourLtrTypeArr.join('');


// Functions:
// ==========
//
// drawImageStr: Draw a "groja-esque" grid of blue, green, red, and yellow squares
//   Splits imageStr into an imageCharArr, and draws the squares one-by-one
export function drawImageStr( context: CanvasRenderingContext2D ): void {
  if ( logLogicFlow ) {
    console.log( "drawImageStr in ImageLib.ts: top of function" );
  }

  drawUnderlyingCanvas( context );

  let squareTopX = gridTopX;
  let squareTopY = gridTopY;
  let colorLetter = colorLetters[0];   // just a temporary default value

  if ( logLogicFlow ) {
    console.log( "drawImageStr: imageStr.length = '" + imageStr.length + "'" );
  }

  if ( imageStr.length > 0 ) {
    const imageCharArr = imageStr.split( "" );
    let imgArrIdx = 0;
    if ( logLogicFlow ) {
      console.log( "drawImageStr: starting the for loop" );
    }
    for ( let row=0; row < gridSize; row++ ) {
      squareTopY = gridTopY + (row * squareSize);
      for ( let col=0; col < gridSize; col++ ){
        colorLetter = imageCharArr[imgArrIdx++];
        // console.log( "for loop in drawImageStr() in ImageLib.ts: imgArrIdx = " + imgArrIdx );
        // console.log( "for loop in drawImageStr() in ImageLib.ts: colorLetter = " + colorLetter );
        squareTopX = gridTopX + (col * squareSize);
        if ( colorLetter == "B" ) {
          context.fillStyle = "rgba(0, 0, 255, 1)";
        } else if ( colorLetter == "G" ) {
          context.fillStyle = "rgba(0, 255, 0, 1)";
        } else if ( colorLetter == "R" ) {
          context.fillStyle = "rgba(255, 0, 0, 1)";
        } else if ( colorLetter == "Y" ) {
          context.fillStyle = "rgba(255, 255, 0, 1)";
        } else {
          context.fillStyle = "rgb(255, 255, 255, 1)";
        }
        context.fillRect( squareTopX, squareTopY, squareSize, squareSize );
      }
    }
  } else {
    if ( logLogicFlow ) {
      console.log( "drawImageStr() in ImageLib.ts: imageStr is empty, hope that's ok...!" );
    }
  }
  if ( logLogicFlow ) {
    console.log( "drawImageStr in ImageLib.ts: returning" );
  }
}

// createFreshImageStr: Create a new random "groja-esque" grid of blue, green, red, and yellow squares
//   Starts with an empty imageCharArr and adds color letters one-by-one
//   Returns the imageCharArr as a string
export function createFreshImageStr(): string {
  if ( logLogicFlow ) {
    console.log( "(0) createFreshImageStr in ImageLib.ts: top of function" );
  }

  setTypeAndGoal();
  setLineParms();   // relies on type being set!!!

  let freshImageStr = createRandomImageStr();

  if ( gridSize <= maxTrivialGridSize ) {
    return freshImageStr;  // Just for now....
  }

  const maxTries = 1000;
  let numTries = 0;
  let done = false;

  if ( logLogicFlow ) {
    console.log( "(0) createFreshImageStr: starting the loop!" );
  }

  while( ! done ) {
    freshImageStr = sprinkleNeeded( freshImageStr );  // relies on goal being set!!!
    freshImageStr = drawLines( freshImageStr );       // relies on lineParmsObj being set!!!
    done = checkIfDone( freshImageStr );              // returns true if neededSquares.* == 0
    numTries++;
    if ( ! done ) {
      // console.log( "(0) createFreshImageStr not yet done after " + numTries + " tries" );
      if ( maxTries < numTries ) {
        done = true;
      }
    }
  }

  if ( logLogicFlow ) {
    console.log( "(0) createFreshImageStr: end of for loop!" );
  }
  // if ( logLogicFlow ) {
  if ( numTries < maxTries ) {
    console.log( "(0) createFreshImageStr: FINISHED OK after numTries = " + numTries );
  } else {
    console.log( "(0) createFreshImageStr: STOPPING WITHOUT FINISHING!" );
    console.log( "(0) createFreshImageStr: numTries = " + numTries + " > maxTries = " + maxTries );
    if ( goalSquares && goalSquares.toString() ) {
      console.log( goalSquares.toString() );
    }
    if ( currentSquares && currentSquares.toString() ) {
      console.log( currentSquares.toString() );
    }
    if ( neededSquares && neededSquares.toString() ) {
      console.log( neededSquares.toString() );
    }
  }
  // console.log( "(0) createFreshImageStr: -------------------------------------------------" );
  // console.log( "(0) createFreshImageStr in ImageLib.ts: Returning the freshImageStr" );
  // }

  return freshImageStr;
}

// "Private" Variables and Functions that I am working on and want close by, for now:
// ==================================================================================
interface ColorsIFace {
  blue: number;
  green: number;
  red: number;
  yellow: number;
  toString: () => string;
}
const defaultNum = 0;
const goalSquares : ColorsIFace = {
  blue: defaultNum,
  green: defaultNum,
  red: defaultNum,
  yellow: defaultNum,
  toString: function(): string {
    return(
      "goalSquares: blue = " + this.blue + "; yellow = " + this.yellow + "; green = " + this.green  + "; red = " + this.red
    );
  },
};
const currentSquares : ColorsIFace = {
  blue: defaultNum,
  green: defaultNum,
  red: defaultNum,
  yellow: defaultNum,
  toString: function(): string {
    return(
      "currentSquares: blue = " + this.blue + "; yellow = " + this.yellow + "; green = " + this.green  + "; red = " + this.red
    );
  },
};
const neededSquares : ColorsIFace = {
  blue: defaultNum,
  green: defaultNum,
  red: defaultNum,
  yellow: defaultNum,
  toString: function(): string {
    return(
      "neededSquares: blue = " + this.blue + "; yellow = " + this.yellow + "; green = " + this.green  + "; red = " + this.red
    );
  },
};

// sprinkleNeeded: Adds the needed squares in random spots
//   **NOTE:** this function relies on the goal being set!!!
function sprinkleNeeded( oldImageStr: string ): string {
  if ( logLogicFlow ) {
    console.log( "(1) sprinkleNeeded in ImageLib.ts: top of function" );
  }
  let newImageStr = oldImageStr;
  setCurrentSquares( oldImageStr );
  setNeededSquares();

  if ( logLogicFlow ) {
    if ( goalSquares && goalSquares.toString() ) {
      console.log( goalSquares.toString() );
    }
    if ( currentSquares && currentSquares.toString() ) {
      console.log( currentSquares.toString() );
    }
    if ( neededSquares && neededSquares.toString() ) {
      console.log( neededSquares.toString() );
    }
  }

  if ( neededSquares.blue > 0 ) {
    newImageStr = changeRandomSquares( newImageStr, neededSquares.blue, colorLetters[0] );
    if ( logLogicFlow ) {
      console.log( "Made " + neededSquares.blue + " squares " + colorNames[0] );
    }
  }
  if ( neededSquares.green > 0 ) {
    newImageStr = changeRandomSquares( newImageStr, neededSquares.green, colorLetters[1] );
    if ( logLogicFlow ) {
      console.log( "Made " + neededSquares.green + " squares " + colorNames[1] );
    }
  }
  if ( neededSquares.red > 0 ) {
    newImageStr = changeRandomSquares( newImageStr, neededSquares.red, colorLetters[2] );
    if ( logLogicFlow ) {
      console.log( "Made " + neededSquares.red + " squares " + colorNames[2] );
    }
  }
  if ( neededSquares.yellow > 0 ) {
    newImageStr = changeRandomSquares( newImageStr, neededSquares.yellow, colorLetters[3] );
    if ( logLogicFlow ) {
      console.log( "Made " + neededSquares.yellow + " squares " + colorNames[3] );
    }
  }

  if ( logLogicFlow ) {
    console.log( "(1) sprinkleNeeded in ImageLib.ts: returning" );
  }
  return newImageStr;
}

const drawSeqForE = 'brtl';  // these go from shortest to longest: bottom-right-top-left
const drawSeqForI = 'ltrb';  // these go from shortest to longest: left-top-right-bottom
interface LineParmsIFace {
  talPos: number;         // positon of lines at the Top And on the Left side - 0-based
  rabPos: number;         // positon of lines at the Bottom And on the Right side - 0-based
  topColor:    string;    // One of the colorLetters
  leftColor:   string;    // One of the colorLetters
  rightColor:  string;    // One of the colorLetters
  bottomColor: string;    // One of the colorLetters
  drawSeq:     string;    // drawSeqForE or drawSeqForI
  domFcn:      string;    // Dominant function for this type - 'F', 'N', 'S', or 'T'
  auxFcn:      string;    // Auxiliary function for this type - 'F', 'N', 'S', or 'T'
  toString: () => string;
}
const lineParmsObj: LineParmsIFace = {
  talPos: 5,    // 0-based positon of lines at the top and on the left side
  rabPos: 13,   // 0-based positon of lines at the bottom and on the right side
  topColor:    colorLetters[1],    // Green
  leftColor:   colorLetters[0],    // Blue
  rightColor:  colorLetters[3],    // Yellow
  bottomColor: colorLetters[2],    // Red
  drawSeq:     drawSeqForE,        // Defaults to 'E', because there is no drawing seq for 'X'!
  domFcn:      unknownFcnLetter,   // Defaults to 'X' for unknown
  auxFcn:      unknownFcnLetter,   // Defaults to 'X' for unknown
  toString: function(): string {
    return(
      "lineParmsObj.talPos = " + this.talPos + "\n" +
      "lineParmsObj.rabPos = " + this.rabPos + "\n" +
      "lineParmsObj.topColor = " + this.topColor + "\n" +
      "lineParmsObj.leftColor = " + this.leftColor + "\n" +
      "lineParmsObj.rightColor = " + this.rightColor + "\n" +
      "lineParmsObj.bottomColor = " + this.bottomColor + "\n" +
      "lineParmsObj.drawSeq = " + this.drawSeq + "\n" +
      "lineParmsObj.domFcn = " + this.domFcn + "\n" +
      "lineParmsObj.auxFcn = " + this.auxFcn
    );
  },
};
// drawLines: draws the lines in the image
//   **NOTE:** this function relies on the lineParmsObj being set!!!
function drawLines( oldImageStr: string ): string {
  if ( logLogicFlow ) {
    console.log( "(2) drawLines in ImageLib.ts: top of function" );
    console.log( lineParmsObj.toString() );
  }

  let newImageStr = oldImageStr;
  let startPos = Math.round( gridSize/4 );
  let length = Math.round( gridSize/2 );
  let expansionAmount = 1;
  const minExpandableGridSize = 9;
  const largeGridSize = 23;
  const hugeGridSize = 31;

  if ( largeGridSize < gridSize ) {
    if ( hugeGridSize < gridSize ) {
      expansionAmount = 5;
    } else {
      expansionAmount = 3;
    }
  }

  if ( lineParmsObj.drawSeq == drawSeqForE ) {  // bottom-right-top-left
    newImageStr = drawHorizLine( newImageStr, lineParmsObj.bottomColor,
                                lineParmsObj.rabPos, startPos, length );
    if ( minExpandableGridSize < gridSize ) {
      startPos -= expansionAmount;
      length += expansionAmount * 2;
    }
    newImageStr = drawVertLine( newImageStr, lineParmsObj.rightColor,
                                lineParmsObj.rabPos, startPos, length );
    startPos -= expansionAmount;
    length += expansionAmount * 2;
    newImageStr = drawHorizLine( newImageStr, lineParmsObj.topColor,
                                lineParmsObj.talPos, startPos, length );
    if ( minExpandableGridSize < gridSize ) {
      startPos -= expansionAmount;
      length += expansionAmount * 2;
    }
    newImageStr = drawVertLine( newImageStr, lineParmsObj.leftColor,
                                lineParmsObj.talPos, startPos, length );
    if ( logLogicFlow ) {
      console.log( "drawLines: drew 4 lines for an Extroverted personality" );
    }
  } else {                                       // left-top-right-bottom
    newImageStr = drawVertLine( newImageStr, lineParmsObj.leftColor,
                                lineParmsObj.talPos, startPos, length );
    if ( minExpandableGridSize < gridSize ) {
      startPos -= expansionAmount;
      length += expansionAmount * 2;
    }
    newImageStr = drawHorizLine( newImageStr, lineParmsObj.topColor,
                                lineParmsObj.talPos, startPos, length );
    startPos -= expansionAmount;
    length += expansionAmount * 2;
    newImageStr = drawVertLine( newImageStr, lineParmsObj.rightColor,
                                lineParmsObj.rabPos, startPos, length );
    if ( minExpandableGridSize < gridSize ) {
      startPos -= expansionAmount;
      length += expansionAmount * 2;
    }
    newImageStr = drawHorizLine( newImageStr, lineParmsObj.bottomColor,
                                lineParmsObj.rabPos, startPos, length );
    if ( logLogicFlow ) {
      console.log( "drawLines: drew 4 lines for an Introverted personality" );
    }
  }

  if ( logLogicFlow ) {
    console.log( "(2) drawLines in ImageLib.ts: returning the newImageStr" );
  }
  return newImageStr;
}
function drawHorizLine( oldImageStr: string,
         clrLtr: string, yPos: number, xStart: number, length: number ): string {
  if ( logLogicFlow ) {
    console.log( "drawHorizLine in ImageLib.ts: top of function" );
    console.log( "drawing " + length + " " + clrLtr + " squares starting at (" + xStart + ", " + yPos + ")" );
  }

  const newImageCharArr = oldImageStr.split( "" );
  const firstIdx = (yPos * gridSize) + xStart;
  const lastIdx  = firstIdx + length;
  let imgArrIdx = firstIdx;

  for( let col = firstIdx; col <= lastIdx ; col++ ) {
    newImageCharArr[imgArrIdx] = clrLtr;
    imgArrIdx++;
  }

  const newImageStr = newImageCharArr.join('');

  if ( logLogicFlow ) {
    console.log( "drawHorizLine in ImageLib.ts: returning the newImageStr" );
  }

  return newImageStr;
}
function drawVertLine( oldImageStr: string,
         clrLtr: string, xPos: number, yStart: number, length: number ): string {
  if ( logLogicFlow ) {
    console.log( "drawVertLine in ImageLib.ts: top of function" );
    console.log( "drawing " + length + " " + clrLtr + " squares starting at (" + yStart + ", " + xPos + ")" );
  }

  const newImageCharArr = oldImageStr.split( "" );
  const firstIdx = (yStart * gridSize) + xPos;
  let imgArrIdx = firstIdx;

  // for( let row = firstIdx; row <= lastIdx ; row++ ) {
  for( let row = 1; row <= length ; row++ ) {
    newImageCharArr[imgArrIdx] = clrLtr;
    imgArrIdx += gridSize;
  }

  const newImageStr = newImageCharArr.join('');

  if ( logLogicFlow ) {
    console.log( "drawVertLine in ImageLib.ts: returning the newImageStr" );
  }

  return newImageStr;
}
// checkIfDone: returns true if currentSquares = goalSquares
//   else returns false
function checkIfDone( imageStr: string ): boolean {
  if ( logLogicFlow ) {
    console.log( "(3) checkIfDone in ImageLib.ts: top of function" );
  }

  let done = false;
  setCurrentSquares( imageStr );
  setNeededSquares();

  if ( neededSquares.blue == 0 && neededSquares.green == 0 &&
       neededSquares.red == 0 && neededSquares.yellow == 0 ) {
    done = true;
    if ( logLogicFlow ) {
      console.log( "(3) checkIfDone: the neededSquares.* are all 0 and WE ARE DONE!" );
    }
  } else {
    if ( logLogicFlow ) {
      console.log( "(3) checkIfDone: we are not done yet" );
    }
  }

  if ( logLogicFlow ) {
    if ( goalSquares && goalSquares.toString() ) {
      console.log( goalSquares.toString() );
    }
    if ( currentSquares && currentSquares.toString() ) {
      console.log( currentSquares.toString() );
    }
    if ( currentSquares && currentSquares.toString() ) {
      console.log( neededSquares.toString() );
    }
    console.log( "(3) checkIfDone in ImageLib.ts: returning done = " + done );
  }
  return done;
}
function setCurrentSquares( imageStr: string ): void {
  // if ( logLogicFlow ) {
  // console.log( "setCurrentSquares: top of function" );
  // }
  currentSquares.blue = 0;
  currentSquares.green = 0;
  currentSquares.red = 0;
  currentSquares.yellow = 0;

  const totalSquares = gridSize * gridSize;
  let colorLetter = colorLetters[0];   // just a temporary default value
  const imageCharArr = imageStr.split('');

  for ( let imgArrIdx=0; imgArrIdx < totalSquares; imgArrIdx++ ) {
    colorLetter = imageCharArr[imgArrIdx];
    if ( colorLetter == colorLetters[0] ) {
      currentSquares.blue++;
    } else if ( colorLetter == colorLetters[1] ) {
      currentSquares.green++;
    } else if ( colorLetter == colorLetters[2] ) {
      currentSquares.red++;
    } else {
      currentSquares.yellow++;
    }
  }
  // if ( logLogicFlow ) {
  //   if ( currentSquares && currentSquares.toString() ) {
  //     console.log( "setCurrentSquares: " + currentSquares.toString() );
  //   }
  // }
  return;
}
function setNeededSquares(): void {
  neededSquares.blue = goalSquares.blue - currentSquares.blue;
  neededSquares.green = goalSquares.green - currentSquares.green;
  neededSquares.red = goalSquares.red - currentSquares.red;
  neededSquares.yellow = goalSquares.yellow - currentSquares.yellow;
  // if ( logLogicFlow ) {
  //   if ( currentSquares && currentSquares.toString() ) {
  //     console.log( "setNeededSquares: " + neededSquares.toString() );
  //   }
  // }
}
function changeRandomSquares( oldImageStr: string, numNeeded: number, clrLtr: string ): string {
  // if ( logLogicFlow ) {
  //   console.log( "changeRandomSquares: top of function" );
  // }

  const newImageCharArr = oldImageStr.split( "" );
  const imageLength = newImageCharArr.length;
  let squareNum = 0;

  for( let num = 0; num < numNeeded; num++ ) {
    squareNum = Math.floor( Math.random() * (imageLength + 1) );
    newImageCharArr.splice( squareNum, 1, clrLtr );
    // if ( logLogicFlow ) {
    //   const squareRow = Math.floor( squareNum / gridSize );
    //   const squareCol = squareNum % gridSize;
    //   console.log( "Changed squareNum = " + squareNum + " = (" + squareCol + ", " + squareRow + ") to " + clrLtr );
    // }
  }

  // if ( logLogicFlow ) {
  //   console.log( "changeRandomSquares: returning" );
  // }

  const newImageStr = newImageCharArr.join('');
  return newImageStr;
}

// "Private" Variables and Functions:
// ==================================
// These variables and functions are *not* exported so are available for internal use *only*
//
interface ScoreIFace {
  eVsI: number;   // Might be an integer or a percentage
  nVsS: number;   // Might be an integer or a percentage
  fVsT: number;   // Might be an integer or a percentage
  jVsP: number;   // Might be an integer or a percentage
}
const defaultPct = .5;
const pcts : ScoreIFace = {
  eVsI: defaultPct,
  nVsS: defaultPct,
  fVsT: defaultPct,
  jVsP: defaultPct,
};


// createRandomImageStr: Create a new random "groja-esque" grid of blue, green, red, and yellow squares
//   Starts with an empty imageCharArr and adds color letters one-by-one
//   Returns the imageCharArr as a string
function createRandomImageStr(): string {
  if ( logLogicFlow ) {
    console.log( "createRandomImageStr in ImageLib.ts: top of function" );
  }

  let colorLetter = "B";
  const imageCharArr: string[] = [];

  for ( let row=0; row < gridSize; row++ ) {
    for ( let col=0; col < gridSize; col++ ){
      colorLetter = getRandomColor();
      imageCharArr.push( colorLetter );
    }
    // if ( logLogicFlow ) {
    //   console.log( "createRandomImageStr: imageCharArr.length = " + imageCharArr.length );
    // }
  }

  const randomImageStr = imageCharArr.join('');

  if ( logLogicFlow ) {
    console.log( "createRandomImageStr: Fresh Image's randomImageStr.length = " + randomImageStr.length );
    console.log( "createRandomImageStr in ImageLib.ts: Returning the randomImageStr" );
  }
  return randomImageStr;
}
// setTypeAndGoal: set the four-letter Jungian/MBTI(r) type and calc number of squares needed of each color
function setTypeAndGoal() {
  if ( logLogicFlow ) {
    console.log( "setTypeAndGoal in ImageLib.ts: top of function" );
  }

  const totSquares = gridSize * gridSize;
  let neededBAndYSquares = 0;
  let neededGAndRSquares = 0;
  computePcts();

  if ( ScoreValueObj.eVsIValue == initialScoreValue ) {
    fourLtrTypeArr[0] = unknownFcnLetter;
  } else if ( ScoreValueObj.eVsIValue < initialScoreValue ) {
    fourLtrTypeArr[0] = leftFcnLetters[0];
  } else {
    fourLtrTypeArr[0] = rightFcnLetters[0];
  }

  if ( ScoreValueObj.jVsPValue == initialScoreValue ) {
    fourLtrTypeArr[3] = unknownFcnLetter;
    neededBAndYSquares = Math.round( totSquares / 2 );
  } else {
    neededBAndYSquares = Math.round( totSquares * pcts.jVsP );
    if ( ScoreValueObj.jVsPValue < initialScoreValue ) {
      fourLtrTypeArr[3] = leftFcnLetters[3];
    } else {
      fourLtrTypeArr[3] = rightFcnLetters[3];
    }
  }
  neededGAndRSquares = totSquares - neededBAndYSquares;

  if ( ScoreValueObj.nVsSValue == initialScoreValue ) {
    fourLtrTypeArr[1] = unknownFcnLetter;
    goalSquares.yellow = Math.round( neededBAndYSquares / 2 );
  } else {
    goalSquares.yellow = Math.round( neededBAndYSquares * pcts.nVsS );
    if ( ScoreValueObj.nVsSValue < initialScoreValue ) {
      fourLtrTypeArr[1] = leftFcnLetters[1];
    } else {
      fourLtrTypeArr[1] = rightFcnLetters[1];
    }
  }
  goalSquares.blue = neededBAndYSquares - goalSquares.yellow;

  if ( ScoreValueObj.fVsTValue == initialScoreValue ) {
    fourLtrTypeArr[2] = unknownFcnLetter;
    goalSquares.green = Math.round( neededGAndRSquares / 2 );
  } else {
    goalSquares.green = Math.round( neededGAndRSquares * pcts.fVsT );
    if ( ScoreValueObj.fVsTValue < initialScoreValue ) {
      fourLtrTypeArr[2] = leftFcnLetters[2];
    } else {
      fourLtrTypeArr[2] = rightFcnLetters[2];
    }
  }
  goalSquares.red = neededGAndRSquares - goalSquares.green;

  fourLtrTypeStr = fourLtrTypeArr.join('');

  if ( logLogicFlow ) {
    console.log( "totSquares = " + totSquares + "\n" +
        "fourLtrTypeArr = " + fourLtrTypeArr + " and fourLtrTypeStr = " + fourLtrTypeStr + "\n" +
     // "ScoreValueObj.eVsIValue = " + ScoreValueObj.eVsIValue + " and fourLtrTypeArr[0] = " + fourLtrTypeArr[0] + "\n" +
     // "ScoreValueObj.nVsSValue = " + ScoreValueObj.nVsSValue + " and fourLtrTypeArr[1] = " + fourLtrTypeArr[1] + "\n" +
     // "ScoreValueObj.fVsTValue = " + ScoreValueObj.fVsTValue + " and fourLtrTypeArr[2] = " + fourLtrTypeArr[2] + "\n" +
     // "ScoreValueObj.jVsPValue = " + ScoreValueObj.jVsPValue + " and fourLtrTypeArr[3] = " + fourLtrTypeArr[3] + "\n" +
        "neededBAndYSquares = " + neededBAndYSquares + " and neededGAndRSquares = " + neededGAndRSquares + "\n" );
    if ( goalSquares && goalSquares.toString() ) {
      console.log( goalSquares.toString() );
    }
    console.log( "setTypeAndGoal in ImageLib.ts: returning" );
  }
}

// setLineParms: set the position, color, drawing sequence, and length of lines in the image
function setLineParms(): void {
  // if ( logLogicFlow ) {
  console.log( "setLineParms: fourLtrTypeStr = " + fourLtrTypeStr );
  // console.log( "setLineParms: lineCoordsMap.get( gridSize.toString() ) = " + lineCoordsMap.get( gridSize.toString() ) );
  // console.log( "setLineParms: lineDataMap.get( fourLtrTypeStr ) = " + lineDataMap.get( fourLtrTypeStr ) );
  // }

  const lineCoordsStr = lineCoordsMap.get( gridSize.toString() );

  if ( lineCoordsStr ) {
    const lineCoordsArr = lineCoordsStr.split( "," );
    const talPos = parseInt( lineCoordsArr[0] );
    const rabPos = parseInt( lineCoordsArr[1] );
    lineParmsObj.talPos = talPos;
    lineParmsObj.rabPos = rabPos;
  } else {
    lineParmsObj.talPos = Math.round( gridSize / 3 );
    lineParmsObj.rabPos = Math.round( (2*gridSize) / 3 );
  }

  let lineDataStr = lineDataMap.get( fourLtrTypeStr );

  if ( ! lineDataStr ) {
    lineDataStr = lineDataMap.get( 'XXXX' );    // Default to no values known
  }

  const lineDataArr = lineDataStr.split( "" );
  lineParmsObj.topColor = lineDataArr[0];
  lineParmsObj.leftColor = lineDataArr[1];
  lineParmsObj.rightColor = lineDataArr[2];
  lineParmsObj.bottomColor = lineDataArr[3];

  if ( lineDataArr[5] == 'E' ) {
    lineParmsObj.drawSeq = drawSeqForE;
  } else {
    lineParmsObj.drawSeq = drawSeqForI;
  }

  lineParmsObj.domFcn = lineDataArr[7];
  lineParmsObj.auxFcn = lineDataArr[8];

  // if ( logLogicFlow ) {
  //   console.log( "setLineParms: lineParmsObj.domFcn = " + lineParmsObj.domFcn );
  //   console.log( "setLineParms: lineParmsObj.auxFcn = " + lineParmsObj.auxFcn );
  console.log( lineParmsObj.toString() );
  // }
}

// computePcts: Convert the score values to percentages
function computePcts(): void {
  pcts.eVsI = valueToPct( ScoreValueObj.eVsIValue );
  pcts.nVsS = valueToPct( ScoreValueObj.nVsSValue );
  pcts.fVsT = valueToPct( ScoreValueObj.fVsTValue );
  pcts.jVsP = valueToPct( ScoreValueObj.jVsPValue );
}
// valueToPct: convert a slider value [0 - 100] to a percentage [0.0 - 1.00]
function valueToPct( value: number ): number {
  const percent = value / 100;
  return ( percent );
}

// getRandomColor: return a random single character, either "B", "G", "R", or "Y"
function getRandomColor(): string {
  // if ( logLogicFlow ) {
  //   console.log( "getRandomColor() in ImageLib.ts: Top of getRandomColor" );
  // }

  let randomFloat = Math.random();
  let randomColorLetter = colorLetters[0];   // Blue - just a temporary default value

  if ( randomFloat <= pcts.jVsP ) {
    randomFloat = Math.random();
    if ( randomFloat <= pcts.nVsS ) {
      randomColorLetter = colorLetters[3];   // Yellow
    } else {
      randomColorLetter = colorLetters[0];   // Blue
    }
  } else {
    randomFloat = Math.random();
    if ( randomFloat <= pcts.fVsT ) {
      randomColorLetter = colorLetters[1];  // Green
    } else {
      randomColorLetter = colorLetters[2];  // Red
    }
  }

  // if ( logLogicFlow ) {
  //   console.log( "getRandomColor(): Return()ing randomColorLetter = " + randomColorLetter );
  // }
  return randomColorLetter;
}

// drawUnderlyingCanvas: paints the entire canvas black then fills the inner portion of it with white
function drawUnderlyingCanvas( context: CanvasRenderingContext2D ): void {
  const width = getCanvasWidth();
  const height = getCanvasHeight();

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  const innerSquareWidth = getCanvasWidth() - ( 2 * gridTopX );
  const innerSquareHeight = getCanvasHeight() - ( 2 * gridTopY );

  // Paint the inner square, where the actual image will be, white
  context.fillStyle = "rgb(255, 255, 255)";
  context.fillRect(gridTopY, gridTopY, innerSquareWidth, innerSquareHeight);
}

// lineDataMap: holds line colors and drawing sequence for all 81 types
// Key:
//   lineDataStr[0] = lineParmsObj.topColor: colorLetter for top line
//   lineDataStr[1] = lineParmsObj.leftColor: colorLetter for left line
//   lineDataStr[2] = lineParmsObj.rightColor: colorLetter for right line
//   lineDataStr[3] = lineParmsObj.bottomColor: colorLetter for bottom line
//   lineDataStr[4] = "-": to help with readability
//   lineDataStr[5] = lineParmsObj.drawSeq: "E" for drawSeqForE or "I" for drawSeqForI
//   lineDataStr[6] = "-": to help with readability
//   lineDataStr[7] = lineParmsObj.domFcn: Dominant function for this type, with "X" -> unknown
//   lineDataStr[8] = lineParmsObj.auxFcn: Auxiliary function for this type, with "X" -> unknown
// For details, see the "81 Types" sheet in docs/03-Composition-Jungian.ods
const lineDataMap = new Map();
lineDataMap.set( 'XXXX', "GBYR-E-XX" );  // No values known

lineDataMap.set( 'EXXX', "GBYR-E-XX" );  // One value known
lineDataMap.set( 'IXXX', "GBYR-I-XX" );  // One value known
lineDataMap.set( 'XNXX', "GBBR-E-XX" );  // One value known
lineDataMap.set( 'XSXX', "GYYR-E-XX" );  // One value known
lineDataMap.set( 'XXFX', "RBYR-E-XX" );  // One value known
lineDataMap.set( 'XXTX', "GBYG-E-XX" );  // One value known
lineDataMap.set( 'XXXJ', "GBYR-E-XX" );  // One value known
lineDataMap.set( 'XXXP', "GBYR-E-XX" );  // One value known

lineDataMap.set( 'ENXX', "GBBR-E-NX" );  // Two values known
lineDataMap.set( 'ESXX', "GYYR-E-SX" );  // Two values known
lineDataMap.set( 'INXX', "BGRB-I-NX" );  // Two values known
lineDataMap.set( 'ISXX', "YGRY-I-SX" );  // Two values known

lineDataMap.set( 'EXFX', "RBYR-E-FX" );  // Two values known
lineDataMap.set( 'EXTX', "GBYG-E-TX" );  // Two values known
lineDataMap.set( 'IXFX', "BRRY-I-FX" );  // Two values known
lineDataMap.set( 'IXTX', "BGGY-I-TX" );  // Two values known

lineDataMap.set( 'EXXJ', "GBYR-E-XX" );  // Two values known
lineDataMap.set( 'EXXP', "GBYR-E-XX" );  // Two values known
lineDataMap.set( 'IXXJ', "GBYR-I-XX" );  // Two values known
lineDataMap.set( 'IXXP', "GBYR-I-XX" );  // Two values known

lineDataMap.set( 'XNFX', "RBBR-E-NF" );  // Two values known - Assuming E and P
lineDataMap.set( 'XNTX', "GBBG-E-NT" );  // Two values known - Assuming E and P
lineDataMap.set( 'XSFX', "RYYR-E-SF" );  // Two values known - Assuming E and P
lineDataMap.set( 'XSTX', "GYYG-E-ST" );  // Two values known - Assuming E and P

lineDataMap.set( 'XNXJ', "BGRB-E-XN" );  // Two values known - Assuming E
lineDataMap.set( 'XNXP', "GBBR-E-NX" );  // Two values known - Assuming E
lineDataMap.set( 'XSXJ', "YGRY-E-XS" );  // Two values known - Assuming E
lineDataMap.set( 'XSXP', "GYYR-E-SX" );  // Two values known - Assuming E

lineDataMap.set( 'XXFJ', "BRRY-E-FX" );  // Two values known - Assuming E
lineDataMap.set( 'XXFP', "RBYR-E-XF" );  // Two values known - Assuming E
lineDataMap.set( 'XXTJ', "BGGY-E-TX" );  // Two values known - Assuming E
lineDataMap.set( 'XXTP', "GBYG-E-XT" );  // Two values known - Assuming E

lineDataMap.set( 'EXFJ', "BRRY-E-FX" );  // Three values known
lineDataMap.set( 'EXFP', "RBYR-E-XF" );  // Three values known
lineDataMap.set( 'EXTJ', "BGGY-E-TX" );  // Three values known
lineDataMap.set( 'EXTP', "GBYG-E-XT" );  // Three values known
lineDataMap.set( 'IXFJ', "BRRY-I-XF" );  // Three values known
lineDataMap.set( 'IXFP', "RBYR-I-FX" );  // Three values known
lineDataMap.set( 'IXTJ', "BGGY-I-XT" );  // Three values known
lineDataMap.set( 'IXTP', "GBYG-I-TX" );  // Three values known

lineDataMap.set( 'ENXJ', "BGRB-E-XN" );  // Three values known
lineDataMap.set( 'ENXP', "GBBR-E-NX" );  // Three values known
lineDataMap.set( 'ESXJ', "YGRY-E-XS" );  // Three values known
lineDataMap.set( 'ESXP', "GYYR-E-SX" );  // Three values known
lineDataMap.set( 'INXJ', "BGRB-I-NX" );  // Three values known
lineDataMap.set( 'INXP', "GBBR-I-XN" );  // Three values known
lineDataMap.set( 'ISXJ', "YGRY-I-SX" );  // Three values known
lineDataMap.set( 'ISXP', "GYYR-I-XS" );  // Three values known

lineDataMap.set( 'ENFX', "RBBR-E-NF" );  // Three values known - Assuming P
lineDataMap.set( 'ENTX', "GBBG-E-NT" );  // Three values known - Assuming P
lineDataMap.set( 'ESFX', "RYYR-E-SF" );  // Three values known - Assuming P
lineDataMap.set( 'ESTX', "GYYG-E-ST" );  // Three values known - Assuming P
lineDataMap.set( 'INFX', "RBBR-I-FN" );  // Three values known - Assuming P
lineDataMap.set( 'INTX', "GBBG-I-TN" );  // Three values known - Assuming P
lineDataMap.set( 'ISFX', "RYYR-I-FS" );  // Three values known - Assuming P
lineDataMap.set( 'ISTX', "GYYG-I-TS" );  // Three values known - Assuming P

lineDataMap.set( 'XNFJ', "BRRB-E-FN" );  // Three values known - Assuming E
lineDataMap.set( 'XNFP', "RBBR-E-NF" );  // Three values known - Assuming E
lineDataMap.set( 'XNTJ', "BGGB-E-TN" );  // Three values known - Assuming E
lineDataMap.set( 'XNTP', "GBBG-E-NT" );  // Three values known - Assuming E
lineDataMap.set( 'XSFJ', "YRRY-E-FS" );  // Three values known - Assuming E
lineDataMap.set( 'XSFP', "RYYR-E-SF" );  // Three values known - Assuming E
lineDataMap.set( 'XSTJ', "YGGY-E-TS" );  // Three values known - Assuming E
lineDataMap.set( 'XSTP', "GYYG-E-ST" );  // Three values known - Assuming E

lineDataMap.set( 'ENFJ', "BRRB-E-FN" );  // All four values known
lineDataMap.set( 'ENFP', "RBBR-E-NF" );  // All four values known
lineDataMap.set( 'ENTJ', "BGGB-E-TN" );  // All four values known
lineDataMap.set( 'ENTP', "GBBG-E-NT" );  // All four values known
lineDataMap.set( 'ESFJ', "YRRY-E-FS" );  // All four values known
lineDataMap.set( 'ESFP', "RYYR-E-SF" );  // All four values known
lineDataMap.set( 'ESTJ', "YGGY-E-TS" );  // All four values known
lineDataMap.set( 'ESTP', "GYYG-E-ST" );  // All four values known

lineDataMap.set( 'INFJ', "BRRB-I-NF" );  // All four values known
lineDataMap.set( 'INFP', "RBBR-I-FN" );  // All four values known
lineDataMap.set( 'INTJ', "BGGB-I-NT" );  // All four values known
lineDataMap.set( 'INTP', "GBBG-I-TN" );  // All four values known
lineDataMap.set( 'ISFJ', "YRRY-I-SF" );  // All four values known
lineDataMap.set( 'ISFP', "RYYR-I-FS" );  // All four values known
lineDataMap.set( 'ISTJ', "YGGY-I-ST" );  // All four values known
lineDataMap.set( 'ISTP', "GYYG-I-TS" );  // All four values known

// lineCoordsMap: defines the line coordinates for each of the supported grid sizes
// Fields separated by a comma:
//   talPos: positon of lines at the Top And on the Left side - 0-based
//   rabPos: positon of lines at the Bottom And on the Right side - 0-based
// For details, see the "Line Positions" sheet in docs/03-Composition-Jungian.ods
//   IMPORTANT: LINE POSITIONS IN THE SPREADSHEET ARE 1-BASED, BUT THESE VALUES ARE 0-BASED!!
const lineCoordsMap = new Map();
lineCoordsMap.set( '1', "-1,-1" );  // This grid size is too small to have lines
lineCoordsMap.set( '3', "1,-1" );   // This grid size has one line at most
lineCoordsMap.set( '5', "1,3" );    // Smallest grid size that uses lines
lineCoordsMap.set( '7', "1,5" );
lineCoordsMap.set( '9', "2,6" );

lineCoordsMap.set( '11', "2,8" );
lineCoordsMap.set( '13', "3,9" );
lineCoordsMap.set( '15', "3,11" );
lineCoordsMap.set( '17', "4,12" );
lineCoordsMap.set( '19', "5,13" );  // Ye olde standard grid size
lineCoordsMap.set( '21', "5,15" );
lineCoordsMap.set( '23', "6,16" );
lineCoordsMap.set( '25', "6,18" );
lineCoordsMap.set( '27', "7,19" );
lineCoordsMap.set( '29', "7,21" );

lineCoordsMap.set( '31', "8,22" );
lineCoordsMap.set( '33', "8,24" );
lineCoordsMap.set( '35', "9,25" );
lineCoordsMap.set( '37', "9,27" );
lineCoordsMap.set( '39', "10,28" );
lineCoordsMap.set( '41', "10,30" );
lineCoordsMap.set( '43', "11,31" );
lineCoordsMap.set( '45', "11,33" );
lineCoordsMap.set( '47', "12,34" );
lineCoordsMap.set( '49', "12,36" );

