import { InviteType } from "../types/InviteType";
import { http } from "./http";

export const approveInvite = async (inviteId: string) => {
  try {
    const response = await http({
      url: `invites/${inviteId}/approve`,
      method: "PUT",
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const rejectInvite = async (inviteId: string) => {
  try {
    const response = await http({
      url: `invites/${inviteId}/reject`,
      method: "DELETE",
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getInvites = async (partyId: string) => {
  try {
    const response: InviteType[] = await http({
      url: `invites/${partyId}`,
      method: "GET",
    });

    return response;
  } catch (error) {
    throw error;
  }
};
