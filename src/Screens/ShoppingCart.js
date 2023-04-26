import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import CartListItem from '../Components/CartListItem';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubTotl, selectTotal } from '../store/cartSlice';

const shoppingCartTotals = () => {

    const Subtotal = useSelector (selectSubTotl);
    const deliveryFee = useSelector (selectDeliveryPrice);
    const total = useSelector (selectTotal);

    return(


    <View style={styles.totalsContainer}>
            <View style= {styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text >{Subtotal} US$</Text>

            </View>
            <View style= {styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text >{deliveryFee} US$</Text>

            </View>
            <View style= {styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text >{total} US$</Text>

            </View>
        </View>
)}

const ShoppingCart = () => {

    const cartItems = useSelector((state) => state.cart.items);
  return (
    <View style={styles.mega}>
    <FlatList
      data={cartItems}
      renderItem={({item}) => <CartListItem cartItem={item} />}
      ListFooterComponent={shoppingCartTotals}
    />
    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>CHECKOUT</Text>
      </Pressable>
      </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create ({
    totalsContainer:{
        margin: 20,
        paddingTop: 10,
        borderColor: "grey",
        borderTopWidth: 1,
    },
    mega: {
        height: "100%"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2
    },
    text: {
        color: "gray"
    },
    textBold: {
        fontSize: 16,
        fontWeight: 500
    },
    button: {
        bottom: 5,
        position: "absolute",
        backgroundColor: "red",
        width: "90%",
        alignSelf: "center",
        backgroundColor: "black",
        borderRadius: 200,
        alignItems: "center"
    },
    buttonText: {
         color: "white",
        padding: 20,
        fontWeight: 500,
        fontSize: 16
    }
})