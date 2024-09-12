import { Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  bgColor: string
  iconName?: any
  title: string
  numberOfFormula: number
}

const MenuCard = ({ bgColor, iconName, numberOfFormula, title }: Props) => {
  return (
    <View className="w-full p-4 rounded-2xl" style={{ backgroundColor: bgColor }}>
      <View className="flex-row items-center space-x-2">
        <Ionicons name={iconName || 'apps'} size={40} color={'black'} />
        <View className="flex-1 flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-semibold text-gray-800">{title}</Text>
            <Text className="text-xs font-semibold text-gray-800">
              {numberOfFormula} {title}
            </Text>
          </View>
          <Ionicons name={'arrow-forward'} size={20} color={'black'} />
        </View>
      </View>
    </View>
  )
}

export default MenuCard
