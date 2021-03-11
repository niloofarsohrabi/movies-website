import pathes from './pathes'
import { MainPage } from '../../components/pages/main-page'
import { MovieDetailPage } from '../../components/pages/movieDetail-page'
import { NotFoundPage } from '../../components/pages/notFound-page'
import { Search } from '../../components/pages/search-page'

const routes = [
    {
        name: "INDEX",
        path: pathes.INDEX,
        component: MainPage,
        exact: true
    },
    {
        name: "MOVIE_DETAIL",
        path: pathes.MOVIE_DETAIL,
        component: MovieDetailPage,
        exact: true
    },
    {
        name: "SEARCH",
        path: pathes.SEARCH,
        component: Search,
        exact: true
    },
    {
        name: "NOT_FOUND",
        path: pathes.NOT_FOUND,
        component: NotFoundPage,
        exact: true
    },


];
export default routes;

