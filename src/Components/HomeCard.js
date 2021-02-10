import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  PixelRatio,
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styled from 'styled-components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import configuredStyle from '../Constants/variables';
import enums from '../Constants/enums';
import {getApiData} from '../Store/Actions/api';
import images from '../Constants/images';
import {connect} from 'react-redux';

export const HomeCard = React.memo(
  ({item, index, favToggle, hasFav, navigator}) => {
    return (
      <View style={pageStyle.container}>
        <ImageContainer>
          <Image
            style={pageStyle.imageStyle}
            source={{
              uri: item.images.original.url,
            }}></Image>
        </ImageContainer>
        <View style={pageStyle.child2}>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'space-between',
            }}>
            <Text numberOfLines={3} style={pageStyle.title}>
              {item.title}
            </Text>
            <TouchableOpacity onPress={favToggle}>
              <Image
                source={
                  hasFav.some((elem) => elem.FavouriteID === item.id)
                    ? images.fillFav
                    : images.blankFav
                }
                style={pageStyle.favIcon}></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={pageStyle.viewDetailsButton}
            onPress={navigator}>
            <Text style={pageStyle.viewDetails}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.hasFav !== nextProps.hasFav) {
      return false;
    }
    if (prevProps.item.id === nextProps.item.id) {
      return true;
    }
    return false;
  },
);

const ImageContainer = styled.View`
  flex: 1.2;
  align-items: ${enums.CENTER};
`;

const pageStyle = StyleSheet.create({
  container: {
    elevation: 2,
    backgroundColor: configuredStyle.colors.cardbg,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 120,
    height: 120,
    marginVertical: configuredStyle.margin.md,
  },
  title: {
    fontSize: configuredStyle.fonts.f18,
    fontWeight: 'bold',
    color: configuredStyle.colors.black,
    maxWidth: '80%',
  },
  child2: {
    flex: 2,
    justifyContent: enums.SPACE_B,
    paddingVertical: configuredStyle.padding.p15,
  },
  viewDetails: {
    color: configuredStyle.colors.white,
    fontSize: configuredStyle.fonts.f14,
    fontWeight: 'bold',
  },
  viewDetailsButton: {
    backgroundColor: configuredStyle.colors.buttonPrimary,
    width: 150,
    height: 30,
    justifyContent: enums.CENTER,
    alignItems: enums.CENTER,
    borderRadius: 10,
    alignSelf: enums.END,
  },
  favIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
});
