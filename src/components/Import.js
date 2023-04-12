import React, { useState } from "react";
import {
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ITEM_HEIGHT = 52;
const Import = (props) => {
  // fill out this component
  const [anchorEl, setAnchorEl] = useState(null);
  const [idNum, setIdNum] = useState(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIdNum(event.currentTarget.id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableContainer>
      <p></p>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <h2>COUNT: {props.makes.length}</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, id) => (
            <TableRow key={make.MakeId}>
              <TableCell>{make.MakeId}</TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  id={id}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMountedopen={Boolean(anchorEl)}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //     width: 200,
        //   },
        // }}
      >
        <MenuItem onClick={handleClose}>
          <Button onClick={() => props.deleteMake(idNum)}>Delete</Button>
        </MenuItem>
      </Menu>
    </TableContainer>
  );
};

export default Import;
