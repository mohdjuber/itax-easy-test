import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard2() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Interprise Products
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          GST, E-Invoicing, Max-ITC
          <br />
          E-Way bill & more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Products</Button>
      </CardActions>
    </Card>
  );
}
