export const shortAddress = (address: string): string =>
  `${address.substring(0, 10)}...${address.substring(38)}`;
