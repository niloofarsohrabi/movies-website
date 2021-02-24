import pathes from './pathes'
import { MainPage } from '../../components/pages/main-page'
import { MovieDetailPage } from '../../components/pages/movieDetail-page'
import { ForbiddenPage } from '../../components/pages/forbidden-page'
import { NotFoundPage } from '../../components/pages/notFound-page'
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
        name: "FORBIDDEN",
        path: pathes.FORBIDDEN,
        component: ForbiddenPage,
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

