export const isEmptyObject = (value: object): boolean => {
  return !Object.keys(value).length;
};
