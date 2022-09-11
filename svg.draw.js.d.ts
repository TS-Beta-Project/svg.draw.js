import { Element } from '@svgdotjs/svg.js'

declare module "@svgdotjs/svg.js" {
  interface Element {
    draw(): this
  }
}

declare function registerPlugin(name: string, obj: any): any
