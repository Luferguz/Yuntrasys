import { Box } from "@mui/system";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const draweWidth = 240;


export const Base = () => {
    return (
        <Box>
            {/* Navbar */}
            <NavBar drawerWidth={drawerWidth} />
            {/* Sidebar */}
            <SideBar drawerWidth={drawerWidth} />
            {/* Footer */}

            <Box
                component='main'
                sx={{ flexGrow: 1, padding: 3 }}
            >
                {children}
            </Box>
        </Box>
    )
}
