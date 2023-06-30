export type Movie = {
    Title: string,
    Type: string,
    imdbID: string,
    Year: string,
    Poster: string
}

export interface FilterTypes {
    movies: Movie[],
    setSearchHandle: (e: string) => void
    onSubmit: (e: React.SyntheticEvent, yearRef: string, typeRef: string) => void
}

export type PaginationProps = {
    nPages: number,
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}

export type Routes = {
    path: string,
    index: number,
    exact?: boolean,
    component: React.FC
}

export type PopupProps = {
    current: Movie;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
}

export type SearchButtonType = {
    text: string,
}