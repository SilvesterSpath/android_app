import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorScreen_2 from './src/screens/ColorScreen_2';
import ColorScreen_3 from './src/screens/ColorScreen_3';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Color_2: ColorScreen_2,
    Color_3: ColorScreen_3,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'FirstAndroidApp',
    },
  }
);

export default createAppContainer(navigator);
