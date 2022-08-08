import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";

function MuiEditor() {
  const save = (props) => {
    console.log(props);
    let textData = props;
    console.log(textData.blocks);
    console.log(typeof textData);
  };
  const myTheme = createTheme({
    palette: {
      primary: {
        main: "#fffff",
      },
    },
  });
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-around",
          width: 800,
          height: 500,
          backgroundColor: "pink",
        }}
      >
        <ThemeProvider theme={myTheme}>
          <MUIRichTextEditor
            label="Type something here..."
            onSave={save}
            inlineToolbar={true}
          ></MUIRichTextEditor>
        </ThemeProvider>
      </div>
      <div>
      </div>
    </div>
  );
}

export default MuiEditor;
