import GenericList from "../utils/GenericList";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movie.model"
import css from './moviesList.module.css'

export default function MoviesList(props: moviesListProps) {

    return <GenericList list={props.movies}>
        <div className={css.div}>
            {props.movies?.map(movie =>
                <IndividualMovie {...movie} key={movie.id} />
            )}
        </div>
    </GenericList>

}

interface moviesListProps {
    movies?: movieDTO[];
}