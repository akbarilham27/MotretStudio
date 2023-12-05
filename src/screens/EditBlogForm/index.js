import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {ArrowLeft, Verify} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import axios from 'axios';

const EditBlogForm = ({route}) => {
  const {blogId} = route.params;
  const dataCategory = [
    {id: 1, name: ' Kamera  '},
    {id: 2, name: ' Lensa '},
    {id: 3, name: ' Aksesoris'},
    {id: 4, name: 'Penyewaan'},
  ];
 
  const [blogData, setBlogData] = useState({
    judul: '',
    kamera: '',
    harga: '',
    category: {},
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const [harga, setHarga] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBlogById();
  }, [blogId]);

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `https://656c4b10e1e03bfd572e28c6.mockapi.io/blog/${blogId}`,
      );
      setBlogData({
        judul: response.data.judul,
        kamera: response.data.kamera,
        harga: response.data.harga,
        category: {
          id: response.data.category.id,
          name: response.data.category.name,
        },
      });
      setImage(response.data.image);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios
        .put(`https://656c4b10e1e03bfd572e28c6.mockapi.io/blog/${blogId}`, {
          judul: blogData.judul,
          kamera: blogData.kamera,
          image,
          harga,
          category: blogData.category,
          content: blogData.content,
          createdAt: new Date(),
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Edit Postingan</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonLabel}>Update</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Nama Barang"
            value={blogData.judul}
            onChangeText={text => handleChange('judul', text)}
            placeholderTextColor={colors.black(0.6)}
            multiline
            style={textInput.judul}
          />
        </View>
        <View style={[textInput.borderDashed, {minHeight: 20}]}>
          <TextInput
            placeholder="Tulis Keterangan ....."
            value={blogData.kamera}
            onChangeText={text => handleChange('kamera', text)}
            placeholderTextColor={colors.black(0.6)}
            multiline
            style={textInput.kamera}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Harga"
            keyboardType="numeric"
            value={harga}
            onChangeText={text => setHarga(text)}
            placeholderTextColor={colors.black(0.6)}
            multiline
            style={textInput.harga}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={text => setImage(text)}
            placeholderTextColor={colors.black(0.6)}
            style={textInput.content}
          />
        </View>
        {/* <View style={[textInput]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontType['Pjs-Bold'],
              color: colors.black(0.6),
            }}>
            Kondisi
          </Text>
          <View style={category.container}>
            {dataJenis.map((item, index) => {
              const bgColor =
                item.id === blogData.category.id
                  ? colors.black()
                  : colors.grey(0.08);
              const color =
                item.id === blogData.category.id
                  ? colors.white()
                  : colors.grey();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange('category', {id: item.id, name: item.name})
                  }
                  style={[category.item, {backgroundColor: bgColor}]}>
                  <Text style={[category.name, {color: color}]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View> */}
        <View style={[textInput]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontType['Pjs-Bold'],
              color: colors.black(0.6),
            }}>
            Jenis
          </Text>
          <View style={category.container}>
            {dataCategory.map((item, index) => {
              const bgColor =
                item.id === blogData.category.id
                  ? colors.black()
                  : colors.black(0.08);
              const color =
                item.id === blogData.category.id
                  ? colors.white()
                  : colors.white();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange('category', {id: item.id, name: item.name})
                  }
                  style={[category.item, {backgroundColor: bgColor}]}>
                  <Text style={[category.name, {color: color}]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity onPress={() => handleChange()}>
          <Verify color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{marginRight: 1}}>
          <Text style={{fontSize: 14, color: '#001524'}}>
            Saya Telah Memasukan Data Dengan Benar
          </Text>
        </View>
      </ScrollView>

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.blue()} />
        </View>
      )}
    </View>
  );
};

export default EditBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCA37F',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.white(),
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#B99470',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    borderColor: colors.black(0.9),
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.6),
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
  },
});
