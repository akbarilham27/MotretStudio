import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Setting2,
  Moneys,
  ArrowLeft,
  Bag2,
  ArchiveTick,
} from 'iconsax-react-native';
import React from 'react';
import { Edit } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ListHorizontal} from '../../components';
import {fontType, colors} from '../../theme';

const formatNumber = number => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + '   Juta';
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + ' Juta';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + '.000 ';
  }
  return number.toString();
};

const data = BlogList.slice(5);
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Bag2 color={colors.black()} variant="Linear" size={27} />
        <ArchiveTick color={colors.black()} variant="Linear" size={27} />
        <Setting2 color={colors.black()} variant="Linear" size={27} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }}>
        <View style={{gap: 15, alignItems: 'center'}}>
          <FastImage
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{gap: 5, alignItems: 'center'}}>
            <Text style={profile.name}>{ProfileData.name}</Text>
            <Text style={profile.info}>
              Terdaftar Pada {ProfileData.createdAt}
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 20}}>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.totalbeli)}
              </Text>
              <Text style={profile.tag}>Total Pembelian</Text>
            </View>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.sum}>{formatNumber(ProfileData.saldo)}</Text>
              <Text style={profile.tag}>Isi Saldo</Text>
            </View>
          </View>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical: 0, gap: 0}}>
          {data.map((item, index) => (
            <ListHorizontal item={item} key={index} />
          ))}
        </View>
        <TouchableOpacity style={profile.buttonNavbar}>
          <Text style={profile.buttonText}>Pesanan </Text>
        </TouchableOpacity>

        <TouchableOpacity style={profile.buttonNavbar}>
          <Text style={profile.buttonText}>Pengiriman </Text>
        </TouchableOpacity>

        <TouchableOpacity style={profile.buttonNavbar}>
          {/* <Moneys size="30" color="#7D7C7C" variant="Bold" /> */}
          <Text style={profile.buttonText}>Pembayaran </Text>
        </TouchableOpacity>

        <TouchableOpacity style={profile.buttonNavbar}>
          <Text style={profile.buttonText}>Voucher </Text>
        </TouchableOpacity>

        <TouchableOpacity style={profile.buttonNavbar}>
          <Text style={profile.buttonText}>Pengaturan Akun </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddBlog')}>
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity> */}
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    size: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
const profile = StyleSheet.create({
  pic: {width: 100, height: 100, borderRadius: 15},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize',
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.5),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: '#7D7C7C',
  },
  buttonNavbar: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
});