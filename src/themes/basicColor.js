import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";


const theme = createTheme ({
    palette: {
      primary:{
        main: '#e2edF3'
      },
      secundary: {  }
      
    }
  });
  
  
const useStyles = makeStyles (theme => ({
    main: {
      backgroundColor: '#e2edF3',
    },
    card:{
      backgroundColor:'#fff',
  
    },
  }));
