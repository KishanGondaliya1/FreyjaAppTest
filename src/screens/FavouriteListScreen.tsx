import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {whiteColor} from '../utils/Colors';
import icons from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';

/** types */
type NavigationProps = {
  navigation: any;
};

/** Constant */
const numColumns = 3;
const size = Dimensions.get('window').width / numColumns;

/** key extractore to identify unique */
const _keyExtractor = (item, index) => index.toString();

const FavouriteListScreen: React.FC<NavigationProps> = ({
  navigation,
}: {
  navigation: any;
}) => {
  /** define state */
  const [favouriteList, setFavouriteList] = useState([]);

  /**
   *  Component life cycle
   */
  useEffect(() => {
    AsyncStorage.getItem('FAVOURITELIST').then(value => {
      console.log('getProductListData111', value);

      if (value?.length > 0) {
        let productList = JSON.parse(value);
        console.log('getProductListData', productList);
        filterFavouriteData(productList);
      } else {
        console.log('InElse');
      }
    });
  }, []);

  /**
   * @productList  passing the list of winter collection items
   * Getting filter favorite list */
  const filterFavouriteData = productList => {
    let storeData = productList.filter(function (item) {
      return item.isFavorite == true;
    });

    console.log('storeData', storeData);
    setFavouriteList(storeData);
  };

  /**
   * @item  list item object
   * @index Index of the item object
   * Render favorite items */
  const renderFavouriteItem = ({item, index}) => {
    return (
      <View style={styles.productListContainer}>
        <FastImage
          style={styles.productImage}
          source={{uri: item.download_url}}
        />
      </View>
    );
  };

  /** Screen rendring  */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <Image source={icons.backIcon} style={styles.headerIconStyle} />
          </TouchableOpacity>
          <Text style={styles.headerTextStyle}>Favourite</Text>
        </View>
        <View style={styles.searchContainer}>
          <Image source={icons.searchIcon} style={styles.searchIconStyle} />
          <TextInput style={styles.searchTextStyle} placeholder="Search" />
        </View>
        {favouriteList.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={favouriteList}
            renderItem={renderFavouriteItem}
            keyExtractor={_keyExtractor}
            numColumns={numColumns}
            style={{
              paddingVertical: 10,
              marginLeft: '5%',
            }}
            bounces={false}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text> You have not any favourite yet</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default FavouriteListScreen;

/** Styles css applied */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerIconStyle: {
    height: 25,
    width: 25,
  },
  headerTextStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  productListContainer: {
    width: size - 10,
    height: size - 10,
  },
  productImage: {
    flex: 1,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 8,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.3,
    marginVertical: 8,
  },
  searchTextStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 10,
  },
  searchIconStyle: {
    height: 20,
    width: 20,
  },
});
