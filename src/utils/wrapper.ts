import { Dayjs } from "dayjs";
// dayjsでYYYY-MM-DD HH:mm:ssに変換する
export const toYYYYMMDDHHmmss = (date: Dayjs) => date.format("YYYY-MM-DD HH:mm:ss");
