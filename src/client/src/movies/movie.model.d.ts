export interface movieDTO {
    id: number;
    title: string;
    poster: string;
}

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upComingRelease?: movieDTO[];
}