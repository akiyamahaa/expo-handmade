/* eslint-disable @typescript-eslint/ban-types */
import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import TrickCard from '@/components/TrickCard'
import { data_new } from '@/data/data'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'

type Props = {} & NativeStackScreenProps<RootStackParamList, 'Trick'>

// eslint-disable-next-line no-empty-pattern
const Trick = ({ navigation }: Props) => {
  return (
    <View className="py-6 px-5 bg-white flex-1">
      <View className="">
        {data_new.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate('TrickDetail', {
                dataPosition: index,
              })
            }}
          >
            <TrickCard info={item} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Trick
