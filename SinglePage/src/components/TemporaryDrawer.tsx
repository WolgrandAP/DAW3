import * as React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface DrawerProps {
  onSelectPage: (page: 'home' | 'prof1' | 'prof2' | 'prof3') => void;
}

export default function TemporaryDrawer({ onSelectPage }: DrawerProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} color="inherit">
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding onClick={() => onSelectPage('home')}>
              <ListItemButton><ListItemText primary="Página Inicial" /></ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding onClick={() => onSelectPage('prof1')}>
              <ListItemButton><ListItemText primary="Prof. Antônio" /></ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => onSelectPage('prof2')}>
              <ListItemButton><ListItemText primary="Prof. Rodolfo" /></ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => onSelectPage('prof3')}>
              <ListItemButton><ListItemText primary="Prof. Renata" /></ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}