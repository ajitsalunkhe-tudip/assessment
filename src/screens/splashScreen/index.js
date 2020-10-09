//@flow
import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import { screenNames } from '../../routes/helper';
import style from './style';
import Images from '../../assets';

type Props = {
  className?: string,
  disabled?: boolean
};

class SplashScreen extends Component<{Props}> {
    
    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate(screenNames.welcomeScreen);
        }, 3000);
      }
    
      render(){
        return(
            <View style={style.container}>
                <Image 
                    source={Images.logo} 
                    style={style.image} />
            </View>
        );
    }
}
export default SplashScreen;