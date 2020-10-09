//@flow
import {
	createAppContainer,
	createSwitchNavigator,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/splashScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import VariationScreen from '../screens/variationScreen';
import ThankyouScreen from '../screens/thankyouScreen';


const registrationRoutes = createStackNavigator(
	{
		WelcomeScreen,
		VariationScreen,
		ThankyouScreen
	},
	{
		defaultNavigationOptions: {
				header:null,
		}
	}
);
const AppNavigator = createSwitchNavigator({
	SplashScreen,
	registrationRoutes,
});

const navigators = createAppContainer(AppNavigator);

export default navigators;