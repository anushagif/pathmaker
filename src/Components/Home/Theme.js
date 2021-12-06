 
  import InputBase from "@mui/material/InputBase";
 
  import { styled, alpha } from "@mui/material/styles";
  import { Paper } from "@mui/material";

  export const Search = styled("div")(({ theme }) => ({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    }));
  
 export const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0, 3),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
    }));
  
 export  const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      textAlign: 'center',
      color: theme.palette.text.secondar,
      margin:"20px",
      padding:"30px",
     
    }));
  
export    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(7)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "100%",
          "&:focus": {
            width: "100%",
            display:"flex",
            flexDirection:"row",
          },
        },
      },
    }));
  