export interface Item {
    title: string;
    url: string;
    items?: Item[];
}

export interface IPost {
    id: string;
    title: string;
    description: string;
    /**
     * date of the post been published
     */
    date: number;
    /**
     * date of the post been updated
     */
    updated: number;
    /**
     * markdown string of blog
     */
    content: string;
    author?: string;
    tags: string[];
    category: string[];
    /**
     * related id of post
     */
    related: string[];
    /**
     * TableOfContents
     */
    toc?: { items: Item[] }
}