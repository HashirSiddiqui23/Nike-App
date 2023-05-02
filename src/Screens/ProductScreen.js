import {FlatList, Image, StyleSheet, Pressable, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {productsSlice} from '../store/productsSlice';
import { Heart } from 'react-native-feather';

const ProductScreen = ({navigation}) => {
  
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const favourite = () => {}

  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <Pressable


          onPress={() => 
            {
                dispatch(productsSlice.actions.setSelectedProduct(item.id));
            
            navigation.navigate('Product Detail')}}
          style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
          <Pressable onPress={favourite} style={styles.heartIcon}>
            <Heart color={"black"} />
          </Pressable>
        </Pressable>
      )}
      numColumns={2}
    />
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});
