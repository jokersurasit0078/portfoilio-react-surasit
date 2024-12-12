import { Chip, Grid, Typography } from "@mui/material";
import themes from "../../../constants/themes";

interface RowDetailProps {
  xs: number;
  title: string;
  result: any;
  mb?: boolean;
}

export default function RowDetail(props: RowDetailProps) {
  const { xs, title, result, mb = null } = props;
  return (
    <Grid
      container
      item
      xs={xs}
      columns={{ xs: 2, md: 12 }}
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      wrap={"nowrap"}
      sx={{
        pl: `${themes.marginComponent / 2}px`,
        pr: `${themes.marginComponent / 3}px`,
        mb: mb ? `${themes.marginComponent / 10}px` : 0,
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: themes.fontsize.small,
            md: themes.fontsize.default,
          },
          color: themes.color.mainText,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: themes.fontsize.small,
            md: themes.fontsize.default,
          },
          color: themes.color.third,
          pl: `${themes.marginComponent / 3}px`,
        }}
      >
        {result ? `// ${result}` : ""}
      </Typography>
    </Grid>
  );
}
