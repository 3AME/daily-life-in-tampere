import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import {red} from '@mui/material/colors';

function MuiEditor() {
  const save = (data) => {
    console.log(data);
  };
  const myTheme = createTheme({
    palette:{
        primary:{
            main:'#fffff',
        }
    }
  });
  return (
    <div className="container" style={{ display: "flex", textAlign:"center", justifyContent:"space-around"}}>
      {/* <h2>I am a editor!</h2> */}
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          label="Type something here..."
          onSave={save}
          inlineToolbar={true}
        ></MUIRichTextEditor>
      </ThemeProvider>
    </div>
  );
}

export default MuiEditor;
