import { myanmarNumbers, myanmarPhoneNumber } from "@/config/myanmarnumber";

export function sanitizedNumbe(phoneNumber){
    if (!phoneNumber) {
        throw Error('Please include phoneNumber parameter.');
      }

      phoneNumber = phoneNumber.trim();

      if (phoneNumber.length === 0) {
        throw Error('Phone number is empty.');
      }

      phoneNumber = phoneNumber.replace(/[- )(]/g,'')

      const countryCodeRe = /^\+?950?9\d+$/;

      if (countryCodeRe.test(phoneNumber)) {
        const doubleCountryCodeRe = /^\+?95950?9\d{7,9}$/;
        if (doubleCountryCodeRe.test(phoneNumber)) {
          phoneNumber = phoneNumber.replace(/9595/, '95');
        }
        const zeroBeforeAreaCodeRe = /^\+?9509\d{7,9}$/;
        if (zeroBeforeAreaCodeRe.test(phoneNumber)) {
          phoneNumber = phoneNumber.replace(/9509/, '959');
        }
      }
      return phoneNumber;
}

export function normalizeNumber(phoneNumber){
    const sanitizedNumber = this.sanitizeInput(phoneNumber);
      const possibleCases = /^((09-)|(\+959)|(09\s)|(959)|(09\.))/

      // spaces, dup cases
      if(possibleCases.test(sanitizedNumber)) {
        return sanitizedNumber.replace(possibleCases, '09');
      }

      // Myanmar Number case
      if (/[၀-၉]/.test(sanitizedNumber)) {
        return sanitizedNumber
          .split('')
          .map(function(num) {
            return myanmarNumbers[num];
          })
          .join('')
          .replace(possibleCases, '09');
      }

      return sanitizedNumber;
}

export function IsVaidNumber(phoneNumber){
    const normalizedPhoneNumber = normalizeNumber(phoneNumber);
    const myanmarPhoneRe = /^(09|\+?950?9|\+?95950?9)\d{7,9}$/;
    return myanmarPhoneRe.test(normalizedPhoneNumber);
}
