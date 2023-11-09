import { Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const isAuthernticated = true;

const DashboardLayout = () => {

    if (!isAuthernticated) {
        return <Navigate to="/auth/login" />
    }

    return (
        <Stack direction="row">
            {/* Sidebar */}
            <SideBar />
            <Outlet />
        </Stack>
    );
};

export default DashboardLayout;
