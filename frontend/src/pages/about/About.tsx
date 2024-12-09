import { Box, Button, Chip, Fade, Grid, Typography } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import themes from "../../constants/themes";
import { word } from "../../languages/Word";
import CustomHeader from "../../components/text/CustomHeader";
import Footer from "../../components/footer/Footer";
import CustomIcon from "../../components/icon/CustomIcon";
import RowHeader from "./components/RowHeader";
import CustomDivider from "./components/CustomDivider";
import RowDetail from "./components/RowDetail";
import RowHeaderWithUrl from "./components/RowHeaderWithUrl";
import RowDetailWithUrl from "./components/RowDetailWithUrl";

export default function About() {
  const urlPtt = "https://www1.pttdigital.com/home/";
  const urlDigio = "https://www.digio.co.th/";
  const urlTtbSmartShop =
    "https://www.ttbbank.com/th/sme/sme-account-and-domestic-transaction/sme-collection-service/ttb-smart-shop";
  const urlEwht =
    "https://www.kasikornbank.com/en/business/cash-management/e-service-payment/pages/e-withholding-tax.aspx";
  const urlDigiPay = "https://www.digio.co.th/digipay";
  const phoneItem = ["+66642196390"];
  const fadeTime = 500;

  const calMyAge = () => {
    let age = 0;
    const birthYear = 1999;
    const birthMonth = 5;
    const birthDate = 11;
    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth() + 1;
    const dateNow = new Date().getDate();
    age = yearNow - birthYear - 1;
    if (
      monthNow > birthMonth ||
      (monthNow === birthMonth && dateNow >= birthDate)
    )
      age = age + 1;
    return age.toString();
  };

  const renderRowDetailForReference = (
    title: string,
    detail: string,
    phone: string,
    mb?: boolean
  ) => {
    return (
      <Grid
        container
        item
        xs={12}
        columns={{ xs: 2, md: 12 }}
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        onClick={() => window.open(`tel:${phone}`, "_self")}
        sx={{
          pl: `${themes.marginComponent / 2}px`,
          pr: `${themes.marginComponent / 3}px`,
          mb: mb ? `${themes.marginComponent / 6}px` : 0,
          "&:hover": { cursor: "pointer", opacity: 0.8 },
        }}
      >
        <Grid
          wrap={"nowrap"}
          container
          direction={"row"}
          alignItems={"flex-start"}
        >
          <CustomIcon name={"phone"} color={"white"} sizeNumber={20} />
          <Typography
            sx={{
              fontSize: {
                xs: themes.fontsize.small,
                md: themes.fontsize.default,
              },
              color: themes.color.mainText,
              pl: `${themes.marginComponent / 6}px`,
            }}
          >
            {title + " : " + detail}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const renderPersonalInformation = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: `${themes.marginComponent / 2}px`,
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={word().TEXT_PERSONAL} />
          <RowDetail
            xs={12}
            title={word().TEXT_NAME}
            detail={word().TEXT_NAME_DETAIL}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={word().TEXT_EMAIL}
            detail={word().TEXT_EMAIL_DETAIL}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={word().TEXT_BIRTHDATE}
            detail={word().TEXT_BIRTHDATE_DETAIL}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={word().TEXT_AGE}
            detail={calMyAge()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={word().TEXT_NATIONALITY}
            detail={word().TEXT_NATIONALITY_DETAIL}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={word().TEXT_MARITAL_STATUS}
            detail={word().TEXT_MARITAL_STATUS_DETAIL}
            mb={true}
          />
          <RowDetail
            xs={12}
            title={word().TEXT_INTEREST}
            detail={word().TEXT_INTEREST_DETAIL}
          />
        </Grid>
      </Fade>
    );
  };

  const renderEducation = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime * 2, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={word().TEXT_EDUCATION} />
          <RowDetail
            xs={12}
            title={word().TEXT_EDUCATION_ITEM_1}
            detail={word().TEXT_EDUCATION_ITEM_DETAIL_1}
            mb={true}
          />
          <RowDetail
            xs={12}
            title={word().TEXT_EDUCATION_ITEM_2}
            detail={word().TEXT_EDUCATION_ITEM_DETAIL_2}
          />
        </Grid>
      </Fade>
    );
  };

  const renderWorkExperience = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime * 2, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={word().TEXT_WORK_EXPERIENCE} />
          <RowHeaderWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_ITEM_3}
            url={urlPtt}
            mb={true}
          />
          <RowHeaderWithUrl detail={word().TEXT_WORK_EXPERIENCE_POSITION_3} />
          <CustomDivider />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_PROJECT_6}
            chip={true}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_6_1}
            chip={false}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_6_2}
            chip={false}
          />
          <CustomDivider />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_PROJECT_7}
            chip={true}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_7_1}
            chip={false}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_7_2}
            chip={false}
          />
          <CustomDivider />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_PROJECT_8}
            chip={true}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_8_1}
            chip={false}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_8_2}
            chip={false}
          />
          <CustomDivider />
          <RowHeaderWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_ITEM_2}
            url={urlDigio}
            mb={true}
          />
          <RowHeaderWithUrl detail={word().TEXT_WORK_EXPERIENCE_POSITION_2} />
          <CustomDivider />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_PROJECT_1}
            url={urlTtbSmartShop}
            chip={true}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_1_1}
            chip={false}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_1_2}
            chip={false}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_1_3}
            chip={false}
            mb={true}
          />
          <CustomDivider />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_PROJECT_2}
            url={urlEwht}
            chip={true}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_2_1}
            chip={false}
          />
          <CustomDivider />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_PROJECT_3}
            chip={true}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_3_1}
            chip={false}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_3_2}
            chip={false}
          />
          <CustomDivider />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_PROJECT_4}
            url={urlDigiPay}
            chip={true}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_4_1}
            chip={false}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_4_2}
            chip={false}
          />
          <CustomDivider />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_PROJECT_5}
            chip={true}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_5_1}
            chip={false}
            mb={true}
          />
          <RowDetailWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_DETAIL_5_2}
            chip={false}
          />
          <CustomDivider />
          <RowHeaderWithUrl
            detail={word().TEXT_WORK_EXPERIENCE_ITEM_1}
            url={urlDigio}
            mb={true}
          />
          <RowHeaderWithUrl detail={word().TEXT_WORK_EXPERIENCE_POSITION_1} />
        </Grid>
      </Fade>
    );
  };

  const renderReferences = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime * 4, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={word().TEXT_REFERENCES} />
          {renderRowDetailForReference(
            word().TEXT_REFERENCE_ITEM_1,
            word().TEXT_REFERENCE_ITEM_DETAIL_1,
            phoneItem[0]
          )}
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
          <CustomHeader text={word().MENU_2} />
          {renderPersonalInformation()}
          {renderEducation()}
          {renderWorkExperience()}
          {renderReferences()}
          <Footer />
        </Grid>
      </Box>
    </Box>
  );
}
