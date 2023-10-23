import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {User, Camera, Moneys} from 'iconsax-react-native';
import {Element3} from 'iconsax-react-native';
import {BlogList, CategoryList} from './data';
import {fontType, colors} from './src/theme';
import {ListHorizontal, ListVertical} from './src/components';

const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.black() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 3}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const ListBlog = () => {
  // const horizontalData = BlogList.slice(0,1);
  const verticalData = BlogList.slice(0, 5);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        {/* <ListHorizontal data={horizontalData} /> */}
        <ListVertical data={verticalData} />
      </View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <User size="25" color="#001524" />
          <View style={{marginRight: 100}}>
            <Text style={{fontSize: 16, color: '#001524'}}>
              Hi, Mohammad Akbar Ilham
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 5,
              backgroundColor: '#D0D4CA',
              elevation: 2,
              padding: 20,
              borderRadius: 15,
            }}>
            <Text style={{fontSize: 32, color: '#001524'}}>Selamat Datang</Text>
            <Text style={{fontSize: 18, color: '#001524'}}>
              di MotretStudio Store{' '}
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 15, color: '#001524', marginVertical: 7}}>
          Apa yang sedang anda Butuhkan?
        </Text>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#B4B4B3"
          style={styles.TextInput}
        />
        <ListBlog />
        <View style={styles.listCategory}>
          <FlatListCategory />
        </View>

        <View style={itemHorizontal.listCard}>
          {/* HALAMAN Admin */}
          <View style={itemVertical.listCard}>
            <View style={itemVertical.cardItem}>
              <Camera size="30" color="#7D7C7C" variant="Bold" />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '100%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={itemVertical.cardIcon}>
                        Servis Kamera & Lensa
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={itemVertical.listCard}>
            <View style={itemVertical.cardItem}>
              <Moneys size="30" color="#7D7C7C" variant="Bold" />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '100%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={itemVertical.cardIcon}>
                        Metode Pembayaran
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={itemVertical.listCard}>
            <View style={itemVertical.cardItem}>
              <User size="30" color="#7D7C7C" variant="Bold" />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '100%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={itemVertical.cardIcon}>Admin 1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={itemVertical.listCard}>
            <View style={itemVertical.cardItem}>
              <User size="30" color="#7D7C7C" variant="Bold" />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '100%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={itemVertical.cardIcon}>Admin 2</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 7,
    borderRadius: 15,
    height: 30,
    paddingLeft: 10,
    marginHorizontal: 1,
    color: '#001524',
    marginVertical: 4,
  },

  header: {
    paddingHorizontal: 4,
    paddingVertical: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },

  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },

  listCard: {
    paddingVertical: 10,
    gap: 10,
    height: 345,
    width: '100%',
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 2,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#F1EFEF',
  },
  cardIcon: {
    alignItems: 'center',
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: '#7D7C7C',
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: '100%',
  },
  cardImage: {
    width: '10%',
    height: 200,
    borderRadius: 5,
  },
  cardImageservis: {
    padding: 200,
    borderRadius: 15,
    width: 100,
    height: 300,
    borderRadius: 5,
  },
  cardbantuan: {
    width: '100%',
    height: 200,
    borderRadius: 5,
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
});
