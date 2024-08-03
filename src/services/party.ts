import { PartyType } from "../types/Party";
import { http } from "./http";
export async function getParties(): Promise<PartyType[] | Error> {
  try {
    const response = await http({
      url: "parties",
      method: "GET",
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function createParty({
  name,
  description,
  location,
  date,
}: PartyType) {
  try {
    const response = await http({
      url: "parties",
      method: "POST",
      body: { name, description, location, date },
    });

    return response;
  } catch (error) {
    throw error;
  }
}


export async function deleteParty(id: string) {
  try {
    const response = await http({
      url: `parties/${id}`,
      method: "DELETE",
    });

    return response;
  } catch (error) {
    throw error;
  }
}