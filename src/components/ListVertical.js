import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AddSquare} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
const ItemVertical = ({item, variant, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={itemVertical.cardItem}
      onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={itemVertical.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}>
        <View style={itemVertical.cardContent}>
          <View>
            <View style={itemVertical.cardIcon}>
              <TouchableOpacity onPress={onPress}>
                <AddSquare
                  color={colors.darkModeBlack()}
                  variant={variant}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={itemVertical.cardInfo}>
            <Text style={itemVertical.cardjenis}>{item.kamera}</Text>
          </View>
        </View>
      </FastImage>
      <View style={{flex: 1}}>
        <View
          style={{
            marginHorizontal: 'auto',
            marginVertical: 10,
            backgroundColor: '#EEEEEE',
            elevation: 12,
            padding: 20,
            borderRadius: 1,
          }}>
          <Text style={{fontSize: 12, color: '#001524'}}>
            {itemVertical.cardjenis}
            {item.judul}
          </Text>
          <Text style={{fontSize: 15, color: '#001524'}}>
            {itemVertical.cardjenis}
            {item.kamera}
          </Text>
          <Text style={{fontSize: 17, color: '#001524'}}>
            {itemVertical.cardjenis}
            {item.harga}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const ListVertical = ({data}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const renderItem = ({item}) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemVertical
        item={item}
        variant={variant}
        onPress={() => toggleBookmark(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 15}} />}
      contentContainerStyle={{paddingVertical: 24}}
      Vertical
      showsVerticalScrollIndicator={false}
    />
  );
};
export default ListVertical;
const itemVertical = StyleSheet.create({
  cardItem: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 1,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
