import { Administrator } from "../models/Administrator";
export declare class AdminAuthResolver {
    adminLogin(username: string, password: string, ctx: any): Promise<Administrator>;
    adminCheck(context: any): Promise<Administrator>;
    adminLogOut(ctx: any): Promise<{
        message: string;
        code: string;
    }>;
}
