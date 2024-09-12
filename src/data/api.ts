import AsyncStorage from '@react-native-async-storage/async-storage'

export interface IUserDataObject {
  [dataId: string]: boolean
}

// Save JSON data
const saveData = async (jsonData: IUserDataObject) => {
  try {
    const jsonValue = JSON.stringify(jsonData)
    await AsyncStorage.setItem('@user_data', jsonValue)
    console.log('Data saved successfully')
  } catch (e) {
    console.error('Error saving data:', e)
  }
}

// Load JSON data
const loadData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data')
    return jsonValue != null ? JSON.parse(jsonValue) : {}
  } catch (e) {
    console.error('Error loading data:', e)
  }
}

// Example usage
export interface IUserData {
  dataId: string
  status: boolean
}

const updateUserLiked = async (params: IUserData) => {
  const userData: IUserDataObject = await loadData()
  userData[params.dataId] = params.status // Update data
  await saveData(userData) // Save updated data
}

export { saveData, loadData, updateUserLiked }
