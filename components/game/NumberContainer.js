import { View, Text, StyleSheet, Dimensions,useWindowDimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {

  const {width, height} = useWindowDimensions();

  const paddingDistance = deviceWidth < 380 ? 12 : 24;
  const marginDistance = deviceWidth < 380 ? 12 : 24;
  const fontSizing = deviceWidth < 380 ? 28 : 36;

  return (
    <View style={[styles.container, {margin:marginDistance , padding:paddingDistance}]}>
      <Text style={[styles.numberText,{fontSize:fontSizing}]}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    // padding: deviceWidth < 380 ? 12 : 24 ,
    // margin: deviceWidth < 380 ? 12 : 24 ,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    // fontSize: deviceWidth < 380 ? 28 : 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold'
  },
});
