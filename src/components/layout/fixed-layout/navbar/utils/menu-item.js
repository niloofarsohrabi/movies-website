import { mainMenu } from './main-menu'

const menuItem = [

    {
        id: 1,
        mainTitleOfMenu: mainMenu.MOVEIS,
        subTitleOfMenu_ItemOne:"Popular",
        subTitleOfMenu_ItemTwo:"Now Palying",
        subTitleOfMenu_ItemThree:"Up Coming",
        subTitleOfMenu_ItemFour:"Top Related"
    },
    {
        id:2,
        mainTitleOfMenu: mainMenu.TVSHOWS,
        subTitleOfMenu_ItemOne:"Popular",
        subTitleOfMenu_ItemTwo:"Aring Today",
        subTitleOfMenu_ItemThree:"On Tv",
        subTitleOfMenu_ItemFour:"Top Related"
    },
    {
        id:3,
        mainTitleOfMenu:mainMenu.PEOPLE,
        subTitleOfMenu_ItemOne:"Popular People",
       
    },
    {
        id:4,
        mainTitleOfMenu:mainMenu.MORE,
        subTitleOfMenu_ItemOne:"Discussions",
        subTitleOfMenu_ItemTwo:"LeaderBoard",
        subTitleOfMenu_ItemThree:"Support",
        subTitleOfMenu_ItemFour:"API"
    }


];

export default menuItem;
