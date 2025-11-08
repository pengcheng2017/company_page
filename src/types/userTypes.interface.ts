import { Meta } from "./metaTypes.interface";

export interface User {
    id: number;
    role: string;
    name: string;
    username: string | null;
    email: string;
    phone: string;
    account_no: string | null;
    birthday: string | null;
    image_src: string | null;
    type: string | null;
    location: string | null;
    is_verified: number;
    created_at: string;
    updated_at: string;
    gender: string;
    referral: string | null;
    loyalty_level: string | null;
    role_id: number;
    restricted_role?: boolean;
}

export interface UserState {
    source: User;
    loading: boolean;
    error: string;
    meta?: Meta
}

export const initialUser: UserState = {} as UserState;