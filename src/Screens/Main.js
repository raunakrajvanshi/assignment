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
import Realm from 'realm';
import {HomeCard} from '../Components/HomeCard';
import {FAVOURITES_SCHEMA, FavouritesSchema} from '../Store/Schema/allSchemas';

const databaseOptions = {
  path: 'realmT4.realm',
  schema: [FavouritesSchema],
  schemaVersion: 0,
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      searchText: '',
      dataSource: this.props.apiData,
      initial: 10,

      predefined: [],
      realm: null,
    };
  }

  componentDidMount() {
    this.callApi(this.setLoaderToggle, this.state.initial);
    this.getDatabaseResults();
  }

  getDatabaseResults = () => {
    Realm.open(databaseOptions).then((realm) => {
      let user_favourites = realm.objects('favourites');
      this.setState({
        predefined: user_favourites,
      });
    });
  };

  callApi = (callBack, count) => {
    this.props.getApiData(callBack, count);
  };

  favToggle = (item) => {
    if (this.state.predefined.some((elem) => elem.FavouriteID === item)) {
      const toDeleteIndex = this.state.predefined.findIndex(
        (elem) => elem.FavouriteID === item,
      );
      Realm.open(databaseOptions).then((realm) => {
        realm.write(() => {
          realm.delete(this.state.predefined[toDeleteIndex]);
        });
        this.getDatabaseResults();
      });
    } else {
      Realm.open(databaseOptions).then((realm) => {
        let obj = {
          FavouriteID: item,
        };
        realm.write(() => {
          if (realm.objects(FAVOURITES_SCHEMA).length < 5) {
            realm.create(FAVOURITES_SCHEMA, obj);
            this.getDatabaseResults();
          } else {
            Alert.alert('Err', 'You can select upto 5 favourites');
          }
        });
      });
    }
  };

  fetchMore = () => {
    if (this.state.initial < 51) {
      this.setState(
        {
          initial: this.state.initial + 10,
        },
        () => this.callApi(() => {}, this.state.initial),
      );
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.apiData !== this.props.apiData) {
      this.setState({dataSource: this.props.apiData});
    }
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.props.apiData.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      searchText: text,
    });
  }

  keyExtractor = (item, index) => item.id;

  setLoaderToggle = () => {
    this.setState({loader: !this.state.loader});
  };

  renderCustomItem = ({item, index}) => {
    return (
      <HomeCard
        item={item}
        index={index}
        hasFav={this.state.predefined}
        favToggle={() => this.favToggle(item.id)}
        navigator={() =>
          this.props.navigation.navigate('Detail', {componentData: item})
        }
      />
    );
  };

  itemSeperator = () => {
    return <View style={{height: configuredStyle.size.s10}}></View>;
  };

  render() {
    const {loader, dataSource} = this.state;
    return (
      <Container>
        {loader ? (
          <ActivityIndicator
            visible={loader}
            size="large"
            color={configuredStyle.colors.primary}
            style={{alignSelf: enums.CENTER}}></ActivityIndicator>
        ) : (
          <View style={{flex: 1}}>
            <Text style={pageStyle.header}>Trending GIFS</Text>
            <SearchContainer>
              <Image source={images.search} />
              <TextInput
                style={pageStyle.textInputStyle}
                onChangeText={(text) => this.SearchFilterFunction(text)}
                value={this.state.searchText}
                underlineColorAndroid="transparent"
                placeholder="Search"
                placeholderTextColor={configuredStyle.colors.lightGrey}
              />
            </SearchContainer>
            <FlatList
              data={dataSource}
              style={pageStyle.flat}
              renderItem={this.renderCustomItem}
              ItemSeparatorComponent={this.itemSeperator}
              keyExtractor={this.keyExtractor}
              extraData={this.state}
              onEndReachedThreshold={0.5}
              onEndReached={this.fetchMore}
            />
          </View>
        )}
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: ${enums.CENTER};
  align-items: ${enums.CENTER};
`;

const SearchContainer = styled.View`
  flex-direction: ${enums.ROW};
  width: ${wp(configuredStyle.percentage.p90)};
  align-items: ${enums.CENTER};
  border-width: 1;
  align-self: ${enums.CENTER};
  border-radius: 7;
  padding-left: ${configuredStyle.padding.sm};
  background-color: ${configuredStyle.colors.white};
  border-color: ${configuredStyle.colors.lightGrey};
  height: ${hp('5%')};
  overflow: ${enums.HIDDEN};
  margin-top: ${hp('2.5%')};
`;

const pageStyle = StyleSheet.create({
  flat: {
    width: wp('95%'),
    marginTop: configuredStyle.margin.md,
  },
  header: {
    color: configuredStyle.colors.black,
    fontSize: configuredStyle.fonts.f30,
    fontStyle: 'italic',

    marginTop: configuredStyle.margin.md,
  },
  textInputStyle: {
    height: '120%',
    width: '85%',
    color: configuredStyle.colors.lightGrey,
    marginLeft: configuredStyle.margin.sm,
  },
});

const mapStateToProps = (state) => {
  const {apiData: apiData} = state.apiData;

  return {
    apiData: apiData,
  };
};

export default connect(mapStateToProps, {
  getApiData,
})(Main);
