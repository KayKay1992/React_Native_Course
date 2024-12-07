import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import getFormattedDate from "../../util/date";


export default function ExpenseItem({title, date, amount,}) {
    const navigation = useNavigation();

    function expensePressHandler(){
        navigation.navigate('ManageExpenses');
       
    }
  return (
    <Pressable onPress={expensePressHandler} style={({pressed})=> pressed && styles.pressed} android_ripple={4}>
        <View style={styles.expenseItem}>
            {/* expense details */}
            <View>
                <Text style={[styles.textBase, styles.expenseTitle]}>{title}</Text>
                <Text style={[styles.textBase ,styles.expenseDate]}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.expenseAmount}>
            <Text >{amount.toFixed(2)}</Text>
            </View>
            
        </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    expenseItem: {
        marginVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent: 'space-between',
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
        
    },
    // expenseDetails: {
    //     flexDirection: 'row',
    //     justifyContent:'space-between',
    //     alignItems: 'center',
    //     marginBottom: 5
    // },
    expenseTitle: {
        fontSize: 18,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    expenseDate: {
        fontSize: 14,
    },
    expenseAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: GlobalStyles.colors.accent500,
        borderRadius: 5,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
    },
 
});