import { Movie } from "../types/types";

export const useSearchFilter = () => {
    const setSearchFilter = (array: Movie[], value: string, callback: Function) => {
        callback(array?.filter((arr: any) => {
            return value?.toLowerCase() === '' ? array : arr.Title.toLowerCase().includes(value?.toLowerCase())
        }))
     }
     return { setSearchFilter };
}
