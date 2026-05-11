export const PRAYER_REQUEST_STORAGE_KEY = "church-glory-grace-prayer-requests";

export type PrayerRequest = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  isPrivate: boolean;
  createdAt: string;
};
