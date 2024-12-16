"use client";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

// Create a function to set up the QueryClient
// This allows for consistent configuration and potential server-side rendering support
export function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                // Global query configuration
                staleTime: 1000 * 60 * 5, // 5 minutes
                gcTime: 1000 * 60 * 30, // 30 minutes (replaced cacheTime in latest version)
                retry: 1, // Retry once on failure
            },
        },
    });
}

// Create a provider component
export default function QueryProvider({
    children
}: {
    children: React.ReactNode
}) {
    // Use useState to create a single instance of QueryClient
    const [queryClient] = useState(() => makeQueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}