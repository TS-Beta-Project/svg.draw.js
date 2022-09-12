import { Element } from "@svgdotjs/svg.js";

declare module "@svgdotjs/svg.js" {
  function SVG(): Svg;
  function SVG(selector: QuerySelector): Element;
  function SVG<T>(el: T): SVGTypeMapping<T>;
  function SVG(domElement: HTMLElement): Element;
  interface Element {
    draw(): this;
  }
}

declare function registerPlugin(name: string, obj: any): any;
