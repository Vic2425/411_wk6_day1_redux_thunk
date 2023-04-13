import React, { useState } from "react";
import {
  Button,
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

// const ITEM_HEIGHT = 52;
const Import = (props) => {
  // fill out this component
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // const open = Boolean(anchorEl);

  const handleDelete = () => {
    props.deleteMake(deleteId);
    setAnchorEl(null);
    setDeleteId(null);
    console.log(deleteId);
  };

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setDeleteId(id);
    console.log(id);
  };

  return (
    <TableContainer sx={{ mt: "15px", mx: "auto", width: "60%" }}>
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
            <TableRow key={id}>
              <TableCell>{make.MakeId}</TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell>
                <MoreVertIcon onClick={(event) => handleClick(event, id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        // id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </TableContainer>
  );
};

export default Import;

// import React from "react";
// import {
//   Button,
//   Container,
//   IconButton,
//   Menu,
//   MenuItem,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import MoreVert from "@mui/icons-material/MoreVert";

// const Import = (props) => {
//   // fill out this component

//   return (
//     <Container sx={{ mt: "15px", mx: "auto", width: "60%" }}>
//       <Button variant="contained" color="primary" onClick={props.fetchMakes}>
//         Import
//       </Button>
//       <h2>COUNT: {props.makes.length}</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Id</TableCell>
//             <TableCell>Make</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {props.makes.map((make, index) => (
//             <TableRow key={make.MakeId}>
//               <TableCell>{make["MakeId"]}</TableCell>
//               <TableCell>{make["MakeName"]}</TableCell>
//               <TableCell>
//                 {/* <MoreVert></MoreVert> */}
//                 <DeleteIcon
//                   onClick={() => props.deleteMake(index)}
//                   className="icon text-red"
//                 />
//                 {console.log(index)}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Container>
//   );
// };
