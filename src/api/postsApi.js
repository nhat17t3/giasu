import axiosClient from "./axiosClient";

const postsApi = {
  getAll: async (params) => {
    const url = "/posts";
    return await axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },
  add: (data) => {
    const url = `/posts`;
    return axiosClient.post(url, { data });
  },
  edit: (id, data) => {
    const url = `/posts/${id}`;
    return axiosClient.put(url, { data });
  },
  delete: (id) => {
    const url = `/posts/${id}`;
    return axiosClient.delete(url);
  },
};

export default postsApi;
