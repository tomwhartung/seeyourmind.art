//
// Refine.tsx: code for the Refine option for the Jungian quiz type
// ================================================================
//
import '../App.css'

import { ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import { MDBRadio } from 'mdb-react-ui-kit';

import Canvas from '../lib/CanvasLib.tsx';
import * as ImageLib from '../lib/jungian/ImageLib.ts';
import * as LocalStorageLib from '../lib/jungian/LocalStorageLib.ts';
import SquareSizeSlider from '../lib/jungian/SquareSizeSliderLib.tsx';

// NOTE: Setting logLogicFlow to true for one page seems to in effect set it for all pages
// ImageLib.setLogLogicFlow( true );   // un-comment when trying to track down issues
ImageLib.setLogLogicFlow( false );   // un-comment when everything's ok

// draw: draw the grid of blue, green, red, and yellow squares defined in ImageLib.imageStr
function draw( context: CanvasRenderingContext2D ): void {
  ImageLib.drawImageStr( context );
}

// getSquareCoords: use (pixelX, pixelY) to calculate (squareX, squareY)
//   To support more efficient code, this function includes the corners with the borders
//   If at some point we want to identify the corners, here is how to do it:
//     (squareX < 0 && squareY < 0): upper-left corner
//     (squareX < 0 && squareY >= ImageLib.gridSize): lower-left corner
//     (squareX >= ImageLib.gridSize && squareY < 0): upper-right corner
//     (squareX >= ImageLib.gridSize && squareY >= ImageLib.gridSize): lower-right corner
function getSquareCoords( pixelX: number, pixelY: number ): number[] {
  let squareX = -1;
  let squareY = -1;
  squareX = Math.floor( ( pixelX - ImageLib.gridTopX ) / ImageLib.squareSize );
  squareY = Math.floor( ( pixelY - ImageLib.gridTopY ) / ImageLib.squareSize );
  if ( ImageLib.logLogicFlow ) {
    console.log( "getSquareCoords: pixel coords (" + pixelX.toString() + ", " + pixelY.toString() + ")" );
    console.log( "correspond to square coords (" + squareX.toString() + ", " + squareY.toString() + ")" );
    if ( squareX < 0 ) {
      console.log( "You clicked on the left-side border, not on a square" );
    } else if ( squareX >= ImageLib.gridSize ) {
      console.log( "You clicked on the right-side border, not on a square" );
    } else if ( squareY < 0 ) {
      console.log( "You clicked on the top border, not on a square" );
    } else if ( squareY >= ImageLib.gridSize ) {
      console.log( "You clicked on the bottom border, not on a square" );
    } else {
      console.log( "You clicked on the square at (" + squareX.toString() + ", " + squareY.toString() + ")" );
    }
  }
  return( [squareX, squareY] );
}

// changeSquareAt: change the color of the square at location (squareX, squareY)
function changeSquareAt( squareX: number, squareY: number, colorIndex: number ): string {
  const charArrIndex = squareX + (squareY * ImageLib.gridSize);
  const colorLtrPicked = ImageLib.colorLetters[colorIndex];

  // if ( ImageLib.logLogicFlow ) {
  //   console.log( "changeSquareAt: charArrIndex = " + charArrIndex );
  //   console.log( "changeSquareAt: colorIndex = " + colorIndex );
  //   console.log( "changeSquareAt: colorLtrPicked = " + colorLtrPicked );
  // }

  const newImageCharArr = ImageLib.imageStr.split( "" );
  newImageCharArr.splice( charArrIndex, 1, colorLtrPicked );
  const newImageStr = newImageCharArr.join( '' );
  return newImageStr;
}

// I like to bundle all the props passed to a component in an interface
interface RefinePropsIFace {
  onRadioButtonClick: (event: ChangeEvent<HTMLInputElement>) => void;
  onImageClick: (event: MouseEvent<HTMLElement>) => void;
  onSquareSizeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// FixedSizeImageAndCards: function component to display a jungian image
function FixedSizeImageAndCards( props: RefinePropsIFace ) {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageAndCards() in Refine.tsx" );
  }

  const width = ImageLib.getCanvasWidth();
  const height = ImageLib.getCanvasHeight();

  // Construct the markup for the Color Picker
  const colorPickerCols = [];
  for ( let colorNum = 0; colorNum < ImageLib.colorLetters.length; colorNum++ ) {
    let defaultChecked = false;
    if ( colorNum === 0 ) {
      defaultChecked = true;
    } else {
      defaultChecked = false;
    }
    colorPickerCols.push(
      <div key={colorNum} className="col-sm-3 align-items-center">
        <MDBRadio
          name="colorPicker"
          id={ImageLib.colorNames[colorNum]}
          label={ImageLib.colorNames[colorNum]}
          value={colorNum}
          onChange={props.onRadioButtonClick}
          defaultChecked={defaultChecked}
        />
      </div>
    );
  }

  const squareSizeLabel = "Square Size: " + ImageLib.squareSize + " Pixels";

  if ( ImageLib.logLogicFlow ) {
    console.log( "return()ing from FixedSizeImageAndCards() in Refine.tsx" );
  }

  // NOTE: DO NOT PUT THIS Canvas IN A CARD!  Doing so makes it resizable and
  //   breaks the code that calculates which square the user clicked on!!
  //
  return (
    <>
      <div className="row d-flex mt-1 align-items-center">
        <div className="col-sm-8 card align-items-center">
          <div className="row d-flex mt-1 align-items-center">
            <h5>Color Picker</h5>
          </div>
          <div className="row d-flex mt-1">
            {colorPickerCols}
          </div>
        </div>
        <div className="col-sm-4 card align-items-center">
          <SquareSizeSlider
            squareSizeLabel={squareSizeLabel}
            onSquareSizeChange={props.onSquareSizeChange}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12 align-items-center jungian-canvas">
          <Canvas
            draw={draw}
            onClick={props.onImageClick}
            width={width}
            height={height}
          />
        </div>
      </div>
      <div className="row d-flex mt-1">
        <div className="col-sm-3 card align-items-center">
          {ImageLib.scoreValueNames[0]}: {ImageLib.ScoreValueObj.eVsIValue}
        </div>
        <div className="col-sm-3 card align-items-center">
          {ImageLib.scoreValueNames[1]}: {ImageLib.ScoreValueObj.nVsSValue}
        </div>
        <div className="col-sm-3 card align-items-center">
          {ImageLib.scoreValueNames[2]}: {ImageLib.ScoreValueObj.fVsTValue}
        </div>
        <div className="col-sm-3 card align-items-center">
          {ImageLib.scoreValueNames[3]}: {ImageLib.ScoreValueObj.jVsPValue}
        </div>
      </div>
      <div className="row d-flex mt-1">
        <div className="col-sm-12 card align-items-center">
          Grid Size: {ImageLib.gridSize} Squares per Side
        </div>
      </div>
    </>
  );
}

// FixedContainer: function component containing an MDB container
function FixedContainer() {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of FixedContainer() in Refine.tsx" );
  }

  const defaultStatusMsg = "Click on a square to change its color to Blue.";
  const defaultColorIndex = 0;

  const [currentImageStr, setCurrentImageStr] = useState( ImageLib.invalidImageStr );
  const [currentStatusMsg, setCurrentStatusMsg] = useState( defaultStatusMsg );
  const [currentColorIndex, setCurrentColorIndex] = useState( defaultColorIndex );
  const [currentSquareSize, setCurrentSquareSize] = useState( ImageLib.invalidSquareSize );

  // handleSquareSizeChange: code to run when the user moves the square size slider
  function handleSquareSizeChange( event: ChangeEvent<HTMLInputElement> ): void {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleSquareSizeChange in Refine.tsx" );
    //   // console.log( "handleSquareSizeChange: event.target.value = " + event.target.value );
    // }
    const newSquareSize = parseInt( event.target.value );
    setCurrentSquareSize( newSquareSize );
    ImageLib.setSquareSize( newSquareSize );
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleSquareSizeChange: currentSquareSize = " + currentSquareSize );
      // console.log( "Exiting handleSquareSizeChange in Refine.tsx" );
    }
  }

  // handleColorPickerChange: Change the new color used when user clicks on a square
  function handleColorPickerChange( event: ChangeEvent<HTMLInputElement> ): void {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleColorPickerChange in Refine.tsx" );
    //   console.log( "handleColorPickerChange: event.currentTarget.value = " + event.currentTarget.value );
    // }
    const colorIndex = parseInt( event.currentTarget.value );
    const colorPicked = ImageLib.colorNames[ colorIndex ];
    setCurrentColorIndex( colorIndex );
    setCurrentStatusMsg( "Click on a square to change its color to " + colorPicked );
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleColorPickerChange in Refine.tsx: colorPicked = " + colorPicked );
      // console.log( "handleColorPickerChange currentStatusMsg = " + currentStatusMsg );
      // console.log( "Exiting handleColorPickerChange in Refine.tsx" );
    }
  }

  // handleImageClick: Change the color of the square the user clicks on
  function handleImageClick(event: React.MouseEvent<HTMLElement>): void {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleImageClick() in Refine.tsx" );
    // }
    if ( ImageLib.imageStr === ImageLib.initialImageStr ||
         ImageLib.imageStr === ImageLib.invalidImageStr   ) {
      return;
    }
    // getBoundingClientRect: get coords of top-left of image (the target element)
    // rect.left & rect.top: coords of top-left of image (the target element)
    // event.clientX & event.clientY: coords of click relative to top-left of screen
    // pixelX & pixelY: coords of click relative to top-left of image (screen coord minus rect coord)
    // getSquareCoords() and squareX & squareY: see comments in getSquareCoords() function header
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    if ( ImageLib.logLogicFlow ) {
      const pixelCoords = "(" + pixelX.toString() + ", " + pixelY.toString() + ")";
      console.log( "handleImageClick in Refine: pixelCoords = " + pixelCoords);
    }
    const [squareX, squareY] = getSquareCoords( pixelX, pixelY );  // see comments in function header
    const squareCoords = "(" + squareX.toString() + ", " + squareY.toString() + ")";
    if ( 0 <= squareX && squareX < ImageLib.gridSize &&
         0 <= squareY && squareY < ImageLib.gridSize    ) {
      const newImageStr = changeSquareAt( squareX, squareY, currentColorIndex );
      setCurrentImageStr( newImageStr );
      const colorPicked = ImageLib.colorNames[ currentColorIndex ];
      setCurrentStatusMsg( "Changed the color of the square at " + squareCoords + " to " + colorPicked );
    }
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleImageClick in Refine.tsx: squareCoords = " + squareCoords );
      // console.log( "handleImageClick in Refine.tsx: exiting function" );
    }
  }

  // First useEffect: runs once when component is mounted - except when we are in development
  // - Fetches the scoreValueArr from local storage and sets the values in ImageLib
  // - Fetches the imageStr from local storage and sets it in a state variable
  //   - If imageStr is empty, set the current status message accordingly
  useEffect( () => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of First useEffect in Refine.tsx" );
    // }
    ImageLib.setScoreValueObj( LocalStorageLib.getStoredScoreValueArr() );
    ImageLib.setGridSize( LocalStorageLib.getStoredGridSize() );
    const storedSquareSize = LocalStorageLib.getStoredSquareSize();
    const storedImageStr = LocalStorageLib.getStoredImageStr();
    ImageLib.setSquareSize( storedSquareSize );
    ImageLib.setImageStr( storedImageStr );
    setCurrentSquareSize( storedSquareSize );
    setCurrentImageStr( storedImageStr );
    if ( storedImageStr === ImageLib.initialImageStr ||
         storedImageStr === ImageLib.invalidImageStr   ) {
      setCurrentStatusMsg( "Please use the Create option to Create an image before trying to Refine it." );
    }
    if ( ImageLib.logLogicFlow ) {
      console.log( "First useEffect in Refine.tsx: \n" + ImageLib.ScoreValueObj.toString() );
      console.log( "First useEffect: set ScoreValueObj, gridSize, squareSize, and imageStr in ImageLib" );
      console.log( "First useEffect: also set the squareSize and imageStr in their state variables" );
      // console.log( "Exiting First useEffect in Refine.tsx" );
    }
  }, [] );

  // useEffect for currentImageStr: runs when component is mounted AND when the currentImageStr changes
  //   Stores the new, refined image string in local storage
  useEffect( () => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of useEffect for currentImageStr in Refine.tsx" );
    // }
    const success = LocalStorageLib.storeImageStr( currentImageStr );
    // ImageLib.setImageStr( currentImageStr );    // seems like this should be here, but apparently not
    if ( ImageLib.logLogicFlow ) {
      const imageStrLength = currentImageStr.length;
      console.log( "useEffect for currentImageStr in Refine.tsx: currentImageStr.length = " + imageStrLength );
      if ( success ) {
        console.log( "useEffect for currentImageStr: stored currentImageStr as imageStr ok" );
      } else {
        console.log( "useEffect for currentImageStr: DID NOT STORE currentImageStr as imageStr" );
      }
      // console.log( "Exiting useEffect for currentImageStr in Refine.tsx" );
    }
  }, [currentImageStr] );

  // useEffect for currentSquareSize: runs when component is mounted AND when the user changes the squareSize
  //   Stores the new, refined squareSize in local storage
  useEffect( () => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of useEffect for currentSquareSize in Refine.tsx" );
    // }
    const success = LocalStorageLib.storeSquareSize( currentSquareSize );
    if ( ImageLib.logLogicFlow ) {
      console.log( "useEffect for currentSquareSize: currentSquareSize = " + currentSquareSize );
      if ( success ) {
        console.log( "useEffect for currentSquareSize: stored currentSquareSize as squareSize ok" );
      } else {
        console.log( "useEffect for currentSquareSize: DID NOT STORE currentSquareSize as squareSize" );
      }
      // console.log( "Exiting useEffect for currentSquareSize in Refine.tsx" );
    }
  }, [currentSquareSize] );

  ImageLib.setImageStr( currentImageStr );    // Do not remove!  This needs to be here!!

  const domClassName = ImageLib.colorClassNameMap.get( ImageLib.domFcnLtr );
  const auxClassName = ImageLib.colorClassNameMap.get( ImageLib.auxFcnLtr );

  if ( ImageLib.logLogicFlow ) {
    console.log( "return()ing from FixedContainer() in Refine.tsx" );
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-3">
          <h1>{ImageLib.fourLtrTypeStr}</h1>
        </div>
        <div className="col-9">
          <p><strong>Dominant</strong> Jungian function is&nbsp;
             <strong className={domClassName}>{ImageLib.domPhrase}</strong><br />
             <strong>Auxiliary</strong> Jungian function is&nbsp;
             <strong className={auxClassName}>{ImageLib.auxPhrase}</strong>
         </p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-12">
          <h5>{currentStatusMsg}</h5>
        </div>
      </div>
      <div className="row">
        <FixedSizeImageAndCards
          onSquareSizeChange={handleSquareSizeChange}
          onRadioButtonClick={handleColorPickerChange}
          onImageClick={handleImageClick}
        />
      </div>
    </div>
  )
}

function Refine() {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of Refine() in Refine.tsx: return()ing from Refine()" );
  }

  return (
    <div id="refine">
      <FixedContainer />
    </div>
  )
}

export default Refine
