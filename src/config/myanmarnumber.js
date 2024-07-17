export const myanmarNumbers = {
    "၀": 0,
    "၁": 1,
    "၂": 2,
    "၃": 3,
    "၄": 4,
    "၅": 5,
    "၆": 6,
    "၇": 7,
    "၈": 8,
    "၉": 9,
  };

  export const myanmarPhoneNumber = {
    OPERATOR_REGEX: {
      ooredoo: /^(09|\+?959)9([4-9])\d{7}$/,
      telenor: /^(09|\+?959)7([4-9])\d{7}$/,
      mytel: /^(09|\+?959)6([5-9])\d{7}$/,
      mpt: /^(09|\+?959)(5\d{6}|4\d{7,8}|2\d{6,8}|6\d{6}|8\d{6}|7\d{7}|9(0|1|9)\d{5,6}|2[0-4]\d{5}|5[0-6]\d{5}|8[13-7]\d{5}|4[1379]\d{6}|73\d{6}|91\d{6}|25\d{7}|26[0-5]\d{6}|40[0-4]\d{6}|42\d{7}|45\d{7}|89[6789]\d{6}|)$/,
      mec: /^(09|\+?959)(3\d{7,8}|3[0-369]\d{6}|34\d{7})/
    },
    OPERATORS: {
      OOREDOO: 'Ooredoo',
      TELENOR: 'Telenor',
      MPT: 'MPT',
      MEC: 'MEC',
      MYTEL: 'MyTel',
      UNKNOWN: 'Unknown'
    },
    NETWORK_TYPE: {
      GSM: 'GSM',
      WCDMA: 'WCDMA',
      CDMA_450: 'CDMA 450 MHz',
      CDMA_800: 'CDMA 800 MHz',
      UNKNOWN: 'Unknown'
    }
  };