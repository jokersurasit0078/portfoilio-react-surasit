import { Chip, Grid, Typography } from "@mui/material";
import themes from "../../../constants/themes";

interface RowHeaderProps {
    header: string;
}

export default function RowHeader(props: RowHeaderProps) {
    const { header } = props;
    return (
        <Grid item xs={12} sx={{ mb: `${themes.marginComponent / 3}px` }}>
            <Chip
                sx={{ bgcolor: themes.color.main }}
                label={
                    <Typography sx={{ fontSize: { xs: themes.fontsize.default, md: themes.fontsize.big }, color: themes.color.mainText, fontWeight: "bold" }}>
                        {header.toUpperCase()}
                    </Typography>
                }
            />
        </Grid>
    );
}