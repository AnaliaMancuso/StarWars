import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function PinnedSubheaderList({section, data}) {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 200,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      <ul>
        <ListSubheader>{section}</ListSubheader>
        {data.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
      </ul>
    </List>
  );
}
