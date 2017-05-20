// Type definitions for svg.arc.js

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
        closeEnough(x: number, y: number): boolean;
    }
}
