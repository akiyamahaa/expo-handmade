import MenuCard from '@/components/home/MenuCard'
import { RootStackParamList } from '@/navigation'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import {
  ImageBackground,
  Linking,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Props) => {
  const navigateFanpage = () => {
    Linking.openURL('https://www.google.com').catch((err) =>
      console.error('Failed to open URL: ', err),
    )
  }
  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1"
        resizeMode="cover"
        source={require('../../assets/img/bg.png')}
      >
        <SafeAreaView className="flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
          <View className="px-5 space-y-6">
            <View>
              <Text className="text-base text-gray-500">Ứng dụng dạy làm vòng thủ công</Text>
              <Text className="text-[48px] text-gray-800">Beads Threads</Text>
            </View>
            {/* For you */}
            <View className="space-y-4">
              <Text className="text-[20px] font-semibold text-gray-800">Dành cho bạn</Text>
              <View className="flex-row flex-wrap">
                <TouchableOpacity
                  className="w-full p-1"
                  onPress={() => {
                    navigation.navigate('Formula')
                  }}
                >
                  <MenuCard
                    bgColor="#9DD6FC"
                    numberOfFormula={32}
                    title="Các loại vòng"
                    iconName="build-outline"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  className="w-full p-1"
                  onPress={() => {
                    navigation.navigate('Favourite')
                  }}
                >
                  <MenuCard
                    bgColor="#C7CCFF"
                    numberOfFormula={32}
                    title="Mục ưa thích"
                    iconName="bookmark-outline"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  className="w-full p-1"
                  onPress={() => {
                    navigation.navigate('Trick')
                  }}
                >
                  <MenuCard
                    bgColor="#C7E6AF"
                    numberOfFormula={32}
                    title="Thông tin bổ ích"
                    iconName="bulb-outline"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="space-y-4">
              <Text className="text-[20px] font-semibold text-gray-800">Mạng xã hội</Text>
              <TouchableOpacity onPress={navigateFanpage}>
                <View
                  className="w-full rounded-2xl p-4 flex-row items-center justify-between"
                  style={{ backgroundColor: '#FFA31066' }}
                >
                  <View className="space-y-2">
                    <View className="flex-row items-center space-x-2">
                      <Ionicons name="logo-facebook" size={24} color="#2563EB" />
                      <Text className="text-base font-semibold text-gray-800">
                        Cộng đồng vòng Handmade
                      </Text>
                    </View>
                    <View className="max-w-[256px]">
                      <Text className="text-gray-800">
                        Kết nối những người cùng đam mê, chia sẻ kinh nghiệm và sản phẩm.
                      </Text>
                    </View>
                  </View>
                  <Ionicons name="arrow-forward-circle-outline" size={32} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default Home
