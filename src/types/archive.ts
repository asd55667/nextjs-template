import type { IPostPreview } from "@/types/post";

export interface IArchive {
  year: number;
  months: IArchiveMonth[];
  total: number;
}

export interface IArchiveMonth {
  month: number;
  posts: IPostPreview[];
}
