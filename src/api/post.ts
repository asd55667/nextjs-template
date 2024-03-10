import useSWR from "swr";

import { fetcher } from "./fetcher";
import { IPost } from "@/types/post";


export function getRecentPost() {
    const { data, error, isLoading } = useSWR<IPost[]>('/api/content/recent-posts', fetcher)

    return {
        posts: data,
        error,
        isLoading
    }
}

export function getPost(id: string) {
    const { data, error, isLoading } = useSWR<IPost>(`/api/content/post/${id}`, fetcher)

    return {
        post: data,
        error,
        isLoading
    }
}

