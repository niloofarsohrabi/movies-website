import { mainMenu } from './main-menu'

const menuItem = [

    {
        id: 1,
        mainTitleOfMenu: mainMenu.MOVEIS,
        subTitleOfMenu:["Popular","Now Playing","Up Coming","Top Related"]
    },
    {
        id:2,
        mainTitleOfMenu: mainMenu.TVSHOWS,
        subTitleOfMenu:["Popular","Aring Today","On Tv","Top Related"]

    },
    {
        id:3,
        mainTitleOfMenu:mainMenu.PEOPLE,
        subTitleOfMenu:["Popular People"]
       
    },
    {
        id:4,
        mainTitleOfMenu:mainMenu.MORE,
        subTitleOfMenu:["Discusions","Leaderboard","Support","API"]
    }


];

export default menuItem;
