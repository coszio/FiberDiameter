export interface Fiber {
  id: number;
  color: string;
  diameter: number;
  measurements: Line[];
}

export interface Line {
  id: number;
  type: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export interface Dims {
    width: number,
    height: number,
}