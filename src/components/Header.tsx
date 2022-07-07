import React, { ReactElement } from 'react';
import { AppBar, Toolbar, IconButton, Typography }  from '@mui/material';
import HikingIcon from '@mui/icons-material/Hiking';
import SearchIcon from '@mui/icons-material/Search';

export default function Header(): ReactElement {
    return(
        <AppBar position="sticky" elevation={2}>
            <Toolbar>

                <HikingIcon fontSize="large" />
                <Typography variant="h5" sx={{ ml: 2, flexGrow: 1 }}>Hiking Explorer</Typography>
                
                <IconButton color="inherit"><SearchIcon /></IconButton>
            </Toolbar>
        </AppBar>
    );
}