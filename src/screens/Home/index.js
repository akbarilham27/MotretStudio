import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,TouchableWithoutFeedback,
  TextInput,
  FlatList,
} from 'react-native';
import {User, SearchNormal1} from 'iconsax-react-native';
import {BlogList, CategoryList} from '../../../data';
import {fontType, colors} from '../../theme';
import {ListVertical, } from '../../components';
import { useNavigation } from "@react-navigation/native";

const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListBlog = () => {
  //   const horizontalData = BlogList.slice(0,1);
  const verticalData = BlogList.slice(0, 3);

  return (
    <View showsVerticalScrollIndicator={true}>
      <View style={styles.listBlog}>
        {/* <ListHorizontal data={horizontalData} /> */}
        <ListVertical data={verticalData} />
      </View>
    </View>
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
      //   showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default function Home() {
  const navigation = useNavigation();
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
{/* 
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
 */}

      <Text style={{fontSize: 15, color: '#001524', marginVertical: 7}}>
        Apa yang sedang anda Butuhkan?
      </Text>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#B4B4B3"
        style={styles.TextInput}
      />
      <View style={styles.listCategory}>
        <FlatListCategory />
      </View>
      <ListBlog />

      <View style={itemHorizontal.listCard}>
        {/* HALAMAN Admin */}
        {/* <TouchableOpacity>
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
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={itemVertical.cardIcon}>
                          Servis Kamera & Lensa
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
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
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={itemVertical.cardIcon}>
                          Metode Pembayaran
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
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
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={itemVertical.cardIcon}>Admin 1</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
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
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={itemVertical.cardIcon}>Admin 2</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity> */}
      </View>
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
    width: '100%',
    paddingVertical: 15,
  },
  listBlog: {
    paddingVertical: 0,
    gap: 10,
    width: '100%',
    height: '88%',
  },

  listCard: {
    paddingVertical: 10,
    gap: 10,
    width: '100%',
    height: '50%',
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
  cardImage: {},
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
