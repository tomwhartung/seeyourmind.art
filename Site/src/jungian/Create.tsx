//
// Create.tsx: code for the Create option for the Jungian quiz type
// ================================================================
//
import '../App.css'
import { ChangeEvent, useState, useEffect } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import Canvas from '../lib/CanvasLib.tsx';
import * as ImageLib from '../lib/jungian/ImageLib.ts';
import * as LocalStorageLib from '../lib/jungian/LocalStorageLib.ts';
import ScoreSliderCard from '../lib/jungian/ScoreSliderLib.tsx';
import SquareSizeSlider from '../lib/jungian/SquareSizeSliderLib.tsx';

// NOTE: Setting logLogicFlow to true for one page seems to in effect set it for all pages
ImageLib.setLogLogicFlow( false );    // un-comment when everything's ok
// ImageLib.setLogLogicFlow( true );     // un-comment when trying to track down issues

let drawFreshImage = false;

// draw: Add a random "groja-esque" grid of blue, green, red, and yellow squares
function draw( context: CanvasRenderingContext2D ): void {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of draw() in Create.tsx" );
  }

  if ( drawFreshImage ) {
    if ( ImageLib.logLogicFlow ) {
      console.log( "draw(): calling ImageLib.createFreshImageStr to create a Fresh Image" );
    }
    const freshImageStr = ImageLib.createFreshImageStr();
    ImageLib.setImageStr( freshImageStr );
    LocalStorageLib.storeImageStr( freshImageStr );
    drawFreshImage = false;
    ImageLib.drawImageStr( context );
    if ( ImageLib.logLogicFlow ) {
      console.log( "draw(): set drawFreshImage = false and ImageLib.imageStr = freshImageStr" );
      console.log( "draw(): ImageLib.imageStr.length = " + ImageLib.imageStr.length );
    }
  } else if ( ImageLib.imageStr === ImageLib.invalidImageStr ) {
    if ( ImageLib.logLogicFlow ) {
      console.log( "draw(): drawFreshImage is false and ImageLib.imageStr is invalid, doing nothing" );
    }
  } else {
    ImageLib.drawImageStr( context );
    if ( ImageLib.logLogicFlow ) {
      console.log( "draw(): drew the ImageLib.imageStr" );
    }
  }
  if ( ImageLib.logLogicFlow ) {
    console.log( "Exiting draw() in Create.tsx" );
  }
}

// FixedSizeImageAndCards: function component to display a jungian image
function FixedSizeImageAndCards( props: ImageLib.ScoreValueIFace ) {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of FixedSizeImageAndCards() in Create.tsx" );
  }

  const width = ImageLib.getCanvasWidth();
  const height = ImageLib.getCanvasHeight();

  if ( ImageLib.logLogicFlow ) {
    console.log( "return()ing from FixedSizeImageAndCards() in Create.tsx" );
  }

  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-12 align-items-center jungian-canvas">
          <Canvas
            draw={draw}
            width={width}
            height={height}
          />
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-3 card align-items-center">
          {ImageLib.scoreValueNames[0]}: {props.eVsIValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.scoreValueNames[1]}: {props.nVsSValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.scoreValueNames[2]}: {props.fVsTValue}
        </div>
        <div className="col-md-3 card align-items-center">
          {ImageLib.scoreValueNames[3]}: {props.jVsPValue}
        </div>
      </div>
    </>
  );
}

