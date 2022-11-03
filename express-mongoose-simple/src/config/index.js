import { config } from "dotenv";

export const getEnv = (variable) => {
  const value = process.env[variable];
  return value || null;
};

export const configEnv = () => {
  config();
};
