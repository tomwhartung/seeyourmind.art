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
  const sliderId = "myslider-" + props.sliderNo.toString();

  let sliderLabel = "";
  const sliderCaption = sliderOppVal.toString() + "% " +
                    ImageLib.scoreValueLabels[props.sliderNo] + ": " +
                    props.sliderVal.toString() + "%";

  // if ( props.sliderNo == 0 ) {
  //   sliderCaption = ImageLib.scoreValueLabels[props.sliderNo] + ": " +
  //                 props.sliderVal.toString();
  // }

  if ( props.sliderVal == ImageLib.initialScoreValue ) {
    sliderLabel = "X: 50%";
  } else if ( props.sliderVal < ImageLib.initialScoreValue ) {
    sliderLabel = "iNtuition: " + sliderOppVal + "%";
  } else {
    sliderLabel = "Sensing: " + props.sliderVal + "%";
  }
  //if ( props.sliderNo == 0 ) {
  //}

  let defaultValue = ImageLib.initialScoreValue;

  if ( ImageLib.minScoreValue <= props.sliderVal && props.sliderVal <= ImageLib.minScoreValue ) {
     defaultValue = props.sliderVal;
  }

  return (
    <>
      <MDBRange
        className="pt-2 ps-2 pe-2"
        defaultValue={defaultValue}
        id={sliderId}
        label={sliderLabel}
        onChange={props.onSliderChange}
      />
      <p className="ps-2">{sliderCaption}</p>
    </>
  );
}

export default ScoreSliderCard

