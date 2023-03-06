// Programs
import {
  Mail,
  Password,
  Signout,
  Notifications,
  RateApp,
  Legal,
  ShareWithFriends,
  Help,
  AboutUs,
  PrivacyPolicy,
  TermsOfService,
} from '../assets/images/iconSvg';

import {StatusBar, Platform} from 'react-native';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

import {
  AlbumRedCircle,
  AlbumBlueCircle,
  AlbumPurpleCircle,
} from '../assets/images/iconSvg';

export const circles_colors = {
  'وردة الغابات': AlbumRedCircle,
  'صور الديناصور': AlbumPurpleCircle,
  'العصفور الأزرق': AlbumBlueCircle,
  // 'شمس الشموس': 'yellow'  //or green
};

export const gradient_colors = {
  'وردة الغابات': [
    'rgba(90, 91, 55, 0)',
    'rgba(90, 91, 55, 0.35)',
    'rgb(90, 91, 55)',
  ],
  'صور الديناصور': [
    'rgba(102, 51, 113, 0)',
    'rgba(102, 51, 113, 0.35)',
    'rgb(102, 51, 113)',
  ],
  'العصفور الأزرق': [
    'rgba(83, 144, 255, 0)',
    'rgba(83, 144, 255, 0.7)',
    'rgb(83, 144, 255)',
  ],
  // 'شمس الشموس': 'yellow'  //or green
};

/* const albums = [  
{
"title": "صور الديناصور",
"num": 4,
"img": require('../assets/images/Sor-AlDaynasor.png'),
"icon": AlbumPurpleCircle
},
{
    "title": "وردة الغابات",
    "num": 5,
    "img": require('../assets/images/Wardat-Alghabat-bordered.png'),
    "icon": AlbumRedCircle
    },
    {
        "title": "العصفور الأزرق",
        "num": 9,
        "img": require('../assets/images/Aloasfor-AlAzraq.png'),
        "icon": AlbumBlueCircle
        }

] */

/* const stories = [  
        {
        "title": "الأرنب يبحث\nعن ماما",
        "time": "8:24",
        "img": require('../assets/images/Bear.png')
        },
        {
        "title": "لماذا يصيح\nالديك ثلاثاً",
        "time": "6:13",
        "img": require('../assets/images/Chicken.png')
        },
        {
        "title": "وردة\nالغابات",
        "time": "12:56",
        "img": require('../assets/images/Wardat-Alghabat-small.png')
        },
        ,
        {
        "title": "الفراشات\nالثلاث",
        "time": "11:12",
        "img": require('../assets/images/Butterfly.png')
        },
        {
        "title": "الصياد\nوالسمكة",
        "time": "5:11",
        "img": require('../assets/images/Fish.png')
        },
        // {
        // "title": "العصفور الأزرق",
        // "time": "01:00",
        // "img": require('../assets/images/Aloasfor-AlAzraq.png')
        // }
] */

export const favorites = [
  {
    title: 'الأرنب يبحث\nعن ماما',
    time: '8:24',
    img: require('../assets/images/rabbit-small.png'),
    bg: require('../assets/images/rabbit-bg.png'),
  },
  {
    title: 'وردة\nالغابات',
    time: '12:56',
    img: require('../assets/images/forests-flower-small.png'),
    bg: require('../assets/images/forests-flower-bg.png'),
  },
  {
    title: 'الصياد\nوالسمكة',
    time: '5:11',
    img: require('../assets/images/fisherman-small.png'),
    bg: require('../assets/images/fisherman-bg.png'),
  },
  // {

  //         "title": "وردة\nالغابات",
  //         "time": "12:56",
  //         "img": require('../assets/images/forests-flower-small.png'),
  //         "bg": require('../assets/images/forests-flower-bg.png')
  // },
  // {
  //         "title": "الصياد\nوالسمكة",
  //         "time": "5:11",
  //         "img": require('../assets/images/fisherman-small.png'),
  //         "bg": require('../assets/images/fisherman-bg.png')
  // },
];

export const children = [
  {
    gender: 'M',
    name: 'محمد',
    age: 2,
  },
  {
    gender: 'F',
    name: 'سهام',
    age: 6,
  },
  // {
  //         "gender": "F",
  //         "name": "سهام",
  //         "age": 6
  // },
  // {
  //         "gender": "F",
  //         "name": "سهام",
  //         "age": 6
  // },
  // {
  //         "gender": "F",
  //         "name": "سهام",
  //         "age": 6
  // },
];

export const settingsCells = [
  {
    title: 'الإيميل',
    Icon: Mail,
    hint: 'moatasem@gmail.com',
    goTo: true,
    goToScreen: 'ChangeEmail',
  },
  {
    title: 'كلمة المرور',
    Icon: Password,
    hint: 'تغيير',
    goTo: true,
    goToScreen: 'ChangePassword',
  },
  {
    title: 'تسجيل الخروج',
    Icon: Signout,
    hint: '',
    goTo: true,
    goToScreen: 'Login',
  },
  {
    title: 'تفعيل التنبيهات',
    Icon: Notifications,
    hint: '',
    goTo: true,
  },
  {
    title: 'قيم التطبيق',
    Icon: RateApp,
    hint: '',
    goTo: true,
  },
  {
    title: 'شارك التطبيق مع أصدقائك',
    Icon: ShareWithFriends,
    hint: '',
    goTo: true,
  },
  {
    title: 'المساعدة والدعم',
    Icon: Help,
    hint: '',
    goTo: true,
  },
  {
    title: 'تعرف علينا',
    Icon: AboutUs,
    hint: '',
    goTo: true,
  },
  {
    title: 'الخصوصية',
    Icon: PrivacyPolicy,
    hint: '',
    goTo: true,
  },
  {
    title: 'شروط الاستخدام',
    Icon: TermsOfService,
    hint: '',
    goTo: true,
  },
  {
    title: 'الاستخدام القانوني',
    Icon: Legal,
    hint: '',
    goTo: true,
  },
  {
    title: 'كلمة المرور الحالية',
    Icon: Password,
    hint: '******',
    goTo: false,
    type: 'password',
  },
  {
    title: 'كلمة المرور الجديدة',
    Icon: Password,
    hint: '******',
    goTo: false,
    type: 'password',
  },
  {
    title: 'الإيميل الحالي',
    Icon: Mail,
    hint: 'moatasem@gmail.com',
    goTo: false,
  },
  {
    title: 'الإيميل الجديد',
    Icon: Mail,
    hint: 'moatasem.kh',
    goTo: false,
  },
];

export const signupCells = [
  {
    title: 'الإيميل',
    Icon: Mail,
    hint: 'moatasem@gmail.com',
    goTo: false,
  },
  {
    title: 'كلمة المرور',
    Icon: Password,
    hint: '******',
    goTo: false,
    type: 'password',
  },
  {
    title: 'تأكيد كلمة المرور',
    Icon: Password,
    hint: '******',
    goTo: false,
    type: 'password',
  },
];

module.exports = {
  circles_colors,
  gradient_colors,
  favorites,
  children,
  settingsCells,
  signupCells,
  STATUSBAR_HEIGHT,
};
