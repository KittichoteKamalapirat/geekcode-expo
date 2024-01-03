import dayjs from "dayjs";
import { DAY_FORMAT } from "../constants";

export const formatDate = (date: string) => dayjs(date).format(DAY_FORMAT);
