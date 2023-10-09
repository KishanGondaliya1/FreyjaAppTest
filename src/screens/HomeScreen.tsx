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
import {blackColor, whiteColor} from '../utils/Colors';
import icons from '../assets/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';

/** types */
type NavigationProps = {
  navigation: any;
  productListArray: Array<{}>;
};

/** Constant */
const numColumns = 3;
const size = Dimensions.get('window').width / numColumns;

/** key extractore to identify unique */
const _keyExtractor = (item, index) => index.toString();

const HomeScreen: React.FC<NavigationProps> = ({
  navigation,
}: {
  navigation: any;
}) => {
  /** define state - array list of the collection list item */
  const [productList, setProductList] = useState([
    {
      id: 1,
      author: 'Ben Moore',
      width: 4320,
      height: 3240,
      download_url: 'https://picsum.photos/id/102/4320/3240',
      isFavorite: false,
    },
    {
      id: 2,
      author: 'Ilham Rahmansyah',
      width: 2592,
      height: 1936,
      download_url: 'https://picsum.photos/id/103/2592/1936',
      isFavorite: false,
    },
    {
      id: 3,
      author: 'Dyaa Eldin',
      width: 3840,
      height: 2160,
      download_url: 'https://picsum.photos/id/104/3840/2160',
      isFavorite: false,
    },
    {
      id: 4,
      author: 'Arvee Marie',
      width: 2592,
      height: 1728,
      download_url: 'https://picsum.photos/id/106/2592/1728',
      isFavorite: false,
    },
    {
      id: 5,
      author: 'Lukas Schweizer',
      width: 5000,
      height: 3333,
      download_url: 'https://picsum.photos/id/107/5000/3333',
    },
    {
      id: 6,
      author: 'Florian Klauer',
      width: 2000,
      height: 1333,
      download_url: 'https://picsum.photos/id/108/2000/1333',
    },
    {
      id: 7,
      author: 'Zwaddi',
      width: 4287,
      height: 2392,
      download_url: 'https://picsum.photos/id/109/4287/2392',
    },
    {
      id: 8,
      author: 'Kenneth Thewissen',
      width: 5000,
      height: 3333,
      download_url: 'https://picsum.photos/id/110/5000/3333',
      isFavorite: false,
    },
    {
      id: 9,
      author: 'Gabe Rodriguez',
      width: 4400,
      height: 2656,
      download_url: 'https://picsum.photos/id/111/4400/2656',
      isFavorite: false,
    },
    {
      id: 10,
      author: 'Zugr',
      width: 4200,
      height: 2800,
      download_url: 'https://picsum.photos/id/112/4200/2800',
      isFavorite: false,
    },
    {
      id: 11,
      author: 'Zugr',
      width: 4168,
      height: 2464,
      url: 'https://unsplash.com/photos/yZf1quatKCA',
      download_url: 'https://picsum.photos/id/113/4168/2464',
      isFavorite: false,
    },
    {
      id: 12,
      author: 'Brian Gonzalez',
      width: 3264,
      height: 2448,
      url: 'https://unsplash.com/photos/llYg8Ni43fc',
      download_url: 'https://picsum.photos/id/114/3264/2448',
      isFavorite: false,
    },
    {
      id: 13,
      author: 'Christian Hebell',
      width: 1500,
      height: 1000,
      url: 'https://unsplash.com/photos/A6S-q3D67Ss',
      download_url: 'https://picsum.photos/id/115/1500/1000',
      isFavorite: false,
    },
    {
      id: 14,
      author: 'Anton Sulsky',
      width: 3504,
      height: 2336,
      url: 'https://unsplash.com/photos/YcfCXxo7rpc',
      download_url: 'https://picsum.photos/id/116/3504/2336',
      isFavorite: false,
    },
    {
      id: 15,
      author: 'Daniel Ebersole',
      width: 1544,
      height: 1024,
      url: 'https://unsplash.com/photos/Q14J2k8VE3U',
      download_url: 'https://picsum.photos/id/117/1544/1024',
      isFavorite: false,
    },
    {
      id: 16,
      author: 'Rick Waalders',
      width: 1500,
      height: 1000,
      url: 'https://unsplash.com/photos/d-Cr8MEW5Uc',
      download_url: 'https://picsum.photos/id/118/1500/1000',
      isFavorite: false,
    },
    {
      id: 17,
      author: 'Nadir Balcikli',
      width: 3264,
      height: 2176,
      url: 'https://unsplash.com/photos/wE9nUW7tMmk',
      download_url: 'https://picsum.photos/id/119/3264/2176',
      isFavorite: false,
    },
    {
      id: 18,
      author: 'Guillaume',
      width: 4928,
      height: 3264,
      url: 'https://unsplash.com/photos/_DA3D5P71qs',
      download_url: 'https://picsum.photos/id/120/4928/3264',
      isFavorite: false,
    },
    {
      id: 19,
      author: 'Radio Pink',
      width: 1600,
      height: 1067,
      url: 'https://unsplash.com/photos/p-bkdO43shE',
      download_url: 'https://picsum.photos/id/121/1600/1067',
      isFavorite: false,
    },
    {
      id: 20,
      author: 'Vadim Sherbakov',
      width: 4147,
      height: 2756,
      url: 'https://unsplash.com/photos/xS_RzdD5CFE',
      download_url: 'https://picsum.photos/id/122/4147/2756',
      isFavorite: false,
    },
    {
      id: 21,
      author: 'Mark Doda',
      width: 4928,
      height: 3264,
      url: 'https://unsplash.com/photos/tS9hJOnmKK8',
      download_url: 'https://picsum.photos/id/123/4928/3264',
      isFavorite: false,
    },
    {
      id: 22,
      author: 'Anton Sulsky',
      width: 3504,
      height: 2336,
      url: 'https://unsplash.com/photos/fj0tFloTPGQ',
      download_url: 'https://picsum.photos/id/124/3504/2336',
      isFavorite: false,
    },
    {
      id: 23,
      author: 'Rick Waalders',
      width: 1500,
      height: 1000,
      url: 'https://unsplash.com/photos/3HlgJNdnD7I',
      download_url: 'https://picsum.photos/id/125/1500/1000',
      isFavorite: false,
    },
  ]);

  /**
   *  Component life cycle
   */
  useEffect(() => {
    AsyncStorage.getItem('FAVOURITELIST').then((value: any) => {
      console.log('getProductListData', value);

      let productListromStorage = JSON.parse(value);

      console.log('getProductListData', productList);

      if (productListromStorage == null) {
        setProductList(productList);
      } else {
        setProductList(productListromStorage);
      }
    });
  }, []);

  const callFavouriteUnFavouriteFunction = (selectedItem: any) => {
    const updatedData = productList.map((item: any) => {
      if (item.id === selectedItem.id) {
        return {...item, isFavorite: !item.isFavorite};
      }
      return item;
    });
    setProductList(updatedData);

    AsyncStorage.setItem('FAVOURITELIST', JSON.stringify(updatedData));
  };

  /**
   * @item  list item object
   * @index Index of the item object
   * Render winter collection product items */
  const renderProductItem = ({item, index}) => {
    return (
      <View style={styles.productListContainer}>
        <FastImage
          style={styles.productImage}
          source={{uri: item.download_url}}
        />
        <TouchableOpacity
          style={styles.favouriteIconContainer}
          onPress={() => {
            callFavouriteUnFavouriteFunction(item);
          }}>
          <Image
            style={styles.favouriteIconStyle}
            source={
              item.isFavorite === true
                ? icons.favouriteIcon
                : icons.unFavouriteIcon
            }
          />
        </TouchableOpacity>
      </View>
    );
  };

  /** Screen rendring  */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('FavouriteListScreen');
            }}>
            <Image
              source={icons.unFavouriteIcon}
              style={styles.headerIconStyle}
              tintColor={blackColor}
            />
          </TouchableOpacity>
          <Text style={styles.headerTextStyle}>Freyja</Text>
          <Image source={icons.cartIcon} style={styles.headerIconStyle} />
        </View>
        <View style={styles.searchContainer}>
          <Image source={icons.searchIcon} style={styles.searchIconStyle} />
          <TextInput style={styles.searchTextStyle} placeholder="Search" />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={productList}
          renderItem={renderProductItem}
          keyExtractor={_keyExtractor}
          numColumns={numColumns}
          style={{
            paddingVertical: 10,
            marginLeft: '5%',
          }}
          bounces={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

/** Styles css applied */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '95%',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerIconStyle: {
    height: 25,
    width: 25,
  },
  searchIconStyle: {
    height: 20,
    width: 20,
  },
  headerTextStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 8,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    // backgroundColor: 'aqua',
    borderWidth: 0.3,
    marginVertical: 8,
  },
  searchTextStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 10,
    // textAlign: 'center',
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
  favouriteIconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  favouriteIconStyle: {
    height: 20,
    width: 20,
  },
});
