import { Alert, Box, Grid, Snackbar, Typography } from "@mui/material";
import CustomAppbar from "../../component/appbar/CustomAppbar";
import themes from "../../constant/themes";
import facebookImg from "../../image/facebook.png";
import instagramImg from "../../image/instagram.png";
import lineImg from "../../image/line.png";
import gmailImg from "../../image/gmail.png";
import telephoneImg from "../../image/telephone.png";
import { word } from "../../languages/Word";
import CustomHeader from "../../component/text/CustomHeader";
import CustomIcon from "../../component/icon/CustomIcon";
import { useState } from "react";
import Footer from "../../component/footer/Footer";

export default function Contact() {
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const listContact = [
        { src: gmailImg, size: 20, text: "Gmail", detail: word().TEXT_EMAIL_DETAIL, chip: [themes.color.main], action: "copy" },
        { src: facebookImg, size: 20, text: "Facebook", detail: "Amity Joke Rbv", chip: ["#4267B2"], action: "add" },
        { src: instagramImg, size: 20, text: "Instagram", detail: "amity_joke", chip: ["#FCAF45", "#E1306C"], action: "add" },
        { src: lineImg, size: 20, text: "Line", detail: "Line ID: joker_surasit", chip: ["#06C755"], action: "add" },
        { src: telephoneImg, size: 20, text: "Mobile number", detail: "+66872237007", chip: ["#41A5EE"], action: "phone" },
    ];

    const handleClickItemContact = async (text: string) => {
        const action = text.toUpperCase();
        if (action === "GMAIL") {
            await navigator.clipboard.writeText(listContact[0].detail);
            setOpenAlert(true);
        } else if (action === "FACEBOOK") {
            window.open("https://www.facebook.com/surasit.suwannara");
        } else if (action === "INSTAGRAM") {
            window.open("https://www.instagram.com/amity_joke/");
        } else if (action === "LINE") {
            window.open("https://line.me/ti/p/cMWgFVYObT");
        } else if (action === "MOBILE NUMBER") {
            window.open(`tel:${listContact[4].detail}`, '_self');
        }
    }

    const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
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
                <Alert severity="success" sx={{ width: '100%' }}>
                    {word().TEXT_COPY_EMAIL}
                </Alert>
            </Snackbar>
        );
    }

    const renderItemContact = (key: string, src: any, size: number, text: string, detail: string, chip: any, mbxs: boolean, mbmd: boolean, action: string) => {
        return (
            <Grid
                key={key}
                item xs={5.5}
                container
                justifyContent={"center"}
                alignItems={"center"}
                columns={{ xs: 2, md: 12 }}
                sx={{
                    backgroundColor: "white",
                    borderRadius: "40px",
                    mb: { xs: mbxs ? `${themes.marginComponent / 3}px` : "0px", md: mbmd ? `${themes.marginComponent / 3}px` : "0px" },
                    cursor: "pointer",
                    boxShadow: themes.shadow,
                    "&:hover": {
                        opacity: 0.8
                    }
                }}
                onClick={() => handleClickItemContact(text)}
            >
                <Grid
                    item xs={2}
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        height: "100%",
                        backgroundImage: chip.length === 2 ? `linear-gradient(90deg, ${chip[0]}, ${chip[1]})` : "",
                        backgroundColor: chip.length === 1 ? chip[0] : "",
                        borderTopLeftRadius: "40px",
                        borderBottomLeftRadius: "40px",
                        paddingTop: { xs: `${themes.marginComponent / 4}px`, md: `${themes.marginComponent / 3}px` },
                        paddingBottom: { xs: `${themes.marginComponent / 4}px`, md: `${themes.marginComponent / 3}px` },
                    }}
                >
                    <Grid
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{
                            borderRadius: `${size}px`,
                            padding: `${themes.marginComponent / 3}px`,
                            backgroundColor: "white",
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
                    item xs={10}
                    container
                    direction={"row"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    sx={{
                        height: "100%",
                        paddingLeft: `${themes.marginComponent / 3}px`,
                        paddingRight: `${themes.marginComponent / 1.5}px`
                    }}
                    wrap='nowrap'
                >
                    <Grid
                        xs={11}
                        item
                        container
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        wrap='nowrap'
                        textOverflow={"ellipsis"}
                    >
                        <Typography sx={{ fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default }, color: "black", paddingLeft: "3px", fontWeight: "bold" }}>
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
                                backgroundImage: chip.length === 2 ? `linear-gradient(90deg, ${chip[0]}, ${chip[1]})` : "",
                                backgroundColor: chip.length === 1 ? chip[0] : "",
                                padding: "5px",
                                borderRadius: "50%",
                            }}
                        >
                            <CustomIcon name={action} color={"white"} sizeNumber={20} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    const renderContact = () => {
        return (
            <Grid
                container
                item xs={12}
                direction={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
                sx={{
                    width: { xs: "90%", lg: themes.containerWidth },
                    backgroundColor: themes.color.hover,
                    marginTop: `${themes.marginComponent / 2}px`,
                    padding: `${themes.marginComponent / 2}px`,
                    borderRadius: themes.radius,
                    boxShadow: themes.shadow
                }}
            >
                {listContact.map((item: any, index: number) => {
                    return renderItemContact(
                        "CARD_CONTACT_" + (item.text).toUpperCase(),
                        item.src,
                        item.size,
                        item.text,
                        item.detail,
                        item.chip,
                        index !== listContact.length - 1,
                        index !== listContact.length - 1,
                        item.action
                    );
                })}
                {listContact.length % 2 !== 0 ? <Grid item xs={5.5} /> : null}
            </Grid>
        );
    }

    return (
        <Box sx={{ display: "flex", backgroundColor: themes.color.bg }}>
            <CustomAppbar />
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` }, paddingTop: themes.appbarHeight }}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingBottom: `${themes.marginComponent}px`}}>
                    <CustomHeader text={word().MENU_4} />
                    {renderContact()}
                    <Footer />
                </Grid>
            </Box>
            <SnackbarAlertCopyEmail />
        </Box>
    );
}