import React from "react";
import { Box } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import "./styles.css";

function ProjectedUser() {
	const { user } = useAuth();
	return (
		<>
			{user?.role !== "user" && <Navigate to={"/"} replace={true} />}
			<Box mt={5}>
				<Outlet />
			</Box>
		</>
	);
}

export default ProjectedUser;