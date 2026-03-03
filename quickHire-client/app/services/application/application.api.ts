import { baseApi } from "@/app/redux/api/baseApi";

export const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create Application
    createApplication: builder.mutation({
      query: (data) => ({
        url: "/applications",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Application"],
    }),

    // Get Applications by Job
    getApplicationsByJob: builder.query({
      query: (jobId: string) => `/applications/job/${jobId}`,
      providesTags: ["Application"],
    }),
  }),
});

export const {
  useCreateApplicationMutation,
  useGetApplicationsByJobQuery,
} = applicationApi;