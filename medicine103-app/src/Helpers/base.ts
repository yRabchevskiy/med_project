export const jsonClone = (obj: any) => {
  if (!obj) return {}; 
  return JSON.parse(JSON.stringify(obj));
};
