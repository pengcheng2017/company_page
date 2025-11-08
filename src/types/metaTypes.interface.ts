export interface Meta {
    current_page: number;
    from: number;
    to: number;
    last_pages: number;
    per_page: number;
    total: number;
}

export interface Links {
    url: string;
    label: string;
    active: boolean;
}