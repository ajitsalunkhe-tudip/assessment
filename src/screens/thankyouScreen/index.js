//@flow
import React, { Component } from 'react';
import { View, Text  } from 'react-native'
import style from './style';
import { connect } from 'react-redux';

type Props = {
    className?: string,
    disabled?: boolean
};
class ThankyouScreen extends Component<{Props}> {
    
render() {
    return (
        <View style={{backgroundColor:'black', flex:1}}>
            <View style= {style.container}>
                <Text style={style.header}>Thank You {this.props.userNameData}!</Text>   
            </View>    
        </View>    
    )
 }
}

const mapStateToProps = (state) => {
	return {
		userNameData: state.userName,
	}
}

export default connect(mapStateToProps)(ThankyouScreen);

