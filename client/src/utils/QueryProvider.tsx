"use client"
import { useState } from "react"

import { ReactNode } from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

export default function QueryProvider({children} : {children: ReactNode}){
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider  client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}