import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
  SearchNormal1,
} from 'react-native';
import {
  Notification,
  Receipt21,
  Clock,
  Message,
  Setting,
  Menu,
  ArrowLeft,
  MoneyRecive,
  User,Camera,Moneys,
} from 'iconsax-react-native';
import {fontType, colors} from './src/theme';

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
              backgroundColor: '#EEEEEE',
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

        <TextInput
          placeholder="Search"
          placeholderTextColor="#B4B4B3"
          style={styles.TextInput}
        />
        <View style={itemHorizontal.listCard}>
          <View style={itemHorizontal.cardItem}>
            <Image
              style={itemHorizontal.cardImage}
              source={{
                uri: 'https://4.bp.blogspot.com/-T0rrdQjQ9Bk/Wj4n9RKk4nI/AAAAAAAAAYY/7XGt2fWN93IRyz1bDdOHMYWv1CohX-KeACLcBGAs/s640/Canon-EOS-6D-Mark-II.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 2, width: '100%'}}>
                  <Text style={itemVertical.cardCategory}>Kamera Canon</Text>
                  <Text style={itemVertical.cardTitle}>
                    Kamera EOS 6D Mark II
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                {/* <MoneyRecive size={16} variant="Bold" color={colors.grey(0.6)} /> */}
                <Text style={itemVertical.cardText}>Rp. 15.000.000</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Tersedia 10 </Text>
              </View>
            </View>
          </View>

          <View style={itemHorizontal.cardItem}>
            <Image
              style={itemHorizontal.cardImage}
              source={{
                uri: 'https://www.pixel.web.id/wp-content/uploads/2022/05/Sony-Alpha-A7-IV.jpeg.webp',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 2, width: '100%'}}>
                  <Text style={itemVertical.cardCategory}>Kamera Sony</Text>
                  <Text style={itemVertical.cardTitle}>Kamera Sony A7</Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                {/* <MoneyRecive size={16} variant="Bold" color={colors.grey(0.6)} /> */}
                <Text style={itemVertical.cardText}>Rp. 21.000.000</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Tersedia 4 </Text>
              </View>
            </View>
          </View>

          <View style={itemHorizontal.cardItem}>
            <Image
              style={itemHorizontal.cardImage}
              source={{
                uri: 'https://www.crkennedy.com.au/division/sigma/slider/assets/lens.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 2, width: '100%'}}>
                  <Text style={itemVertical.cardCategory}>Lensa</Text>
                  <Text style={itemVertical.cardTitle}>
                    Lensa Kamera DSLR & Mirrorless
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                {/* <MoneyRecive size={16} variant="Bold" color={colors.grey(0.6)} /> */}
                <Text style={itemVertical.cardText}>Rp. 1.000.000</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Tersedia </Text>
              </View>
            </View>
          </View>

          <View style={styles.listBlog}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}></ScrollView>
            <View style={styles.listCategory}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{...category.item, marginLeft: 10}}>
                  <Text style={{...category.title, color: colors.black()}}>
                    Lainnya
                  </Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.listCategory}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity styles={{backgroundColor: '#FFF2D8'}}>
                  <View style={category.item}>
                    <Text style={category.title}>Kamera</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity styles={{backgroundColor: '#FFF2D8'}}>
                  <View style={category.item}>
                    <Text style={category.title}>Lensa</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity styles={{backgroundColor: '#FFF2D8'}}>
                  <View style={category.item}>
                    <Text style={category.title}>Aksesoris</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity styles={{backgroundColor: '#FFF2D8'}}>
                  <View style={category.item}>
                    <Text style={category.title}>Servis</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity styles={{backgroundColor: '#FFF2D8'}}>
                  <View style={category.item}>
                    <Text style={category.title}>Hubungi Kami</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
          
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
                      <Text style={itemVertical.cardIcon}>Servis Kamera & Lensa</Text>
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
                      <Text style={itemVertical.cardIcon}>Metode Pembayaran</Text>
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
    backgroundColor: colors.white(),
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
    marginVertical: 15,
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
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
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
    paddingHorizontal: 24,
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
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardImageservis: {
    padding: 20,
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
