

import axiosClient from "./axiosClient";
import {
  setInvitations,
  newInvitation,
  deleteInvitation,
  editInvitation,
  newInvitationError,
  editInvitationError,
  deleteInvitationError,
  setInvitationError,
} from "../features/invitation/InvitationSlice";

export const GetInvitations = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/invitations");
    dispatch(setInvitations(data));
    // return {data};
  } catch {
    dispatch(setInvitationError());
  }
};

export const NewInvitation = async (dispatch, invitation) => {
  try {
    // api call
    const { data } = await axiosClient.post("/invitations", invitation);
    dispatch(newInvitation(data));
  } catch {
    dispatch(newInvitationError());
  }
};

export const EditInvitation = async (dispatch, invitation) => {
  try {
    // api call
    await axiosClient.put(`/invitations/${invitation.id}`, invitation);
    dispatch(editInvitation(invitation));
  } catch {
    dispatch(editInvitationError());
  }
};

export const DeleteInvitation = async (dispatch, invitation) => {
  try {
    // api call
    await axiosClient.delete(`/invitations/${invitation.id}`);
    // await axiosClient.delete('/invitations/${invitation.id}', { data: { ...invitation } });
    dispatch(deleteInvitation(invitation));
  } catch {
    dispatch(deleteInvitationError());
  }
};
