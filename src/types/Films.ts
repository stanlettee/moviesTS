interface Film {
    id: number,
    poster_path: string | undefined,
    title: string,
    vote_average: number,
    vote_count: number,
    overview: string,
    popularity: number,
    release_date: number
}

export default Film