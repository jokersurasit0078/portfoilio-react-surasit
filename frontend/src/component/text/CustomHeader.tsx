import { Grid, Typography } from "@mui/material";
import themes from "../../constant/themes";

interface ICustomHeaderProps {
    text: string;
    color?: string;
    width?: string | number;
    positionContent?: "flex-start" | "center" | "flex-end";
}

export default function CustomHeader(props: ICustomHeaderProps) {
    const {
        text = "",
        color = themes.color.mainText,
        width =  themes.containerWidth,
        positionContent = "flex-start",
    } = props;

    return (
        <Grid
            container
            item xs={12}
            direction={"row"}
            justifyContent={positionContent}
            alignItems={"center"}
            sx={{
                width: { xs: "90%", lg: width },
                mt: `${themes.marginComponent / 2}px`,
            }}
        >
            <Typography sx={{ fontSize: { xs: themes.fontsize.large, md: themes.fontsize.header }, color: color, fontWeight: "bold" }}>
                {text.toUpperCase()}
            </Typography>
        </Grid>
    );
}