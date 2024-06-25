export const validateImageUrl = (url: string): boolean => {
  const regex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;
  return regex.test(url);
};
