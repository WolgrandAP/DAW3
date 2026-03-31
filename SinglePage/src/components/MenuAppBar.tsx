import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import TemporaryDrawer from './TemporaryDrawer';

interface MenuAppBarProps {
  onNavigate: (page: 'home' | 'prof1' | 'prof2' | 'prof3') => void;
  title: string;
}

export default function MenuAppBar({ onNavigate, title }: MenuAppBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const formatTitle = (id: string) => {
    switch(id) {
      case 'home': return 'Página Inicial';
      case 'prof1': return 'Prof. Antônio';
      case 'prof2': return 'Prof. Rodolfo';
      case 'prof3': return 'Prof. Renata';
      default: return 'Sistema Acadêmico';
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <TemporaryDrawer onSelectPage={onNavigate} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            {formatTitle(title)}
          </Typography>

          <div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}