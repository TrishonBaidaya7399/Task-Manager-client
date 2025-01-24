import { baseApi } from "../baseApi/baseAPI";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ _id, data }) => ({
        url: `/tasks/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateStatus: builder.mutation({
      query: ({ _id, status }) => ({
        url: `/tasks/${_id}`,
        method: "PATCH",
        body: {status: status},
      }),
      invalidatesTags: ["Tasks"],
    }),
    removeTask: builder.mutation({
      query: (_id) => ({
        url: `/tasks/${_id}`,
        method: "DELETE",
        body: [],
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateStatusMutation,
  useUpdateTaskMutation,
  useRemoveTaskMutation,
} = taskApi;
