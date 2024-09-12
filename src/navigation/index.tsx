import Favourite from '@/screens/Favourite'
import Formula from '@/screens/Formula'
import FormulaDetail from '@/screens/FormulaDetail'
import Home from '@/screens/Home'
import Sample from '@/screens/Sample'
import Trick from '@/screens/Trick'
import TrickDetail from '@/screens/TrickDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Formula: undefined
  Favourite: undefined
  FormulaDetail: {
    dataId: string
  }
  Trick: undefined
  TrickDetail: undefined
  Sample: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Các loại vòng',
          headerStyle: {
            backgroundColor: '#9DD6FC',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Formula"
        component={Formula}
      />
      <Stack.Screen
        options={{
          title: 'Các loại vòng',
          headerStyle: {
            backgroundColor: '#9DD6FC',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="FormulaDetail"
        component={FormulaDetail}
      />
      <Stack.Screen
        options={{
          title: 'Vòng ưa thích',
          headerStyle: {
            backgroundColor: '#C7CCFF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Favourite"
        component={Favourite}
      />
      <Stack.Screen
        options={{
          title: 'Thông tin bổ ích',
          headerStyle: {
            backgroundColor: '#C7E6AF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Trick"
        component={Trick}
      />
      <Stack.Screen
        options={{
          title: 'Thông tin bổ ích',
          headerStyle: {
            backgroundColor: '#C7E6AF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="TrickDetail"
        component={TrickDetail}
      />
      <Stack.Screen
        options={{
          title: 'Ký hiệu',
          headerStyle: {
            backgroundColor: '#B1E2ED',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Sample"
        component={Sample}
      />
    </Stack.Navigator>
  )
}
