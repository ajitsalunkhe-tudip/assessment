//@flow
import { StyleSheet } from 'react-native';

// StyleSheet.propTypes = {
//     count: PropTypes.number,
//     numbers: PropTypes.func,
//     increment: PropTypes.func,
//     decrement: PropTypes.func,
//     zero: PropTypes.func,
//     power: PropTypes.func
// };

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:150,
        width:150,
    },
    textstyle:{
        fontFamily:'serif',
        fontSize:20,
        fontWeight:'bold',
        padding:10,
    }
});