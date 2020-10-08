import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style';
import { screenNames } from '../../routes/helper';
import { connect } from 'react-redux';
import SwipeButton from 'rn-swipe-button';
import thumbIcon from '../../assets/diamond.png';

class VariationScreen extends Component{

    validate = () => {
        this.props.navigation.navigate(screenNames.thankyouScreen);
    }
     
    variationButton = (viewColor, textColor) => {
        return(
            <View>
                <TouchableOpacity>
                    <View style={[style.ButtonStyle, { backgroundColor: viewColor}]}>
                        <Text style={[style.buttonText, {color: textColor}]}>Press me</Text> 
                    </View> 
                </TouchableOpacity>
            </View>
             
        )
    }
    
    render() {
        return (
            <View style={{backgroundColor:'black', flex:1}}>
            <Text style={style.userNameheader}>Welcome {this.props.userNameData}!</Text> 
                <View style= {style.container}>
                    
                    <Text style={style.header}>4 variations of a button</Text> 

                    {this.variationButton('#000', '#5982b0')}
                    {this.variationButton('#34424b', '#5b82ab')}
                    {this.variationButton('#6eb1f7', '#fff')}        

                    <SwipeButton
                        disabled={false}
                        swipeSuccessThreshold={80}
                        height={50}
                        width={325}
                        title="Slide me to continue"
                        titleColor='#5a8dc4'
                        titleFontSize={20}
                        titleStyles='bold'
                        thumbIconImageSource={thumbIcon}
                        onSwipeSuccess={() => {
                            this.props.navigation.navigate(screenNames.thankyouScreen);
                        }}
                        shouldResetAfterSuccess={true}
                        railFillBackgroundColor="#6eb1f7"
                        railFillBorderColor="#2c313a"
                        thumbIconBackgroundColor="#6eb1f7"
                        thumbIconBorderColor="#6eb1f7"
                        railBackgroundColor="#000"
                        railBorderColor="#2c313a"
                    />

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

export default connect(mapStateToProps)(VariationScreen);