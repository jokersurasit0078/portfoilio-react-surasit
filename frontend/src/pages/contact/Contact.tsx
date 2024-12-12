import { Alert, Box, Fade, Grid, Snackbar, Typography } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import themes from "../../constants/themes";
import tiktokImg from "../../images/tiktok.png";
import lineImg from "../../images/line.png";
import gmailImg from "../../images/gmail.png";
import telephoneImg from "../../images/telephone.png";
import { word } from "../../languages/Word";
import CustomHeader from "../../components/text/CustomHeader";
import CustomIcon from "../../components/icon/CustomIcon";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import actions from "../../constants/contacts";

export default function Contact() {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const listContact = [
    {
      src: gmailImg,
      size: 20,
      type: actions.gmail,
      text: "Gmail",
      detail: word().TEXT_EMAIL_DETAIL,
      chip: [themes.color.main],
      action: "copy",
    },
    {
      src: tiktokImg,
      size: 20,
      type: actions.tiktok,
      text: "Tiktok",
      detail: "โจ๊กเอ็ดเวิร์ด",
      chip: ["#000000"],
      action: "add",
    },
    {
      src: lineImg,
      size: 20,
      type: actions.line,
      text: "Line",
      detail: "Line ID: joker_surasit",
      chip: ["#06C755"],
      action: "add",
    },
    {
      src: telephoneImg,
      size: 20,
      type: actions.mobile,
      text: "Mobile number",
      detail: "+66872237007",
      chip: ["#41A5EE"],
      action: "phone",
    },
  ];

  const handleClickItemContact = async (text: string) => {
    if (text === actions.gmail) {
      window.open(`mailto:${listContact[0].detail}`, "_self");
    } else if (text === actions.tiktok) {
      window.open("https://www.tiktok.com/@joke.edward");
    } else if (text === actions.line) {
      window.open("https://line.me/ti/p/cMWgFVYObT");
    } else if (text === actions.mobile) {
      window.open(`tel:${listContact[4].detail}`, "_self");
    }
  };

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const SnackbarAlertCopyEmail = (props: any) => {
    return (
      <Snackbar
        open={openAlert}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {word().TEXT_COPY_EMAIL}
        </Alert>
      </Snackbar>
    );
  };

  const renderItemContact = (
    key: string,
    src: any,
    size: number,
    type: string,
    text: string,
    detail: string,
    chip: any,
    mbxs: boolean,
    mbmd: boolean,
    action: string
  ) => {
    return (
      <Grid
        key={key}
        item
        xs={5.5}
        container
        justifyContent={"center"}
        alignItems={"center"}
        columns={{ xs: 2, md: 12 }}
        sx={{
          bgcolor: "white",
          borderRadius: "40px",
          mb: {
            xs: mbxs ? `${themes.marginComponent / 3}px` : "0px",
            md: mbmd ? `${themes.marginComponent / 3}px` : "0px",
          },
          cursor: "pointer",
          boxShadow: themes.shadow,
          "&:hover": {
            bgcolor: "#f2f2f2",
          },
        }}
        onClick={() => handleClickItemContact(type)}
      >
        <Grid
          item
          xs={2}
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            height: "100%",
            backgroundImage:
              chip.length === 2
                ? `linear-gradient(90deg, ${chip[0]}, ${chip[1]})`
                : "",
            bgcolor: chip.length === 1 ? chip[0] : "",
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
            pt: {
              xs: `${themes.marginComponent / 4}px`,
              md: `${themes.marginComponent / 3}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 4}px`,
              md: `${themes.marginComponent / 3}px`,
            },
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              borderRadius: `${size}px`,
              p: `${themes.marginComponent / 3}px`,
              bgcolor: "white",
              width: `${size * 2}px`,
              height: `${size * 2}px`,
            }}
          >
            <img
              src={src}
              alt="profile"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          container
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{
            height: "100%",
            pl: `${themes.marginComponent / 3}px`,
            pr: `${themes.marginComponent / 1.5}px`,
          }}
          wrap="nowrap"
        >
          <Grid
            xs={11}
            item
            container
            justifyContent={"flex-start"}
            alignItems={"center"}
            wrap="nowrap"
            textOverflow={"ellipsis"}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: themes.fontsize.small,
                  md: themes.fontsize.default,
                },
                color: "black",
                pl: "3px",
                fontWeight: "bold",
              }}
            >
              {detail}
            </Typography>
          </Grid>
          <Grid xs={1} item>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "30px",
                backgroundImage:
                  chip.length === 2
                    ? `linear-gradient(90deg, ${chip[0]}, ${chip[1]})`
                    : "",
                bgcolor: chip.length === 1 ? chip[0] : "",
                p: "5px",
                borderRadius: "50%",
              }}
            >
              <CustomIcon name={action} color={"white"} sizeNumber={20} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderContact = () => {
    return (
      <Fade in={true} timeout={{ enter: 500, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: `${themes.marginComponent / 2}px`,
            p: `${themes.marginComponent / 2}px`,
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          {listContact.map((item: any, index: number) => {
            return (
              <Fade in={true} timeout={{ enter: (index + 1) * 500, exit: 200 }}>
                {renderItemContact(
                  "CARD_CONTACT_" + item.text.toUpperCase(),
                  item.src,
                  item.size,
                  item.type,
                  item.text,
                  item.detail,
                  item.chip,
                  index !== listContact.length - 1,
                  index !== listContact.length - 1,
                  item.action
                )}
              </Fade>
            );
          })}
          {listContact.length % 2 !== 0 ? <Grid item xs={5.5} /> : null}
        </Grid>
      </Fade>
    );
  };

  return (
    <Box sx={{ display: "flex", bgcolor: themes.color.bg }}>
      <CustomAppbar />
      <Box
        sx={{
          flexGrow: 1,
          width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` },
          pt: themes.appbarHeight,
        }}
      >
        <Grid
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ pb: `${themes.marginComponent}px` }}
        >
          <CustomHeader text={word().MENU_4} />
          {renderContact()}
          <Footer />
        </Grid>
      </Box>
      <SnackbarAlertCopyEmail />
    </Box>
  );
}
