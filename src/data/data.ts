export interface IData {
  id: string
  title: string
  image: number
  description: string
  liked?: boolean
}

export const data: IData[] = [
  {
    id: '1',
    title: 'Title 1',
    image: require('../../assets/img/sample1.png'),
    description: 'Description 1',
  },
  {
    id: '2',
    title: 'Title 2',
    image: require('../../assets/img/sample1.png'),
    description: 'Description 2',
  },
]
