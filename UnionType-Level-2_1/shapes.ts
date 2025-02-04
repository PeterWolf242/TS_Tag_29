export type TCircle = {
  shape: "circle";
  radius: number;
};

export type TSquare = {
  shape: "square";
  sideLength: number;
}

export type TTriangle = {
  shape: "triangle";
  base: number;
  height: number;
}

export type TRectangle = {
  shape: "rectangle";
  width: number;
  height: number;
}

// export interface IShape {
//   type: string;
// }

// export interface Icircle extends IShape {
//   type: "circle";
//   radius: number;
//   shape: "circle";
// }

// export interface Isquare extends IShape {
//   type: "square";
//   side: number;
// }

// export interface Itriangle extends IShape {
//   type: "triangle";
//   base: number;
//   height: number;
// }

// export interface Irectangle extends IShape {
//   type: "rectangle";
//   width: number;
//   height: number;
// }
