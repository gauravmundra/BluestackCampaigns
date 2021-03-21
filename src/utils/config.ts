//Utility functions

export const FormatedDate = (date: Date) => date.toDateString();

export const today: number = new Date().valueOf();

export const DifferenceInDays = (date1: number, date2: number) => Math.floor((new Date(date2).getTime() - new Date(date1).getTime()) / (1000 * 3600 * 24));

export const IsNullOrEmpty = (obj: any): boolean => obj == null || obj == "" || obj.length == 0 || obj.Id == 0 || obj.Id == "0" || obj.key == 0 || obj.key == "0";
