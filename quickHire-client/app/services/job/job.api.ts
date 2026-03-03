import { baseApi } from "@/app/redux/api/baseApi";

export const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all jobs
    getAllJobs: builder.query({
      query: () => "/jobs",
      providesTags: ["Job"],
    }),

    // Get single job
    getJobById: builder.query({
      query: (id: string) => `/jobs/${id}`,
      providesTags: ["Job"],
    }),

    // Create job
    createJob: builder.mutation({
      query: (data) => ({
        url: "/jobs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),

    // Update job
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),

    // Delete job
    deleteJob: builder.mutation({
      query: (id: string) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Job"],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useCreateJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobApi;
