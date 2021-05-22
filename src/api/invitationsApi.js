

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
    const { data } = await axiosClient.get("/invitation");
    dispatch(setInvitations(data));
    // return {data};
  } catch {
    dispatch(setInvitationError());
  }
};

export const GetInvitationsByTutor = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/api/invitation");
    dispatch(setInvitations(data));
    // return {data};
  } catch {
    dispatch(setInvitationError());
  }
};

export const NewInvitation = async (dispatch, invitation) => {
  try {
    // api call
    await axiosClient.post(`/api/invitation?idTutor=${invitation.idTutor}`);
    // dispatch(newInvitation(data));
  } catch {
    dispatch(newInvitationError());
  }
};

export const AcceptInvitation = async (dispatch, invitation) => {
  try {
    // api call
    await axiosClient.put(`/api/invitation/acceptance?idStudent=${invitation.idStudent}`);
    // dispatch(editInvitation(invitation));
  } catch {
    dispatch(editInvitationError());
  }
};

export const RefuseInvitation = async (dispatch, invitation) => {
  try {
    // api call
    await axiosClient.put(`/api/invitation/denial?idStudent=${invitation.idStudent}`);
    // dispatch(editInvitation(invitation));
  } catch {
    dispatch(editInvitationError());
  }
};

// export const DeleteInvitation = async (dispatch, invitation) => {
//   try {
//     // api call
//     await axiosClient.delete(`/invitations/${invitation.id}`);
//     // await axiosClient.delete('/invitations/${invitation.id}', { data: { ...invitation } });
//     dispatch(deleteInvitation(invitation));
//   } catch {
//     dispatch(deleteInvitationError());
//   }
// };
