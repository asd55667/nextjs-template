import useSWR from "swr";
import { fetcher } from "./fetcher";
import type { IArchive } from "@/types/archive";
import type { IPostPreview } from "@/types/post";

export function getArchiveList() {
    const { data, error, isLoading } = useSWR<IArchive[]>('/api/archive/list', fetcher)

    return {
        list: data,
        error,
        isLoading
    }
}



export function getArchive(year: number | string, month: number | string) {
    const { data, error, isLoading } = useSWR<{ posts: IPostPreview[], pages: number }>(`/api/archive/${year}/${month}`, fetcher)

    return {
        posts: data?.posts || [],
        pages: data?.pages || 0,
        error,
        isLoading
    }
}