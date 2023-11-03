import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "src/components/navigation-bar";
import { AuthContextProvider } from "src/components/context";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <div className="px-3 md:px-12 py-5">
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
