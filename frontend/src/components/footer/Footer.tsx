import { Grid, Typography } from "@mui/material";
import themes from "../../constants/themes";

declare const window: any;

export default function Footer() {
  const urlGithub = "https://github.com/jokersurasit0078?tab=repositories";
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        mt: `${themes.marginComponent}px`,
        width: "100%",
      }}
      onClick={() => window.open(urlGithub)}
    >
      <Typography
        align={"center"}
        sx={{
          fontSize: themes.fontsize.mini,
          color: themes.color.hover,
          "&:hover": {
            pl: `${themes.marginComponent / 3}px`,
            pr: `${themes.marginComponent / 3}px`,
            bgcolor: themes.color.hover,
            borderRadius: themes.radius,
            color: themes.color.mainText,
            opacity: 0.5,
            cursor: "pointer",
          },
        }}
      >
        {`Portfolio Version : ${
          window.WEB_VERSION
        } © ${new Date().getFullYear()} @jokersurasit0078`}
      </Typography>
    </Grid>
  );
}
