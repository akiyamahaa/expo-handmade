import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'
import { data_new } from '@/data/data'
import { Facebook, Global } from 'iconsax-react-native'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {} & NativeStackScreenProps<RootStackParamList, 'TrickDetail'>

const TrickDetail = ({ route }: Props) => {
  const { dataPosition } = route.params
  const dataDetail = data_new[dataPosition]

  const navigateUrl = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL: ', err))
  }

  return (
    <ScrollView className="bg-white flex-1 mb-2">
      <Image source={{ uri: dataDetail.image }} className="w-full h-60" resizeMode="cover" />
      <View className="p-4 space-y-1">
        <Text className="font-semibold text-2xl text-primary700">{dataDetail.title}</Text>
        <View>
          <Text className="text-lg font-bold">Các cơ sở</Text>
          <View className="ml-4">
            {dataDetail.address.map((item, index) => (
              <View key={index} className="mb-2">
                <Text className="text-base font-semibold">Chi nhánh {index + 1}</Text>
                <View className="">
                  <Text className="text-base">Địa chỉ: {item.title}</Text>
                  {item.phone && <Text className="text-base">Số điện thoại: {item.phone}</Text>}
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text className="text-lg font-bold">Thông tin cửa hàng</Text>
          <Text className="text-base ">{dataDetail.description}</Text>
        </View>
        <View>
          <Text className="text-lg font-bold">Kết nối với chúng tôi</Text>
          <View className="flex-row space-x-2">
            {dataDetail.facebookUrl && (
              <TouchableOpacity onPress={() => navigateUrl(dataDetail.facebookUrl!)}>
                <Facebook size="40" color="#4267B2" variant="Bold" />
              </TouchableOpacity>
            )}
            {dataDetail.websiteUrl && (
              <TouchableOpacity onPress={() => navigateUrl(dataDetail.websiteUrl!)}>
                <Global size="40" color="#4267B2" variant="Bold" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default TrickDetail
