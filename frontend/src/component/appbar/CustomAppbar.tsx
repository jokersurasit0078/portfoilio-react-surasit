import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu } from "@mui/material";
import CustomIcon from "../icon/CustomIcon";
import portfolio from "../../image/portfolio.png";
import iconThai from "../../image/icon_thai.png";
import iconEng from "../../image/icon_eng.png";
import themes from "../../constant/themes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { word } from "../../languages/Word";
import path from "../../constant/path";

declare const window: any;

// interface ICustomAppbarProps {
//     title?: string;
// }

export default function CustomAppbar() {
    // const { title = "" } = props;
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const phoneContact = "tel:+66872237007";
    const listMenu = [
        { text: word().MENU_1, icon: "home", url: path.home.url },
        { text: word().MENU_2, icon: "about", url: path.about.url },
        { text: word().MENU_3, icon: "skill", url: path.skill.url },
        { text: word().MENU_4, icon: "contact", url: path.contact.url },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        getLanguage();
    }, []);

    const getLanguage = async () => {
        const language: any = localStorage.getItem("lang");
        if (language === undefined || language === null) {
            await localStorage.setItem("lang", window.LIST_LANGUAGES[0].value);
        }
    }

    const handleChangeLanguage = async (newLang: string) => {
        await localStorage.setItem("lang", newLang);
        setAnchorEl(null);
        window.location.reload();
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuSideBar = (url: string) => {
        navigate(url, { replace: true });
    }

    const handleClickArrowMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseArrowMenu = () => {
        setAnchorEl(null);
    };

    const renderListMenuDrawerForMobile = (
        <div style={{ backgroundColor: themes.color.bg }}>
            <Toolbar sx={{ bgcolor: themes.color.bg }}>
                <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        height: "50px",
                        width: "200px"
                    }}
                >
                    <img src={portfolio} alt="portfolio" width={"40px"} height={"40px"} />
                    <Typography sx={{ fontSize: themes.fontsize.subHeader, fontWeight: "bold", paddingLeft: "5px", color: themes.color.mainText }}>Portfolio</Typography>
                </Grid>
            </Toolbar>
            <List>
                {listMenu.map((item: any, index: number) => (
                    <ListItem key={"MENU_ITEM_MOBILE_" + (item.text).toLocaleUpperCase()} disablePadding>
                        <ListItemButton
                            sx={{
                                "&:hover": {
                                    bgcolor: themes.color.hover
                                }
                            }}
                            onClick={() => handleMenuSideBar(item.url)}
                        >
                            <ListItemIcon>
                                <CustomIcon name={item.icon} color={themes.color.mainText} />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{
                                    color: themes.color.mainText,
                                    fontWeight: "bold",
                                    fontSize: themes.fontsize.default
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const renderListMenuDrawerForDesktop = (
        <div style={{ backgroundColor: themes.color.bg }}>
            <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ "&:hover": { bgcolor: themes.color.hover }, width: `${themes.drawerWidth}px`, height: themes.appbarHeight, borderRadius: "0px" }}
                onClick={handleDrawerToggle}
            >
                <Grid container justifyContent={"center"} alignItems={"center"} sx={{ border: `2px solid ${themes.color.mainText}`, width: "35px", height: "35px", borderRadius: "5px" }}>
                    <CustomIcon name={"menu"} color={themes.color.mainText} />
                </Grid>
            </IconButton>
            <List>
                {listMenu.map((item: any, index: number) => (
                    <ListItem key={"MENU_ITEM_DESKTOP_" + (item.text).toLocaleUpperCase()} disablePadding sx={{ "&:hover": { bgcolor: themes.color.hover } }}>
                        <Grid
                            container
                            direction={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            sx={{ paddingTop: "5px", paddingBottom: "5px", cursor: "pointer" }}
                            onClick={() => handleMenuSideBar(item.url)}
                        >
                            <IconButton
                                size="large"
                                color="inherit"
                                aria-label="menu"
                                sx={{ padding: "5px" }}
                            >
                                <CustomIcon name={item.icon} color={themes.color.mainText} />
                            </IconButton>
                            <Typography textAlign={"center"} sx={{ fontSize: themes.fontsize.mini, fontWeight: "bold", color: themes.color.mainText }}>
                                {item.text}
                            </Typography>
                        </Grid>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const renderAppbarRightMenu = () => {
        const listItemRightMenu = [
            { text: "English", icon: iconEng, value: window.LIST_LANGUAGES[0].value },
            { text: "ภาษาไทย", icon: iconThai, value: window.LIST_LANGUAGES[1].value },
        ];
        return (
            <>
                <Grid sx={{ display: { xs: "flex", sm: "none" } }}>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ height: themes.appbarHeight, borderRadius: "0px" }}
                        onClick={handleClickArrowMenu}
                    >
                        <Grid container justifyContent={"center"} alignItems={"center"} sx={{ border: `2px solid ${themes.color.mainText}`, width: "35px", height: "35px", borderRadius: "5px" }}>
                            <CustomIcon name={"arrow"} color={themes.color.mainText} />
                        </Grid>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseArrowMenu}
                        sx={{
                            display: { xs: "flex", sm: "none" },
                            "& .MuiPaper-root": {
                                bgcolor: themes.color.hover
                            }
                        }}
                    >
                        {listItemRightMenu.map((item: any, index: number) => {
                            return (
                                <Grid
                                    key={"MENU_ARROW_ITEM_" + (item.text).toUpperCase()}
                                    container
                                    justifyContent={"flex-start"}
                                    alignItems={"center"}
                                    onClick={() => handleChangeLanguage(item.value)}
                                    sx={{ height: "30px", paddingRight: "10px", paddingLeft: "10px", cursor: "pointer" }}
                                    id={"BT_ARROW_ITEM_" + (item.text).toUpperCase()}
                                >
                                    <img src={item.icon} alt="portfolio" width={"20px"} height={"20px"} style={{ padding: "2px", paddingRight: "6px" }} />
                                    <Typography noWrap style={{ fontSize: themes.fontsize.small, color: themes.color.mainText }}>{item.text}</Typography>
                                </Grid>
                            );
                        })}
                        <Divider sx={{ mt: "5px", mb: "5px" }} />
                        <Grid
                            container
                            justifyContent={"flex-start"}
                            alignItems={"center"}
                            sx={{ height: "30px", paddingRight: "10px", paddingLeft: "10px" }}
                        >
                            <Button
                                id={"BT_ARROW_ITEM_CALL_ME_NOW"}
                                variant={"text"}
                                size={"small"}
                                sx={{ textTransform: "none", padding: "0px", paddingLeft: "5px", color: themes.color.mainText, fontSize: themes.fontsize.small }}
                                onClick={handleCloseArrowMenu}
                                href={phoneContact}
                                startIcon={<CustomIcon name={"phone"} color={themes.color.mainText} sizeNumber={22} />}
                            >
                                {word().TEXT_CALL_ME_NOW}
                            </Button>
                        </Grid>
                    </Menu>
                </Grid >
                <Grid
                    container
                    direction={"row"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    sx={{
                        width: "210px",
                        display: { xs: "none", sm: "flex" }
                    }
                    }
                >
                    <Grid
                        sx={{
                            padding: "5px",
                            borderRadius: themes.radius,
                            bgcolor: themes.color.hover,
                            boxShadow: themes.shadow,
                            mr: "10px",
                        }}
                    >
                        <IconButton
                            id={"BT_LANG_ENG"}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => handleChangeLanguage(window.LIST_LANGUAGES[0].value)}
                            color="inherit"
                            sx={{
                                padding: "5px",
                                mr: "0px",
                            }}
                        >
                            <img src={iconEng} alt="portfolio" width={"17px"} height={"17px"} />
                        </IconButton>
                        <IconButton
                            id={"BT_LANG_THAI"}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => handleChangeLanguage(window.LIST_LANGUAGES[1].value)}
                            color="inherit"
                            sx={{
                                padding: "5px",
                                mr: "0px",
                            }}
                        >
                            <img src={iconThai} alt="portfolio" width={"20px"} height={"20px"} />
                        </IconButton>
                    </Grid>
                    <Button
                        id={"BT_CALL_ME_NOW"}
                        variant={"contained"}
                        size={"small"}
                        sx={{ height: "35px", textTransform: "none", color: themes.color.mainText, fontSize: themes.fontsize.small }}
                        startIcon={<CustomIcon name={"phone"} color={themes.color.mainText} />}
                        href={phoneContact}
                    >
                        {word().TEXT_CALL_ME_NOW}
                    </Button>
                </Grid >
            </>
        );
    }

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{
                    height: themes.appbarHeight,
                    bgcolor: themes.color.bg,
                    boxShadow: "none"
                }}
            >
                <Grid container direction={"row"} justifyContent={"flex-start"} alignItems={"center"} sx={{ height: themes.appbarHeight, paddingRight: "10px" }}>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ width: `${themes.drawerWidth}px` }}
                        onClick={handleDrawerToggle}
                    >
                        <Grid container justifyContent={"center"} alignItems={"center"} sx={{ border: `2px solid ${themes.color.mainText}`, width: "35px", height: "35px", borderRadius: "5px" }}>
                            <CustomIcon name={"menu"} color={themes.color.mainText} />
                        </Grid>
                    </IconButton>
                    <Grid container justifyContent={"space-between"} alignItems={"center"} sx={{ width: `calc(100% - ${themes.drawerWidth}px)` }}>
                        <Grid
                            container
                            justifyContent={"flex-start"}
                            alignItems={"center"}
                            sx={{
                                height: "50px",
                                width: "150px"
                            }}
                        >
                            <img src={portfolio} alt="portfolio" width={"40px"} height={"40px"} />
                            <Typography sx={{ fontSize: themes.fontsize.subHeader, fontWeight: "bold", paddingLeft: "3px" }}>Portfolio</Typography>
                        </Grid>
                        {renderAppbarRightMenu()}
                    </Grid>
                </Grid>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: themes.drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: themes.drawerWidth * 3,
                            bgcolor: themes.color.bg
                        },
                    }}
                >
                    {renderListMenuDrawerForMobile}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: themes.drawerWidth, borderWidth: "0px",
                            bgcolor: themes.color.bg
                        },
                    }}
                    open
                >
                    {renderListMenuDrawerForDesktop}
                </Drawer>
            </Box>
        </Box>
    );
}