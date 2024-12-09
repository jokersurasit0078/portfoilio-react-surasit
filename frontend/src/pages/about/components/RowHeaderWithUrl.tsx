import { Button, Chip, Grid, Typography } from "@mui/material";
import themes from "../../../constants/themes";
import CustomIcon from "../../../components/icon/CustomIcon";

interface RowHeaderWithUrlProps {
  detail: string;
  url?: string;
  mb?: boolean;
}

export default function RowHeaderWithUrl(props: RowHeaderWithUrlProps) {
  const { detail, url = null, mb = null } = props;
  return (
    <Grid
      container
      item
      xs={12}
      columns={{ xs: 2, md: 12 }}
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      sx={{
        pl: `${themes.marginComponent / 2}px`,
        pr: `${themes.marginComponent / 3}px`,
        mb: mb ? `${themes.marginComponent / 6}px` : 0,
      }}
      onClick={() => (url ? window.open(url) : {})}
    >
      {url ? (
        <Button
          id={"BT_URL_" + detail}
          variant={"text"}
          size={"small"}
          sx={{
            textAlign: "left",
            fontWeight: url ? "bold" : "",
            textTransform: "none",
            color: themes.color.mainText,
            fontSize: {
              xs: themes.fontsize.small,
              md: themes.fontsize.default,
            },
            cursor: url ? "pointer" : "",
            p: 0,
            "&:hover": {
              bgcolor: themes.color.hover,
              opacity: 0.8,
            },
          }}
          endIcon={
            <CustomIcon
              name={"url"}
              color={themes.color.mainText}
              sizeNumber={16}
            />
          }
        >
          {detail}
        </Button>
      ) : (
        <Typography
          sx={{
            fontSize: {
              xs: themes.fontsize.small,
              md: themes.fontsize.default,
            },
            color: themes.color.mainText,
          }}
        >
          {detail}
        </Typography>
      )}
    </Grid>
  );
}
