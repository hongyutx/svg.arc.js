// Type definitions for svg.js
// Project: http://www.svgjs.com/
// Definitions by: Sean Hess <https://seanhess.github.io/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Reference: http://documentup.com/wout/svg.js


// TODO sets
// TODO gradients
export = svgjs;
export as namespace svgjs;

declare var svgjs:svgjs.Library;

declare module svgjs {

    export interface Arc extends Path {
        plotRadius(x1: number, y1: number, r: number, largeArcFlag: number, sweepFlag: number, x2: number, y2: number): Arc;        
        plot(x1: number, y1: number, h: number, sweepFlag: number, x2: number, y2: number): Arc;    
        
        h(): number;
        angle(): number;
        flag(): number;
        sweep(f: number);
        sweep(): number;
        length(): number;
        ptOnArc(pt: Point): boolean;
    }
}
