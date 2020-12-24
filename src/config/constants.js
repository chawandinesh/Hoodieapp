export const SOCIAL_LOGIN_TYPE = {
  FACEBOOK: 1,
  GOOGLE: 2,
};

export const GENDER = {
  MALE: 1,
  FEMALE: 2,
  OTHER: 3,
}

export const GENDER_LABEL = {
  [GENDER.MALE]: 'Nam',
  [GENDER.FEMALE]: 'Nữ',
  [GENDER.OTHER]: 'Khác',
}

export const NOTIFY_TYPE = {
};


export const ONESIGNAL_TAG = 'userId'

export const LIMIT_RECORD = {
  HOME: 10,
  DEFAULT: 20,
}

export const USER_ROLE = {
  TEACHER: 2,
  MONITOR: 3,
  PARENT: 4,
}

export const NAME_BY_TYPE = {
  GO_TO_SCHOOL: 'Đến trường',
  GO_HOME: 'Về nhà'
}

export const MUSTER_STATUS = {
  ABSENT: 'ABSENT',
  PRESENT: 'ENTER',
  UNKNOWN: 'UNKNOWN'
}

// export const MUSTER_TYPE = {
//   IN_CLASS: 1,
//   PRESENT: 2
// }

export const MUSTER_TYPE = {
  TIME_ON_BUS_TO_SCHOOL: 'TIME_ON_BUS_TO_SCHOOL', // lên xe đi
  TIME_OUT_BUS_TO_SCHOOL: 'TIME_OUT_BUS_TO_SCHOOL', // xuống xe đi
  TIME_AT_SCHOOL: 'TIME_AT_SCHOOL', // vào cổng
  TIME_OUT_SCHOOL: 'TIME_OUT_SCHOOL', // ra cổng
  TIME_IN_CLASS: 'TIME_IN_CLASS', // vào lớp
  TIME_OUT_CLASS: 'TIME_OUT_CLASS', // ra lớp
  GO_TO_SCHOOL: 'GO_TO_SCHOOL', // đến trường
  OUT_OF_SCHOOL: 'OUT_OF_SCHOOL', //  rời trường
  AT_SCHOOL: 'AT_SCHOOL', // ở trường
  IN_CLASS: 'IN_CLASS', // ở lớp
  GO_HOME: 'GO_HOME', // về nhà
  TIME_ON_BUS_GO_HOME: 'TIME_ON_BUS_GO_HOME', // lên xe về
  TIME_OUT_BUS_GO_HOME: 'TIME_OUT_BUS_GO_HOME', // xuống xe về
  UNKNOWN: 'UNKNOWN'
}

export const MUSTER_LABEL = {
  [MUSTER_TYPE.TIME_ON_BUS_TO_SCHOOL]: 'Lên xe đến trường', // lên xe đi
  [MUSTER_TYPE.TIME_OUT_BUS_TO_SCHOOL]: 'Xuống xe đến trường', // xuống xe đi
  [MUSTER_TYPE.TIME_AT_SCHOOL]: 'Vào trường', // vào cổng
  [MUSTER_TYPE.TIME_OUT_SCHOOL]: 'Ra khỏi cổng trường', // ra cổng
  [MUSTER_TYPE.TIME_IN_CLASS]: 'Vào lớp', // vào lớp
  [MUSTER_TYPE.TIME_OUT_CLASS]: 'Ra khỏi lớp', // ra lớp
  [MUSTER_TYPE.TIME_ON_BUS_GO_HOME]: 'Lên xe về', // lên xe về
  [MUSTER_TYPE.TIME_OUT_BUS_GO_HOME]: 'Xuống xe về', // xuống xe về
  [MUSTER_TYPE.UNKNOWN]: 'unknown'
}

export const MUSTER_DATA = [
  {
    id: 1,
    name: 'Lên xe đi',
    active: false,
    type: MUSTER_TYPE.TIME_ON_BUS_TO_SCHOOL
  },
  {
    id: 2,
    name: 'Xuống xe đi',
    active: false,
    type: MUSTER_TYPE.TIME_OUT_BUS_TO_SCHOOL
  },
  {
    id: 3,
    name: 'Vào cổng',
    active: false,
    type: MUSTER_TYPE.TIME_AT_SCHOOL
  },
  {
    id: 4,
    name: 'Vào lớp',
    active: false,
    type: MUSTER_TYPE.TIME_IN_CLASS
  },
  {
    id: 5,
    name: 'Ra cổng',
    active: false,
    type: MUSTER_TYPE.TIME_OUT_SCHOOL
  },
  {
    id: 6,
    name: 'Lên xe về',
    active: false,
    type: MUSTER_TYPE.TIME_ON_BUS_GO_HOME
  },
  {
    id: 7,
    name: 'Xuống xe về',
    active: false,
    type: MUSTER_TYPE.TIME_OUT_BUS_GO_HOME
  },
]
export const TT_CO_MAT = 0;
export const TT_VANG_CO_PHEP = 2;
export const TT_VANG_KO_PHEP = 1;
export const TT_DIEM_DANH = ['Có mặt', 'Vắng có phép', 'Vắng không phép'];
export const TO_CHUYEN_MON = ['Toán', 'Ngữ văn']
export const GIOI_TINH = ['Nam', 'Nữ']
export const VAI_TRO_TK = [
  'Quản lý',
  'Giáo viên',
  'Phụ huynh'
]
export const CHU_VU_TRONG_LOP = [
  'Lớp trưởng',
  'Lớp phó',
  'Tổ trưởng',
  'Tổ phó',
  'Thành viên',
]
export const QUAN_HE_GIA_DINH = [
  'Cha học sinh',
  'Mẹ học sinh',
  'Ông bà',
  'Người đỡ đầu'
]
export const gioHocBatDau = {
  THU_HAI: {
    0: '07:15',
    1: '07:45',
    2: '08:35',
    3: '09:25',
    4: '10:15',
    5: '11:05',
    6: '12:30',
    7: '13:00',
    8: '13:50',
    9: '14:40',
    10: '15:30',
    11: '16:20',
  },
  CON_LAI: {
    0: '',
    1: '07:30',
    2: '08:20',
    3: '09:10',
    4: '10:15',
    5: '11:05',
    6: '',
    7: '12:45',
    8: '13:35',
    9: '14:25',
    10: '15:30',
    11: '16:20',
  },
}

export const gioHocKetThuc = {
  THU_HAI: {
    0: '07:45',
    1: '08:30',
    2: '09:20',
    3: '10:10',
    4: '11:00',
    5: '11:50',
    6: '13:00',
    7: '13:45',
    8: '14:35',
    9: '15:25',
    10: '16:15',
    11: '17:05',
  },
  CON_LAI: {
    0: '',
    1: '08:15',
    2: '09:05',
    3: '09:55',
    4: '11:00',
    5: '11:50',
    6: '',
    7: '13:30',
    8: '14:20',
    9: '15:10',
    10: '16:15',
    11: '17:05',
  },
}
