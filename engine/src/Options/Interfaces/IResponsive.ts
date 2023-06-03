import type { IOptions } from "./IOptions";
import type { RecursivePartial } from "../../Types/RecursivePartial";
import type { ResponsiveMode } from "../../Enums/Modes/ResponsiveMode";

export interface IResponsive {
    maxWidth: number;
    mode: ResponsiveMode | keyof typeof ResponsiveMode;
    options: RecursivePartial<IOptions>;
}
