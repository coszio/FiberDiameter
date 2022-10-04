import React, { FunctionComponent } from "react";

import { MeasurementLayer } from "@coszio/react-measurements";

interface Props {
  fiberId: number;
  measurements: any;
  color: string;
  imageDims: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  onChange: (measurements: any) => void;
  measureLine: (line: any) => string;
  measureCircle: (circle: any) => string;
}

const FiberLayer: FunctionComponent<Props> = (props) => {
  return (
    <div
      id={`layer${props.fiberId}`}
      className='absolute'
      style={{
        width: `${props.imageDims.width}px`,
        height: `${props.imageDims.height}px`,
        top: `${props.imageDims.y}px`,
        left: `${props.imageDims.x}px`,
      }}
    >
      <MeasurementLayer
        measurements={props.measurements}
        widthInPx={props.imageDims.width}
        heightInPx={props.imageDims.height}
        onChange={props.onChange}
        measureLine={props.measureLine}
      />

      {/* --------  Customize react-measurements style  --------*/}
      <style jsx>
        {`
          :global(#layer${props.fiberId}
              .line-measurement
              .line, .circle-measurement .circle, .text-annotation
              .arrow-line) {
            stroke: ${props.color};
          }

          :global(#layer${props.fiberId} .text-annotation .arrow-head) {
            fill: ${props.color};
          }

          .measurement-text,
          .text-annotation .text {
            color: green;
            background-color: rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
    </div>
  );
};

export default FiberLayer;