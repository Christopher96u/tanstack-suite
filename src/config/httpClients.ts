import ky from "ky";

export const fakerApiClient = ky.create({
  prefixUrl: "https://fakerapi.it/api/v2",
  timeout: 5000, // 5 seconds
  headers: {
    "Content-Type": "application/json"
  }
});