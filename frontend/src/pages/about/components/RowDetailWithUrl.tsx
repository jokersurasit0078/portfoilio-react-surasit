import { Button, Chip, Grid, Typography } from "@mui/material";
import themes from "../../../constants/themes";
import CustomIcon from "../../../components/icon/CustomIcon";

interface RowDetailWithUrlProps {
  detail: string;
  url?: string;
  chip: boolean;
  mb?: boolean;
}

export default function RowDetailWithUrl(props: RowDetailWithUrlProps) {
  const { detail, url = null, chip, mb = null } = props;
  return (
    <Grid
      container
      item
      xs={12}
      columns={{ xs: 2, md: 12 }}
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      onClick={() => (url ? window.open(url) : {})}
      sx={{
        pl: chip
          ? `${themes.marginComponent / 2}px`
          : `${themes.marginComponent - 5}px`,
        pr: `${themes.marginComponent / 3}px`,
        mb: mb ? `${themes.marginComponent / 6}px` : 0,
      }}
    >
      {chip ? (
        <Chip
          sx={{
            "&:hover": {
              opacity: url ? 0.8 : 1,
              cursor: url ? "pointer" : "",
            },
            pr: url ? `${themes.marginComponent / 3}px` : 0,
          }}
          variant={"outlined"}
          onDelete={() => {}}
          deleteIcon={
            url ? (
              <CustomIcon
                name={"url"}
                color={themes.color.mainText}
                sizeNumber={16}
              />
            ) : (
              <></>
            )
          }
          label={
            <Typography
              sx={{
                fontSize: {
                  xs: themes.fontsize.small,
                  md: themes.fontsize.default,
                },
                color: themes.color.mainText,
                fontWeight: "bold",
              }}
            >
              {detail}
            </Typography>
          }
        />
      ) : (
        <Typography
          sx={{
            fontSize: {
              xs: themes.fontsize.small,
              md: themes.fontsize.default,
            },
            color: themes.color.mainText,
            fontWeight: url ? "bold" : "",
            textDecoration: url ? "underline" : "",
            cursor: url ? "pointer" : "",
          }}
        >
          {detail}
        </Typography>
      )}
    </Grid>
  );
}
