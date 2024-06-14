import ErrorIcon from "@mui/icons-material/Error";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ErrorIcon sx={{ fontSize: 100 }} />
        <h1>404 Not Found</h1>
      </div>
      <div>
        <h2>
          Please return to the {""}
          <Link to="/">Home Page</Link>
        </h2>
      </div>
    </>
  );
};
