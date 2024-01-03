import { clsx, ClassValue } from "clsx";
import { create } from "twrnc";
import { twMerge } from "tailwind-merge";
// use twrnc's create so tailwind.config.js can be picked up

// create the customized version...
// eslint-disable-next-line
const tw = create(require(`../tailwind.config.js`));
export const cn = (...args: ClassValue[]) => tw`${twMerge(clsx(args))}`;

export default tw;
