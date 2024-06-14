import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "60px",
        marginBottom: "20px",
        width: "100%",
        top: 0,
        backgroundColor: "#4C4C4C",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          marginRight: "auto",
          paddingLeft: "20px",
        }}
      >
        <h2>All Characters</h2>
      </Link>
    </Box>
  );
};
