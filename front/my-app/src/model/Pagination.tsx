export interface Pagination {
    meta: {
        pagination : {
            current_page: number, 
            prev_page: number,
            next_page: number,
            total_pages:number
        }
    }
}