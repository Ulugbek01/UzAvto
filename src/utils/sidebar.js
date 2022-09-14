import HomePage from "../pages/Home";
import PosterPage from "../pages/Poster";
import QuestionPage from "../pages/Question";
import {ReactComponent as main} from '../assets/icons/main.svg';
import {ReactComponent as poster} from '../assets/icons/poster.svg';
import {ReactComponent as question} from '../assets/icons/question.svg';

export const sidebar = [
    {
        id: 1,
        title: 'Asosiy',
        icon: main,
        path: '/',
        Element: <HomePage/>,
        private: false
    },
    {
        id: 2,
        title: "E'lonlar",
        icon: poster,
        path: '/elonlar',
        Element: <PosterPage/>,
        private: false
    },
    {
        id: 3,
        title: "Savollar",
        icon:  question,
        path: '/savollar',
        Element: <QuestionPage/>,
        private: false
    }
]

export default sidebar;