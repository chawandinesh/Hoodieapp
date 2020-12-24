import { Dimensions, Platform, Alert } from 'react-native';
import moment from 'moment';


const { width, height } = Dimensions.get('window');

export const responsiveHeight = (h) => height * (h / 100);
export const WIDTH = (w) => width * (w / 375);
export const HEIGHT = (h) => height * (h / 812);
export const getWidth = () => width;
export const getHeight = () => height;
export const getLineHeight = (f) => (f)
export const getFont = (f) => (f - 1)
export const validateEmail = (str) => {
  let re = /^([^<>()\[\]\\.,;:\s@"]+((?:\.[a-zA-Z0-9_]+)*))@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,3}$/
  let check = re.test(str.toString())
  return check
}
export const validatePhone = str => {
  let re = /^[0-9\+]{9,11}$/
  return re.test(str)
}
export const validateName = (str) => {
  let re = /^[ A-Za-z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/
  return re.test(str)
}


export const isIos = Platform.OS === 'ios'

export const Gender = {
  male: 0,
  female: 1
}

export const ShowGender = (gender, lang = 'en') => {
  let result = gender
  if (gender !== undefined && gender != null) {
    if (lang === 'vi') {
      result = gender === Gender.male ? 'Nam' : 'nữ'
    } else {
      result = gender === Gender.male ? 'Male' : 'Female'
    }
  }
  return result
}

// định dạng giá 50,000,000
export const toPrice = str => (str ? `${str.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vn₫` : `${0} vn₫`)

// cắt chuỗi dạng something...
export const ellipsis = (str = '', max = 30) => ((str.length > max) ? `${str.substring(0, max)}...` : str)

// tính chiều rộng của item dưới dạng flatlist
export const itemWidth = (numColumns, padding) => {
  let totalPadding = padding * (numColumns + 1)
  let w = (width - totalPadding) / numColumns
  return w
}

// chuyển string thành dạng viết hoa
export const toUpperCase = str => (str ? str.toUpperCase() : '')

export const sortType = {
  sortDefault: 1,
  latestNews: 2,
  priceUp: 3,
  priceDown: 4
}

// xóa item khỏi array
export const removeItemFromArr2 = (items, index) => {
  let fill = items.filter((e, i) => i !== index)
  return fill
}

export const removeItemFromArr = (items, index) => {
  items.splice(index, 1)
  return items
}

// tính tổng 1 field trong array object
export const totalByValue = (data, field) => (data.length === 0 ? 0 : data.map(item => item[field]).reduce((prev, next) => prev + next))

// hiện thông báo dạng
export const popupOk = (title, msg, onPress = null) => {
  Alert.alert(
    title,
    msg,
    [
      { text: 'Ok', style: 'ok', onPress: onPress || (() => null) }
    ],
    { cancelable: false }
  )
}

export const popupCancel = (title, msg, onPress = null) => {
  Alert.alert(
    title,
    msg,
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Ok', style: 'ok', onPress: onPress || (() => null) }
    ],
    { cancelable: false }
  )
}


export const cutStringBetweenCharacters = (str, char1, char2, addFirst) => {
  let re = `\\${char1}([^${char2}]+)\\${char2}`
  let reg = new RegExp(re)
  let s = reg.exec(str) ? reg.exec(str)[1] : ''
  return addFirst ? char1 + s : s
}
export const mark = (str, char1, char2, tag, endTag) => {
  let re = `\\${char1}(.*?)\\${char2}`
  let reg = new RegExp(re, 'gi')
  return str.replace(reg, `<${tag}>$1</${endTag || tag}>12`)
}

export const cutStringBetweenCharacters2 = (str, char1, char2, addFirst) => {
  let s = str.split(char1).pop().split(char2)[0]
  return addFirst ? char1 + s : s
}

export const replaceStrByIndex = (str, index, newStr) => str.substr(0, index) + newStr + str.substr(index + 1)

export const formatTimeStr = time => time.replace('một', '1').replace('hai', '2').replace('vài giây trước', 'vừa xong')

global.langCode = 'vi'

export const getLangCode = () => global.langCode
export const setLangCode = langCode => {
  global.langCode = langCode
}


export const formatDateTime = time => moment(time, 'DD/MM/YYYY').locale('vi').format('dddd (DD/MM/YYYY)')


export const VideoMimeType = {
  flv: 'video/x-flv',
  mp4: 'video/mp4',
  m3u8: 'application/x-mpegURL',
  ts: 'video/MP2T',
  '3gp': 'video/3gpp',
  mov: 'video/quicktime',
  avi: 'video/x-msvideo',
  wmv: 'video/x-ms-wmv'
}

export const StringFromLastCharacter = (str, char) => str.substring(str.lastIndexOf(char) + 1)

export const toArrayBySeparators = (str, separators) => {
  /**
   * example: txt = "aaaa55bbb33cccc" => ["aaaa", "55", "bbb", "33", "cccc"]
   * toArrayBySeparators(txt, [55,33])
   */
  let reg = new RegExp(`(${separators.join('|')})`)
  return str
    .split(reg)
    .filter(x => x.length > 0)
    .map(x => x)
}

export const getRange = (startDate, endDate, type) => {
  let fromDate = moment(startDate)
  let toDate = moment(endDate)
  let range = []
  let range2 = []
  // for (let i = 0; i < diff; i++) {
  //   console.log('diff: ', diff);
  //   range.push(moment(startDate).add(i, type))
  // }
  while (toDate > fromDate || fromDate.format('M') === toDate.format('M')) {
    range.push(fromDate);
    range2.push(fromDate.format('DD/MM'));
    fromDate.add(1, type);
  }
  return range2
}

export const getFirstAndLastWords = (text) => {
  let t = text.split(' ');
  return `${t[0]} ${t[t.length - 1]}`;
}

export const shortFullname = (text) => {
  let arr = text.split(' ');
  let name = ''
  arr.forEach((e, i) => {
    if (i === 0) {
      name += `${e} `
    } else if (i === arr.length - 1) {
      name += arr.length === 2 ? e : ` ${e}`
    } else {
      name += `${e.charAt(0)}`
    }
  })
  return name
}
