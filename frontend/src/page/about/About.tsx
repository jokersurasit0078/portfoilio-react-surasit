import { Box, Chip, Grid, Typography } from "@mui/material";
import CustomAppbar from "../../component/appbar/CustomAppbar";
import themes from "../../constant/themes";
import { word } from "../../languages/Word";
import CustomHeader from "../../component/text/CustomHeader";
import Footer from "../../component/footer/Footer";
import CustomIcon from "../../component/icon/CustomIcon";

export default function About() {
    const urlDigio = "https://www.digio.co.th/";
    const urlTtbSmartShop = "https://www.ttbbank.com/th/sme/sme-account-and-domestic-transaction/sme-collection-service/ttb-smart-shop";
    const urlEwht = "https://www.kasikornbank.com/en/business/cash-management/e-service-payment/pages/e-withholding-tax.aspx";
    const urlDigiPay = "https://www.digio.co.th/digipay";
    const phoneItem = ["+66642196390"];
    const calMyAge = () => {
        let age = 0;
        const birthYear = 1999;
        const birthMonth = 5;
        const birthDate = 11;
        const yearNow = new Date().getFullYear();
        const monthNow = new Date().getMonth();
        const dateNow = new Date().getDate();
        age = yearNow - birthYear - 1;
        if (monthNow >= birthMonth && dateNow >= birthDate) age = age + 1;
        return age.toString();
    }

    const CustomDivider = (prosp: any) => {
        return (
            <div style={{ width: "100%", height: "1px", marginTop: themes.marginComponent / 3, marginBottom: themes.marginComponent / 3 }} />
        );
    }

    const renderRowHeader = (header: string) => {
        return (
            <Grid item xs={12} sx={{ mb: `${themes.marginComponent / 3}px` }}>
                <Chip
                    sx={{ backgroundColor: themes.color.main }}
                    label={
                        <Typography sx={{ fontSize: { xs: themes.fontsize.default, md: themes.fontsize.big }, color: themes.color.mainText, fontWeight: "bold" }}>
                            {header.toUpperCase()}
                        </Typography>
                    }
                />
            </Grid>
        );
    }

    const renderRowDetail = (xs: number, title: string, detail: string, mb?: boolean) => {
        return (
            <Grid
                container
                item xs={xs}
                columns={{ xs: 2, md: 12 }}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                sx={{
                    paddingLeft: `${themes.marginComponent / 2}px`,
                    paddingRight: `${themes.marginComponent / 3}px`,
                    mb: mb ? `${themes.marginComponent / 6}px` : 0,
                }}
            >
                <Typography sx={{ fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default }, color: themes.color.mainText }}>
                    {title + " : " + detail}
                </Typography>
            </Grid>
        );
    }

    const renderRowDetailForWorkExperience = (detail: string, url: string | null, chip: boolean, mb?: boolean) => {
        return (
            <Grid
                container
                item xs={12}
                columns={{ xs: 2, md: 12 }}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                sx={{
                    paddingLeft: `${themes.marginComponent / 2}px`,
                    paddingRight: `${themes.marginComponent / 3}px`,
                    mb: mb ? `${themes.marginComponent / 6}px` : 0,
                }}
            >
                {chip
                    ? <Chip
                        sx={{ "&:hover": { opacity: url ? 0.8 : 1, cursor: url ? "pointer" : "" } }}
                        variant={"outlined"}
                        label={
                            <Typography
                                sx={{
                                    fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default },
                                    color: themes.color.mainText,
                                    fontWeight: "bold",
                                }}
                                onClick={() => url ? window.open(url) : {}}
                            >
                                {detail}
                            </Typography>
                        }
                    />
                    : <Typography
                        sx={{
                            fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default },
                            color: themes.color.mainText,
                            fontWeight: url ? "bold" : "",
                            textDecoration: url ? "underline" : "",
                            cursor: url ? "pointer" : "",
                        }}
                        onClick={() => url ? window.open(url) : {}}
                    >
                        {detail}
                    </Typography>
                }
            </Grid>
        );
    }

    const renderRowDetailForReference = (title: string, detail: string, phone: string, mb?: boolean) => {
        return (
            <Grid
                container
                item xs={12}
                columns={{ xs: 2, md: 12 }}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                onClick={() => window.open(`tel:${phone}`, '_self')}
                sx={{
                    paddingLeft: `${themes.marginComponent / 2}px`,
                    paddingRight: `${themes.marginComponent / 3}px`,
                    mb: mb ? `${themes.marginComponent / 6}px` : 0,
                    "&:hover": { cursor: "pointer", opacity: 0.8 }
                }}
            >
                <Grid wrap={'nowrap'} container direction={'row'} alignItems={'flex-start'}>
                    <CustomIcon name={"phone"} color={"white"} sizeNumber={20} />
                    <Typography
                        sx={{
                            fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default },
                            color: themes.color.mainText,
                            paddingLeft: `${themes.marginComponent / 6}px`
                        }}
                    >
                        {title + " : " + detail}
                    </Typography>
                </Grid>
            </Grid>
        );
    }

    const renderPersonalInformation = () => {
        return (
            <Grid
                container
                item xs={12}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                sx={{
                    width: { xs: "90%", lg: themes.containerWidth },
                    backgroundColor: themes.color.hover,
                    marginTop: `${themes.marginComponent / 2}px`,
                    paddingTop: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingBottom: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingLeft: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                    paddingRight: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                    borderRadius: themes.radius,
                    boxShadow: themes.shadow
                }}
            >
                {renderRowHeader(word().TEXT_PERSONAL)}
                {renderRowDetail(12, word().TEXT_NAME, word().TEXT_NAME_DETAIL, true)}
                {renderRowDetail(12, word().TEXT_ADDRESS, word().TEXT_ADDRESS_DETAIL, true)}
                {renderRowDetail(6, word().TEXT_MOBILE, word().TEXT_MOBILE_DETAIL, true)}
                {renderRowDetail(6, word().TEXT_EMAIL, word().TEXT_EMAIL_DETAIL, true)}
                {renderRowDetail(6, word().TEXT_BIRTHDATE, word().TEXT_BIRTHDATE_DETAIL, true)}
                {renderRowDetail(6, word().TEXT_AGE, calMyAge(), true)}
                {renderRowDetail(6, word().TEXT_NATIONALITY, word().TEXT_NATIONALITY_DETAIL, true)}
                {renderRowDetail(6, word().TEXT_MARITAL_STATUS, word().TEXT_MARITAL_STATUS_DETAIL, true)}
                {renderRowDetail(12, word().TEXT_INTEREST, word().TEXT_INTEREST_DETAIL)}
            </Grid>
        );
    }

    const renderEducation = () => {
        return (
            <Grid
                container
                item xs={12}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                sx={{
                    width: { xs: "90%", lg: themes.containerWidth },
                    backgroundColor: themes.color.hover,
                    marginTop: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingTop: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingBottom: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingLeft: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                    paddingRight: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                    borderRadius: themes.radius,
                    boxShadow: themes.shadow
                }}
            >
                {renderRowHeader(word().TEXT_EDUCATION)}
                {renderRowDetail(12, word().TEXT_EDUCATION_ITEM_1, word().TEXT_EDUCATION_ITEM_DETAIL_1, true)}
                {renderRowDetail(12, word().TEXT_EDUCATION_ITEM_2, word().TEXT_EDUCATION_ITEM_DETAIL_2)}
            </Grid>
        );
    }

    const renderWorkExperience = () => {
        return (
            <Grid
                container
                item xs={12}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                sx={{
                    width: { xs: "90%", lg: themes.containerWidth },
                    backgroundColor: themes.color.hover,
                    marginTop: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingTop: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingBottom: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingLeft: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                    paddingRight: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                    borderRadius: themes.radius,
                    boxShadow: themes.shadow
                }}
            >
                {renderRowHeader(word().TEXT_WORK_EXPERIENCE)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_ITEM_1, urlDigio, false, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_POSITION_1, null, false)}
                <CustomDivider />
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_PROJECT_1, urlTtbSmartShop, true, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_1_1, null, false, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_1_2, null, false, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_1_3, null, false, true)}
                <CustomDivider />
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_PROJECT_2, urlEwht, true, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_2_1, null, false)}
                <CustomDivider />
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_PROJECT_3, null, true, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_3_1, null, false, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_3_2, null, false)}
                <CustomDivider />
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_PROJECT_4, urlDigiPay, true, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_4_1, null, false, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_4_2, null, false)}
                <CustomDivider />
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_PROJECT_5, null, true, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_5_1, null, false, true)}
                {renderRowDetailForWorkExperience(word().TEXT_WORK_EXPERIENCE_DETAIL_5_2, null, false)}
            </Grid>
        );
    }

    const renderReferences = () => {
        return (
            <Grid
                container
                item xs={12}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                sx={{
                    width: { xs: "90%", lg: themes.containerWidth },
                    backgroundColor: themes.color.hover,
                    marginTop: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingTop: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingBottom: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                    paddingLeft: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                    paddingRight: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                    borderRadius: themes.radius,
                    boxShadow: themes.shadow
                }}
            >
                {renderRowHeader(word().TEXT_REFERENCES)}
                {renderRowDetailForReference(word().TEXT_REFERENCE_ITEM_1, word().TEXT_REFERENCE_ITEM_DETAIL_1, phoneItem[0])}
            </Grid>
        );
    }

    return (
        <Box sx={{ display: "flex", backgroundColor: themes.color.bg }}>
            <CustomAppbar />
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` }, paddingTop: themes.appbarHeight }}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingBottom: `${themes.marginComponent}px` }}>
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