import { createStackNavigator, createAppContainer } from 'react-navigation';
/**
 *  Home
 */
// import TabRedux from '../features/TabView/TabRedux';
import Home from '../features/Home/Home';
import ListItem from '../features/ListItem/ListItem';
import Search from '../features/Search/Search';
import Details from '../features/Details/Details';
import Favorite from '../features/Favorite/Favorite';
import History from '../features/History/History';
import SignIn from '../features/Account/SignIn';
import SignUp from '../features/Account/SignUp';
import SignOut from '../features/Account/SignOut';
import Cart from '../features/Cart/Cart';
import Ordered from '../features/Ordered/Ordered';
import Video from '../features/Video/Video';
import VideoDetails from '../features/Video/VideoDetails';
/**
 *  Intro
 */
import IntroScreen from '../features/Intro/Intro';
import * as screenNames from './screenNames'

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    [screenNames.VideoDetails]: { screen: VideoDetails },
    [screenNames.Video]: { screen: Video },
    [screenNames.Ordered]: { screen: Ordered },
    [screenNames.Cart]: { screen: Cart },
    [screenNames.SignOut]: { screen: SignOut },
    [screenNames.SignUp]: { screen: SignUp },
    [screenNames.SignIn]: { screen: SignIn },
    [screenNames.History]: { screen: History },
    [screenNames.Favorite]: { screen: Favorite },
    [screenNames.Details]: { screen: Details },
    [screenNames.Search]: { screen: Search },
    [screenNames.ListItem]: { screen: ListItem },
    [screenNames.Home]: { screen: Home },
    [screenNames.IntroScreen]: { screen: IntroScreen },
  },
  {
    initialRouteName: screenNames.IntroScreen,
    headerMode: 'none'
  }
);
export default createAppContainer(AppNavigator);
