import useSWR from "swr";

import { fetcher } from "./fetcher";
import type { ICategory } from "@/types/category";
import type { IPost } from "@/types/post";

export function getCategoryList() {
    const { data, error, isLoading } = useSWR<ICategory>('/api/category/list', fetcher)

    return {
        categories: data,
        error,
        isLoading
    }
}

export function getPostInCategory(category: string, page: number | string) {
    const { data, error, isLoading } = useSWR<{ posts: IPost[], pages: number }>(`/api/category/${category}/${page}`, fetcher)

    return {
        posts: data?.posts || [],
        pages: data?.pages || 0,
        error,
        isLoading
    }
}