//@flow
import React, { Component } from 'react';
import { View, ScrollView , TouchableOpacity, Text, TextInput, Image } from 'react-native'
import style from './style';
import Images from '../../assets';
import { screenNames } from '../../routes/helper';
import {saveUserName} from './../../redux/actions';
import { connect } from 'react-redux';

type Props = {
    className?: string,
    disabled?: boolean
};
class WelcomeScreen extends Component<{Props}>{
    state = {
        userName: undefined,
        userNameError: undefined
    }
   
    validate = () => {
        const isNameValidated = this.validateName();
        const { saveUserName } = this.props;
        const { userName } = this.state;

        if (isNameValidated) {
            saveUserName(userName);
            this.props.navigation.navigate(screenNames.variationScreen);
        }
    }

    validateName = () => {
        const { userName } = this.state;
        if (!userName) {
          this.setState({ userNameError: 'Please Enter Name' });
          return false;
        } else {
          this.setState({ userNameError: undefined });
          return true;
        }
    }

render() {
    const { userName, userNameError } = this.state;
    return (
        <View style= {{backgroundColor:'black', flex: 1}}>
            <ScrollView>    
                
            <Text style={style.userNameheader}>
               {this.props.userNameData == '' ? null : `Welcome ${this.props.userNameData}!`}
            </Text> 
            <View style = {style.container}>
                <Image
                    source={Images.logo} 
                    style={style.image} >
                </Image> 
                <Text style={style.header}>Welcome!</Text> 
                <View style={style.SectionStyle}>
                    <Image source={Images.user} style={style.ImageStyle}/>
                    {/* <View style={style.textInputBorder}></View> */}
                    <TextInput style = {{paddingLeft:10,fontWeight:'bold',color:'grey',fontSize:20}}
                        placeholder = "Enter Name"
                        placeholderTextColor='gray'
                        textContentType='telephoneNumber'
                        onChangeText={text => {
                            this.setState({
                                userName: text,
                            }, this.validateName);
                        }}
                        maxLength={15}
                        value={userName}/>
                </View>             

                {userNameError && <Text style={style.errorText}>{userNameError}</Text>}

                    <View> 
                        <TouchableOpacity
                            onPress = {() => { this.validate()}}>
                            <View style={[style.ButtonContainer, { backgroundColor: '#6eb1f7'}]}>
                                <Text style={[style.buttonText, {color: '#fff'}]}>Save</Text> 
                            </View> 
                        </TouchableOpacity>
                    </View> 
                </View>
            </ScrollView>
        </View>        
    )
 }
}

const mapStateToProps = (state) => {
	return {
		userNameData: state.userName,
	}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        saveUserName: (userName) =>  saveUserName(dispatch, userName)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
