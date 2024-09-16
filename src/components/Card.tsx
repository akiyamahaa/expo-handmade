import { Image, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import StarRating from './StarRating'
import { Ranking } from 'iconsax-react-native'

type Props = {
  imageSource: number
  title: string
  rating: number
}

const Card = ({ imageSource, title, rating }: Props) => {
  return (
    <View className="w-full p-2 mb-2 rounded-2xl bg-coolgray100 flex-row justify-between items-center">
      <View className="flex-row items-center space-x-4 flex-1">
        <Image source={imageSource} className="w-24 h-24 rounded-lg" />
        <View className="flex-1 flex-col">
          <Text className="text-base font-semibold text-gray-800 mb-2">{title}</Text>
          <StarRating ratingValue={rating} />
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="black" />
    </View>
  )
}

export default Card
