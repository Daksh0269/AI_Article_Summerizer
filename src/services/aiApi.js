import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aiApi = createApi({
  reducerPath: "aiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        import.meta.env.VITE_RAPIDAPI_KEY
      );
      headers.set(
        "x-rapidapi-host",
        import.meta.env.VITE_RAPIDAPI_HOST
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: ({ articleUrl, length }) => {
        const queryStr = `summarize?url=${encodeURIComponent(articleUrl)}&length=${length}&lang=en&engine=2`;
        const fullUrl = `https://article-extractor-and-summarizer.p.rapidapi.com/${queryStr}`;
        console.log("Full API Request URL:", fullUrl); // Log the full request URL
        return queryStr;
      },
    }),
  }),
});

export const { useLazyGetSummaryQuery } = aiApi;
