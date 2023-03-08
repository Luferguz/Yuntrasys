import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";


export const theme = createTheme ({
    palette: {
      primary:{
        main: '#e2edF3'
      }
    }
  });
  
  
export const useStyles = makeStyles (theme => ({
    main: {
      backgroundColor: '#e2edF3',
    },
    card:{
      backgroundColor:'#fff',
  
    }
  }));