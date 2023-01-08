import { Grid, Typography } from "@mui/material";
import themes from "../../constant/themes";

declare const window: any;

export default function Footer() {
    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                marginTop: `${themes.marginComponent}px`,
                width: "100%",
            }}
        >
            <Typography align={"center"} style={{ fontSize: themes.fontsize.mini, color: themes.color.hover }}>
                {`Portfolio Version : ${window.WEB_VERSION} © 2023 @jokersurasit0078`}
            </Typography>
        </Grid>
    );
}