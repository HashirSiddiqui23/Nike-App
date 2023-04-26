import {NavigationContainer} from '@react-navigation/native';
import ProductDetailScreen from './Screens/ProductDetailScreen';
import ShoppingCart from './Screens/ShoppingCart';
import ProductScreen from './Screens/ProductScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, View, Image, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { selectNumberOfIyems } from './store/cartSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const numberOfItems = useSelector(selectNumberOfIyems)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{ backgroundColor: 'white'}}}>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('cart')}>
                <Image
                  source={require('../Assets/cartI.png')}
                  style={{width: 20, height: 20}}
                />
                <Text style={{fontSize: 20, marginLeft: 5, fontWeight: '500'}}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Detail"
          component={ProductDetailScreen}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen name="cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
