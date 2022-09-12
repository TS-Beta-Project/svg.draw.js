import { Element } from "@svgdotjs/svg.js";

declare module "@svgdotjs/svg.js" {
  function SVG(): Svg;
  function SVG(selector: QuerySelector): Element;
  function SVG<T>(el: T): SVGTypeMapping<T>;
  function SVG(domElement: HTMLElement): Element;

  class Box implements BoxLike {
    height: number;
    width: number;
    y: number;
    x: number;
    cx: number;
    cy: number;
    w: number;
    h: number;
    x2: number;
    y2: number;

    constructor();
    constructor(source: string);
    constructor(source: number[]);
    constructor(source: DOMRect);
    constructor(x: number, y: number, width: number, height: number);

    merge(box: BoxLike): Box;
    transform(m: Matrix): Box;
    addOffset(): this;
    toString(): string;
    toArray(): number[];
    isNulled(): boolean;
    to(v: MorphValueLike): Morphable;
  }

  interface Element {
    draw(): this;
  }
}

declare function registerPlugin(name: string, obj: any): any;
