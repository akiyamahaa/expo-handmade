import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'
import { loadData } from '@/data/api'
import { data, IData } from '@/data/data'

type Props = NativeStackScreenProps<RootStackParamList, 'Favourite'>

const Favourite = ({ navigation }: Props) => {
  const [listFavourite, setListFavourite] = useState<IData[]>([])

  useEffect(() => {
    const getListFavourite = async () => {
      const userData = await loadData()
      const favouritesList = data.filter((obj) => userData[obj.id])
      console.log('🚀 ~ getListFavourite ~ favouritesList:', favouritesList)
      setListFavourite(favouritesList)
    }
    getListFavourite()
  }, [])
  return (
    <View className="py-6 px-5 bg-white flex-1">
      <View>
        <Text className="text-[20px] text-gray-800 font-semibold">
          Danh sách vòng ưa thích của bạn
        </Text>
        <View className="mt-2 ">
          {listFavourite.map((data) => (
            <TouchableOpacity
              key={data.id}
              onPress={() =>
                navigation.navigate('FormulaDetail', {
                  dataId: data.id,
                })
              }
            >
              <Card title={data.title} imageSource={data.image} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

export default Favourite
