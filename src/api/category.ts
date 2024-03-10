import useSWR from "swr";

import { fetcher } from "./fetcher";
import type { ICategory } from "@/types/category";

export function getCategoryList() {
    const { data, error, isLoading } = useSWR<ICategory>('/api/category/list', fetcher)

    return {
        categories: data,
        error,
        isLoading
    }
}