import { PartyType } from "./Party";

export interface InviteType {
  _id?: string;
  guestName: string;
  guestSurname: string;
  guestPhoto: string;
  email: string;
  phoneNumber: string;
  isApproved: boolean;
  qrCode: string;
  isUsed: boolean;
  registeredAt: Date;
  party: PartyType[];
}
