import React from "react";

import {
  Box,
  Modal,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

import IProps from "./props";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const route = [
  { pos_x: 0, pos_y: 0, name: "Origem" },
  { id: 3, name: "Henrique", pos_x: 115.54, pos_y: 111.54 },
  { id: 2, name: "Paula", pos_x: 200, pos_y: 200 },
  { id: 1, name: "César", pos_x: 1000, pos_y: 1000 },
  { id: 4, name: "Neide", pos_x: 512, pos_y: 1000 },
  { pos_x: 0, pos_y: 0, name: "Destino" },
];

const DeliveryModal = ({ isOpen, onClick, data }: IProps) => {
  return (
    <Modal open={isOpen} onClose={onClick}>
      <Box sx={style}>
        <Typography variant='h6' component='h2'>
          Rota de visitação
        </Typography>
        <List>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                {item.name === "Origem" && <RoomIcon color='primary' />}
                {item.name === "Destino" && <RoomIcon color='error' />}
                <ListItemText primary={item.name} />
              </ListItem>
              {index < route.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default DeliveryModal;
