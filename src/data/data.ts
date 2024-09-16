export interface IData {
  id: string
  title: string
  image: number
  description: string
  liked?: boolean
  rating: number
  requirement: string[]
  instruction: Array<{
    title: string
    image: number
  }>
}

export const data: IData[] = [
  {
    id: '1',
    title: 'CÁCH XỎ HẠT ĐƠN GIẢN NHẤT',
    image: require('../../assets/img/anhbia.png'),
    rating: 1,
    description: 'Mô tả tổng quan về cách xỏ hạt đơn giản nhất',
    requirement: [
      'Hạt đá',
      `Đoạn dây cước khoảng 5cm`,
      '50cm sợi dây nilon tổng hợp để xâu vòng',
      '1 cái kẹp sợi dây',
      'Cây kéo',
    ],
    instruction: [
      {
        title:
          'Gập sợi cước làm đôi, sợi cước này được dùng như một cây kim để xâu dây qua các hạt',
        image: require('../../assets/img/step1.png'),
      },
      {
        title:
          'Gập sợi dây tổng hợp làm 4 và ước chừng dài hơn cổ tay cần làm vòng, sau đó luồn sợi dây qua sợi cước.',
        image: require('../../assets/img/step2.png'),
      },
      {
        title: 'Dùng đầu sợi cước luồn qua lỗ lần lượt từng hạt một cho đến khi hết',
        image: require('../../assets/img/step3.png'),
      },
      {
        title:
          'Sau khi đủ số lượng hạt cần thiết, bạn bỏ đoạn dây cước ra. Phần đầu dây còn lại, tách chúng ra làm 2 phần (mỗi phần 2 dây), xỏ một phần đó vào phía đầu dây bên kia',
        image: require('../../assets/img/step4.png'),
      },
      {
        title: 'Xê dịch các viên hạt sát lại gần để cho ra như hình dưới',
        image: require('../../assets/img/step5.png'),
      },
      {
        title: 'Buộc 2 đầu dây lại',
        image: require('../../assets/img/step6.png'),
      },
      {
        title: 'Buộc thêm một lần nữa cho chắc chắn',
        image: require('../../assets/img/step7.png'),
      },
      {
        title:
          'Sau khi buộc hai đầu dây lại, sẽ thừa ra một đoạn, dùng kéo và cắt chúng đi (lưu ý khoảng cách cắt cách nút thắt khoảng 1cm là vừa)',
        image: require('../../assets/img/step8.png'),
      },
    ],
  },
]

export interface INew {
  title: string
  image: string
  address: Array<{
    title: string
    phone?: string
  }>
  open: string
  close: string
  description: string
  facebookUrl?: string
  websiteUrl?: string
}

export const data_new: INew[] = [
  {
    title: 'Chợ Đại Quang Minh',
    image: 'https://pos.nvncdn.com/14f951-12134/art/artCT/20221230_WmRDWSlQhn2eWERZiuZ4y9Lz.png',
    address: [
      {
        title: '31 -33 -35 Châu Văn Liêm, P 14, Quận 5, TP HCM',
        phone: '0909090909',
      },
    ],
    open: '08:00',
    close: '18:00',
    description:
      'Chuyên bán: Chuyên cung cấp hàng sỉ nào vòng, dây da, hột cườm, hoa vải, kim chỉ, ren, ruy băng, mặt dây chuyền...với giá cực kỳ rẻ. Vậy nên, đây còn là địa chỉ lấy nguồn hàng nguyên liệu yêu thích của các shop bán đồ handmade ở Sài Gòn.',
    facebookUrl: 'https://www.facebook.com/choadiquangminh',
    websiteUrl: 'https://choadiquangminh.com',
  },
  {
    title: 'Cửa hàng thủ công mỹ nghệ Ngàn Thông',
    image: 'https://gomsumoc.com/wp-content/uploads/2023/06/mua-do-handmade-1.jpg',
    address: [
      {
        title:
          '314 Võ Văn Kiệt, P. Cô Giang, Quận 1, TP HCM (Số cũ: 55A đường Pasteur, P Bến Nghé, Quận 1, TP HCM)',
        phone: '(08) 38365 165',
      },
      {
        title: '64 Lê Lợi, Quận 1, TP HCM',
        phone: '(084) 38258 964',
      },
    ],
    open: '08:00',
    close: '18:00',
    description:
      'Chuyên bán: Shop Ngàn Thông được biết đến với nơi có bán các loại nguyên phụ liệu dùng để gói quà, giấy gói, hoa, nơ, ruy băng nhiều màu sắc.',
    facebookUrl: 'https://www.facebook.com/NganThong64/',
    websiteUrl: 'https://nganthongart.com.vn',
  },
]
