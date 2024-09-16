import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '@/components/Card'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'
import { data } from '@/data/data'

type Props = NativeStackScreenProps<RootStackParamList, 'Formula'>

const Formula = ({ navigation }: Props) => {
  return (
    <View className="py-6 px-5 bg-white flex-1">
      <View>
        <View className="mt-2 ">
          {data.map((dataElm) => (
            <TouchableOpacity
              key={dataElm.id}
              onPress={() =>
                navigation.navigate('FormulaDetail', {
                  dataId: dataElm.id,
                })
              }
            >
              <Card title={dataElm.title} imageSource={dataElm.image} rating={dataElm.rating} />
            </TouchableOpacity>
          ))}
        </View>
      </View> 
    </View>
  )
}

export default Formula
