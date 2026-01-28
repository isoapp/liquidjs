import { FilterImpl } from '../template';
export declare function date(this: FilterImpl, v: string | Date, format?: string, timezoneOffset?: number | string): Promise<string | Date>;
export declare function date_to_xmlschema(this: FilterImpl, v: string | Date): Promise<string | Date>;
export declare function date_to_rfc822(this: FilterImpl, v: string | Date): Promise<string | Date>;
export declare function date_to_string(this: FilterImpl, v: string | Date, type?: string, style?: string): Promise<string | Date>;
export declare function date_to_long_string(this: FilterImpl, v: string | Date, type?: string, style?: string): Promise<string | Date>;
