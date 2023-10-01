// 
// lib/jungian/ScoreSliderLib.tsx: types and components used by the Jungian score sliders
// --------------------------------------------------------------------------------------
//
import { ChangeEvent } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

import * as ImageLib from './ImageLib.ts';

// ScoreSliderPropsIFace: defines props passed to ScoreSliderCard and ScoreSlider components
interface ScoreSliderPropsIFace {
  sliderNo: number;
  onSliderChange: (event: ChangeEvent<Element>) => void;
  sliderVal: number;
}

// ScoreSliderCard: MDB card wrapping a quiz-specific wrapper of the MDBRange component
export function ScoreSliderCard( props: ScoreSliderPropsIFace ) {
  return (
    <div className="card">
      <ScoreSlider
        sliderNo={props.sliderNo}
        sliderVal={props.sliderVal}
        onSliderChange={props.onSliderChange}
      />
    </div>
  )
}

// ScoreSlider: Jungian Score-specific wrapper for the MDBRange component
function ScoreSlider( props: ScoreSliderPropsIFace ) {
  const sliderOppVal = 100 - props.sliderVal;
  const sliderId = "score-slider-" + props.sliderNo.toString();

  let sliderCaption = "";
  const sliderTitle =
    ImageLib.leftFcnLetters[props.sliderNo] + ": " +
    sliderOppVal.toString() + "% " + " vs " +
    props.sliderVal.toString() + "% " +
    ImageLib.rightFcnLetters[props.sliderNo];

  if ( props.sliderVal == ImageLib.initialScoreValue ) {
    sliderCaption = "X: 50% " + ImageLib.leftFcnLetters[props.sliderNo] +
                    "/50% " + ImageLib.rightFcnLetters[props.sliderNo];
  } else if ( props.sliderVal < ImageLib.initialScoreValue ) {
    sliderCaption = ImageLib.leftFcnNames[props.sliderNo] + ": " + sliderOppVal + "%";
  } else {
    sliderCaption = ImageLib.rightFcnNames[props.sliderNo] + ": " + props.sliderVal + "%";
  }

  let defaultValue = ImageLib.initialScoreValue;

  if ( ImageLib.minScoreValue <= props.sliderVal && props.sliderVal <= ImageLib.minScoreValue ) {
     defaultValue = props.sliderVal;
  }

  return (
    <div className="score-slider">
      <MDBRange
        className="pt-2 ps-2 pe-2"
        defaultValue={defaultValue}
        id={sliderId}
        label={sliderTitle}
        onChange={props.onSliderChange}
      />
      <p className="ps-2 text-center fw-bold">{sliderCaption}</p>
    </div>
  );
}

export default ScoreSliderCard

