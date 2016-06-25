/// <reference path="../../typings/index.d.ts" />
export interface IMyLibraryConfiguration {
    name: string;
}
export declare class MyLibrary {
    private config;
    private computedName;
    constructor(config?: IMyLibraryConfiguration);
    readonly name: string;
}
