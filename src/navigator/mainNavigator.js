import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile201382Navigator from '../features/UserProfile201382/navigator';
import Settings201381Navigator from '../features/Settings201381/navigator';
import Settings201379Navigator from '../features/Settings201379/navigator';
import SignIn2201377Navigator from '../features/SignIn2201377/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile201382: { screen: UserProfile201382Navigator },
Settings201381: { screen: Settings201381Navigator },
Settings201379: { screen: Settings201379Navigator },
SignIn2201377: { screen: SignIn2201377Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
