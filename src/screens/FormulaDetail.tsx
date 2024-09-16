/* eslint-disable @typescript-eslint/ban-types */
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'
import { loadData, updateUserLiked } from '@/data/api'
import { data } from '@/data/data'

type Props = {} & NativeStackScreenProps<RootStackParamList, 'FormulaDetail'>

const FormulaDetail = ({ route }: Props) => {
  const dataId = route.params.dataId
  const [liked, setLiked] = useState(false)
  const [dataDetail] = useState(data.find((item) => item.id === dataId))

  useEffect(() => {
    const getLiked = async () => {
      try {
        const userData = await loadData()
        console.log('🚀 ~ getLiked ~ userData:', userData)
        const likedRes = (userData && userData[dataId]) || false
        setLiked(likedRes)
      } catch (err: any) {
        console.log(err)
      }
    }
    getLiked()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addWishList = async () => {
    setLiked((prevState) => !prevState)
    const updateData = {
      dataId,
      status: !liked,
    }
    try {
      await updateUserLiked(updateData)
    } catch (err: any) {
      console.error('🚀 ~ addWishList ~ err:', err.message)
    }
  }

  return (
    <ScrollView className="bg-white flex-1 mb-2">
      <Image source={dataDetail?.image} className="w-full h-80" resizeMode="cover" />
      <View className="p-4 space-y-1">
        <Text className="font-semibold text-2xl text-primary700">{dataDetail?.title}</Text>
        <View className="flex-row items-center justify-between ">
          <Text className="text-lg text-gray-500 mr-2">Độ khó: ({dataDetail?.rating} sao)</Text>
          <TouchableOpacity onPress={addWishList}>
            <View className="flex-row items-center space-x-1">
              <MaterialIcons
                name={`${liked ? 'favorite' : 'favorite-outline'}`}
                color={`${liked ? '#f66' : '#000'}`}
                size={20}
              />
              <Text className={`text-lg ${liked ? 'text-text-liked' : 'text-black'} `}>
                Thêm vào ưa thích
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text className="text-lg text-gray-800 font-bold">Dụng cụ</Text>
          <View className="ml-2">
            {dataDetail?.requirement.map((item, index) => (
              <Text key={index} className="text-base">
                • {item}
              </Text>
            ))}
          </View>
        </View>
        <View className="gap-2">
          <Text className="text-lg text-gray-800 font-bold">Hướng dẫn</Text>
          <View className="">
            {dataDetail?.instruction.map((item, index) => (
              <View key={index} className="gap-2 mb-4">
                <Text className="text-base text-gray-800">
                  <Text className="font-semibold">Bước {index + 1}</Text>: {item.title}
                </Text>
                <View className="">
                  <Image
                    source={item.image}
                    className="w-full h-56"
                    resizeMode="contain"
                    style={{
                      borderRadius: 150 / 2,
                      overflow: 'hidden',
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default FormulaDetail
