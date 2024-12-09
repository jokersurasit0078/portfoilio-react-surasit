import { Chip, Grid, Typography } from "@mui/material";
import themes from "../../../constants/themes";

interface RowDetailProps {
  xs: number;
  title: string;
  detail: string;
  mb?: boolean;
}

export default function RowDetail(props: RowDetailProps) {
  const { xs, title, detail, mb = null } = props;
  return (
    <Grid
      container
      item
      xs={xs}
      columns={{ xs: 2, md: 12 }}
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      sx={{
        pl: `${themes.marginComponent / 2}px`,
        pr: `${themes.marginComponent / 3}px`,
        mb: mb ? `${themes.marginComponent / 6}px` : 0,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default },
          color: themes.color.mainText,
        }}
      >
        {title + " : " + detail}
      </Typography>
    </Grid>
  );
}
