import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  findNodeHandle,
  Alert,
  Image,
  InteractionManager,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Moment from 'moment';
import configuredStyle from '../Constants/variables';
import enums from '../Constants/enums';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentData: this.props.navigation.state.params.componentData,
    };
  }

  render() {
    const {componentData} = this.state;
    return (
      <Container>
        <Image
          style={pageStyle.gifStyle}
          source={{uri: componentData.images.original.url}}></Image>

        <Text style={pageStyle.title}>{componentData.title}</Text>
        <View
          style={{flexDirection: 'row', marginTop: configuredStyle.margin.md}}>
          <Text style={pageStyle.heading}>User: </Text>
          <Text style={pageStyle.item}>
            {componentData?.user?.display_name}
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: configuredStyle.margin.sm}}>
          <Text style={pageStyle.heading}>Date: </Text>
          <Text style={pageStyle.item}>
            {Moment(componentData.trending_datetime).format(
              'MMMM Do YYYY, h:mm a',
            )}
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: configuredStyle.margin.sm}}>
          <Text style={pageStyle.heading}>ID: </Text>
          <Text style={pageStyle.item}>{componentData.id}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={pageStyle.goBack}>
          <Text style={pageStyle.goBackText}>Back</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  align-items: ${enums.CENTER};
`;

const pageStyle = StyleSheet.create({
  title: {
    fontSize: configuredStyle.fonts.f16,
    fontWeight: 'bold',
    color: configuredStyle.colors.black,
    maxWidth: '80%',
    marginTop: configuredStyle.margin.m50,
  },
  heading: {
    fontSize: configuredStyle.fonts.f16,
    fontWeight: 'bold',
    color: configuredStyle.colors.black,
  },
  item: {
    fontSize: configuredStyle.fonts.f16,
    color: configuredStyle.colors.black,
    maxWidth: '80%',
  },
  gifStyle: {
    marginTop: configuredStyle.margin.md,
    height: 400,
    width: '90%',
  },
  goBack: {
    backgroundColor: configuredStyle.colors.buttonPrimary,
    width: 150,
    height: 40,
    justifyContent: enums.CENTER,
    alignItems: enums.CENTER,
    borderRadius: 10,
    alignSelf: enums.CENTER,
    marginTop: configuredStyle.margin.md,
  },
  goBackText: {
    color: configuredStyle.colors.white,
    fontSize: configuredStyle.fonts.f14,
    fontWeight: 'bold',
  },
});

export default Detail;
