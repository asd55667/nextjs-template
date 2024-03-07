import { siteConfig } from "@/config/site"

export const fetcher = (input: string | URL | Request, init?: RequestInit) => {
    if (typeof input === 'string') {
        return fetch(siteConfig.host + input, init).then((res) => res.json())
    }

    return fetch(input, init).then((res) => res.json())
}