// FixedContainer: function component containing an MDB container
function FixedContainer() {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of FixedContainer() in Create.tsx" );
  }

  // Initializing these state variables with invalid values ensures we do not overwrite
  // legitimage values in local storage.  For details, see README-React_notes.md .
  const [currentScoreValueArr, setCurrentScoreValueArr] = useState( ImageLib.invalidScoreValueArr );
  const [currentSquareSize, setCurrentSquareSize] = useState( ImageLib.invalidSquareSize );
  const [currentGridSize, setCurrentGridSize] = useState( ImageLib.invalidGridSize );

  // handleScoreValueChange: code to run when the user moves a score slider
  //   Update currentScoreValueArr to the new slider value and possibly draw a new image
  function handleScoreValueChange( event: ChangeEvent, col: number ): void {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleScoreValueChange in FixedContainer in Create.tsx" );
    // }
    const scoreValue = (event.target as HTMLInputElement).value;
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleScoreValueChange: slider num " + col.toString() + " = " + scoreValue.toString() );
    }
    const nextScoreValueArr = currentScoreValueArr.slice();
    nextScoreValueArr[col] = parseInt( scoreValue );
    setCurrentScoreValueArr( nextScoreValueArr );
    ImageLib.setTypeDomAndAux( nextScoreValueArr );
    drawFreshImage = true;           // When the value for a slider changes, we need to draw a new image
    if ( ImageLib.logLogicFlow ) {
      if ( 0 < col ) {
        console.log( "handleScoreValueChange: set drawFreshImage = true" );
      }
      // console.log( "Exiting handleScoreValueChange in Create.tsx" );
    }
  }

  // handleGridSizeChange: code to run when user moves the grid size slider
  function handleGridSizeChange( event: ChangeEvent<HTMLInputElement> ): void {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleGridSizeChange in Create.tsx" );
    //   // console.log( "handleGridSizeChange: event.target.value = " + event.target.value );
    // }
    const newGridSize = parseInt( event.target.value );
    setCurrentGridSize( newGridSize );
    ImageLib.setGridSize( newGridSize );
    drawFreshImage = true;
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleGridSizeChange: currentGridSize = " + currentGridSize );
      // console.log( "Exiting handleGridSizeChange in Create.tsx" );
    }
  }

  // handleSquareSizeChange: code to run when the user moves the square size slider
  function handleSquareSizeChange( event: ChangeEvent<HTMLInputElement> ): void {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of handleSquareSizeChange in Create.tsx" );
    //   // console.log( "handleSquareSizeChange: event.target.value = " + event.target.value );
    // }
    const newSquareSize = parseInt( event.target.value );
    setCurrentSquareSize( newSquareSize );
    ImageLib.setSquareSize( newSquareSize );
    if ( ImageLib.logLogicFlow ) {
      console.log( "handleSquareSizeChange: currentSquareSize = " + currentSquareSize );
      // console.log( "Exiting handleSquareSizeChange in Create.tsx" );
    }
  }

  // First useEffect: runs once when component is mounted - except when we are in development
  //   Fetches scoreValues, imageStr, squareSize, and gridSize from local storage
  //     If they're not found, the local storage functions initialize them
  //   Sets the currentScoreValueArr state variable to values from local storage
  useEffect( () => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of first useEffect in FixedContainer in Create.tsx" );
    // }
    const storedScoreValueArr = LocalStorageLib.getStoredScoreValueArr();
    const storedSquareSize = LocalStorageLib.getStoredSquareSize();
    const storedGridSize = LocalStorageLib.getStoredGridSize();
    setCurrentScoreValueArr( storedScoreValueArr );
    setCurrentSquareSize( storedSquareSize );
    setCurrentGridSize( storedGridSize );
    ImageLib.setScoreValueObj( storedScoreValueArr );
    ImageLib.setTypeDomAndAux( storedScoreValueArr );
    ImageLib.setSquareSize( LocalStorageLib.getStoredSquareSize() );
    ImageLib.setGridSize( storedGridSize );
    const storedImageStr = LocalStorageLib.getStoredImageStr();
    if ( storedImageStr === ImageLib.initialImageStr ||
         storedImageStr === ImageLib.invalidImageStr   ) {
      drawFreshImage = true;
    } else {
      ImageLib.setImageStr( storedImageStr );
    }
    if ( ImageLib.logLogicFlow ) {
      console.log( "First useEffect in Create.tsx:\n" + ImageLib.ScoreValueObj.toString() );
      console.log( "First useEffect: set currentScoreValueArr and ImageLib.ScoreValueObj" );
      console.log( "First useEffect: set currentSquareSize and ImageLib.squareSize" );
      console.log( "First useEffect: set currentGridSize and ImageLib.gridSize" );
      console.log( "First useEffect: storedImageStr.length = " + storedImageStr.length );
      if ( storedImageStr === ImageLib.initialImageStr ) {
        console.log( "First useEffect: DID NOT SET ImageLib.imageStr because it matches ImageLib.initialImageStr" );
      } else if ( storedImageStr === ImageLib.invalidImageStr ) {
        console.log( "First useEffect: DID NOT SET ImageLib.imageStr because it matches ImageLib.invalidImageStr" );
      } else {
        console.log( "First useEffect: set the ImageLib.imageStr to the value from local storage" );
      }
      console.log( "First useEffect: drawFreshImage = " + drawFreshImage );
    }
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Exiting first useEffect in FixedContainer in Create.tsx" );
    // }
    // NOTE! DO NOT DELETE THE EMPTY DEPENDENCY ARRAY!!  DOING SO CAUSES AN INFINITE LOOP!!!
  }, [] ); // empty dependency array -> this runs just once when the component is mounted

  // useEffect for currentScoreValueArr: runs when component is mounted AND when the user moves a score value slider
  //   Stores the new slider values and image string in local storage
  useEffect( () => {
    if ( ImageLib.logLogicFlow ) {
      console.log( "Top of useEffect for currentScoreValueArr in FixedContainer in Create.tsx" );
      // console.log( "useEffect for currentScoreValueArr: currentScoreValueArr: " + currentScoreValueArr.toString() );
    }
    const storedScoreValueArrOk = LocalStorageLib.storeScoreValueArr( currentScoreValueArr );
    let storedImageStrOk = false;
    if ( storedScoreValueArrOk ) {
      storedImageStrOk = LocalStorageLib.storeImageStr( ImageLib.imageStr );
      if ( ! storedImageStrOk ) {
        drawFreshImage = true;   // If it wasn't stored, it's too short and we need a new imageStr
      }
    }
    if ( ImageLib.logLogicFlow ) {
      if ( storedScoreValueArrOk ) {
        console.log( "useEffect for currentScoreValueArr: stored currentScoreValueArr as scoreValueArr ok" );
        if ( storedImageStrOk ) {
          console.log( "useEffect for currentScoreValueArr: stored ImageLib.imageStr as imageStr ok" );
        } else {
          console.log( "useEffect for currentScoreValueArr: DID NOT STORE ImageLib.imageStr" );
          console.log( "useEffect for currentScoreValueArr: set drawFreshImage = true" );
        }
      } else {
        console.log( "useEffect for currentScoreValueArr: DID NOT STORE currentScoreValueArr" );
        console.log( "useEffect for currentScoreValueArr: DID NOT TRY TO STORE ImageLib.imageStr" );
      }
      console.log( "Exiting useEffect for currentScoreValueArr with drawFreshImage = " + drawFreshImage );
    }
  }, [currentScoreValueArr] );

  // useEffect for currentGridSize: runs when component is mounted AND when the user changes the gridSize
  //   Stores the new, updated gridSize in local storage
  useEffect( () => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of useEffect for currentGridSize in Create.tsx" );
    // }
    const success = LocalStorageLib.storeGridSize( currentGridSize );
    if ( ImageLib.logLogicFlow ) {
      console.log( "useEffect for currentGridSize in Create.tsx: currentGridSize = " + currentGridSize );
      if ( success ) {
        console.log( "useEffect for currentGridSize: stored currentGridSize as gridSize ok" );
      } else {
        console.log( "useEffect for currentGridSize: DID NOT STORE currentGridSize as gridSize" );
      }
      // console.log( "Exiting useEffect for currentGridSize in Create.tsx" );
    }
  }, [currentGridSize] );

  // useEffect for currentSquareSize: runs when component is mounted AND when the user changes the squareSize
  //   Stores the new, updated squareSize in local storage
  useEffect( () => {
    // if ( ImageLib.logLogicFlow ) {
    //   console.log( "Top of useEffect for currentSquareSize in Create.tsx" );
    // }
    const success = LocalStorageLib.storeSquareSize( currentSquareSize );
    if ( ImageLib.logLogicFlow ) {
      console.log( "useEffect for currentSquareSize in Create.tsx: currentSquareSize = " + currentSquareSize );
      if ( success ) {
        console.log( "useEffect for currentSquareSize: stored currentSquareSize as squareSize ok" );
      } else {
        console.log( "useEffect for currentSquareSize: DID NOT STORE currentSquareSize as squareSize" );
      }
      // console.log( "Exiting useEffect for currentSquareSize in Create.tsx" );
    }
  }, [currentSquareSize] );

  ImageLib.setScoreValueObj( currentScoreValueArr );

  // Construct markup for the ScoreSliderCards
  const sliderNumberCols = [];
  for ( let col = 0; col < ImageLib.leftFcnNames.length; col++ ) {
    sliderNumberCols.push(
      <div key={col} className="col-md-3">
        <ScoreSliderCard
         sliderNo={col}
         sliderVal={currentScoreValueArr[col] ?? ImageLib.initialScoreValue}
         onSliderChange={ (event) => handleScoreValueChange(event,col) }
        />
      </div>
    );
  }

  const gridSizeLabel = "Grid Size: " + ImageLib.gridSize + " Squares per Side";
  const squareSizeLabel = "Square Size: " + ImageLib.squareSize + " Pixels per Square";

  const domClassName = ImageLib.colorClassNameMap.get( ImageLib.domFcnLtr );
  const auxClassName = ImageLib.colorClassNameMap.get( ImageLib.auxFcnLtr );

  if ( ImageLib.logLogicFlow ) {
    console.log( "return()ing from FixedContainer() in Create.tsx" );
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
      <div className="row mt-4">
        {sliderNumberCols}
      </div>
      <div className="row mt-4">
        <div className="col-sm-6 card align-items-center">
          <MDBRange
            defaultValue={ImageLib.gridSize}
            min={ImageLib.minGridSize}
            max={ImageLib.maxGridSize}
            step='2'
            id='grid-size'
            label={gridSizeLabel}
            onChange={handleGridSizeChange}
          />
        </div>
        <div className="col-sm-6 card align-items-center">
          <SquareSizeSlider
            squareSizeLabel={squareSizeLabel}
            onSquareSizeChange={handleSquareSizeChange}
          />
        </div>
      </div>
      <div className="row mt-4">
        <FixedSizeImageAndCards
          eVsIValue={currentScoreValueArr[0] ?? ImageLib.initialScoreValue}
          nVsSValue={currentScoreValueArr[1] ?? ImageLib.initialScoreValue}
          fVsTValue={currentScoreValueArr[2] ?? ImageLib.initialScoreValue}
          jVsPValue={currentScoreValueArr[3] ?? ImageLib.initialScoreValue} />
      </div>
    </div>
  )
}

// Create: default "mainline" component for this menu option
function Create() {
  if ( ImageLib.logLogicFlow ) {
    console.log( "Top of Create() in Create.tsx: return()ing from Create()" );
  }

  return (
    <div id="create">
      <FixedContainer />
    </div>
  )
}

export default Create
