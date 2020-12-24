// @flow
import {Image, StatusBar, View, Text} from 'react-native';
import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import NavigationService from '../../routers/NavigationService';
import {Home} from '../../routers/screenNames';
import styles from './styles';
import i18n, {setLocation} from '../../assets/languages/i18n';
import R from '../../assets/R';

type Props = {};

export class Intro extends React.PureComponent<Props> {
  timeout = '';

  async componentDidMount() {
    let routeName = Home;
    setLocation(i18n, 'en');
    this.changeScreen(routeName);
  }

  changeScreen(routeName: string) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      NavigationService.reset(routeName);
    }, 3500);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={R.colors.colorWhite} />
        <Animatable.View
          animation="bounceIn"
          direction="alternate"
          duration={4000}
          style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            source={R.images.logoMain}
            style={styles.image}
          />
        </Animatable.View>
      </View>
    );
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, {})(Intro);
