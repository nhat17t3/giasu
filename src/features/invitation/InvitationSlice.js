import { createSlice, createAction } from "@reduxjs/toolkit";

// const initialInvitations = [
//   {
//     id: 1,
//     idcustomer:1,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 2,
//     idcustomer:2,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id:3,
//     idcustomer:3,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 4,
//     idcustomer:4,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 5,
//     idcustomer:5,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
// ];

export const setInvitationError = createAction("setInvitationError");
export const newInvitationError = createAction("newInvitationError");
export const editInvitationError = createAction("editInvitationError");
export const deleteInvitationError = createAction("deleteInvitationError");

const InvitationSlice = createSlice({
  name: "invitations",
  // initialState: initialInvitations,
  initialState: {
    invitations: [],
    status: "idle",
  },
  reducers: {
    setInvitations: (state, action) => {
      return { ...state, invitations: [...action.payload] };
    },

    newInvitation: (state, action) => {
      state.invitations.push(action.payload);
    },

    deleteInvitation: (state, action) => {
      const invitations = state.invitations.filter((invitation) => invitation.id !== action.payload.id);
      return { ...state, invitations: [...invitations] };
    },

    editInvitation: (state, action) => {
      const newInvitation = action.payload;
      const invitationIndex = state.invitations.findIndex((invitation) => invitation.id === newInvitation.id);

      if (invitationIndex >= 0) {
        state.invitations[invitationIndex] = newInvitation;
      }
    },
  },
});

const { reducer, actions } = InvitationSlice;
export const { setInvitations, newInvitation, deleteInvitation, editInvitation } = actions;
export default reducer;
