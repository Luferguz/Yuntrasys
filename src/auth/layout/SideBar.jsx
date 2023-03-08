import { Box, Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div' textalign='center'>
                        Menú
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Laboratorio', 'Ensamble', 'Mantenimiento', 'Garantías', 'EHS'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box >
    )
}