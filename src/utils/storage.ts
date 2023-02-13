interface StorageItem {
  value:any;
  expires?:Date;
}

enum UNIT{
  second='s',
  minute='m',
  hour='h',
  day='d',
  week='w',
  month='M'
}

type LIFETIME=`${number}${UNIT}`;

class MylocalStorage {
  setItem(key: string, value: any, lifetime?:LIFETIME) {
    const item:StorageItem = { value };
    if (lifetime) {
      const unit = lifetime.slice(-1);
      const duration = Number(lifetime.slice(0, lifetime.length - 1));
      const expiredDate = new Date();
      switch (unit) {
        case UNIT.second:
          expiredDate.setSeconds(expiredDate.getSeconds() + duration);
          break;
        case UNIT.minute:
          expiredDate.setMinutes(expiredDate.getMinutes() + duration);
          break;
        case UNIT.hour:
          expiredDate.setHours(expiredDate.getHours() + duration);
          break;
        case UNIT.day:
          expiredDate.setDate(expiredDate.getDate() + duration);
          break;
        case UNIT.week:
          expiredDate.setDate(expiredDate.getDate() + duration * 7);
          break;
        case UNIT.month:
          expiredDate.setMonth(expiredDate.getMonth() + duration);
          break;
      }
      item.expires = expiredDate;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const temp = localStorage.getItem(key);
    if (temp === null) return null;
    const res = JSON.parse(temp) as StorageItem;
    if (res.expires && res.expires > new Date()) {
      this.removeItem(key);
      return null;
    }
    return res.value;
  }

  removeItem(key:string) {
    localStorage.removeItem(key);
  }
}

const storage = new MylocalStorage();
export default storage;
