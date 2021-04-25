export interface IUser {
  displayName: string;
  email: string;
  emailVerified: boolean;
}
export interface ISavedLink {
  link?: string;
  description?: string;
  image?: string;
  url: string;
  title?: string;
  siteName?: string;
  timestamp?: number;
}
