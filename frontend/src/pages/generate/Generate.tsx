import { Box, Button, Fade, Grid, Typography, TextField, OutlinedInput, Select, InputAdornment, IconButton, MenuItem, Checkbox, FormControlLabel, Chip, Snackbar, Alert, Paper, Dialog, CircularProgress } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import themes from "../../constants/themes";

import { word } from "../../languages/Word";
import Footer from "../../components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import CustomIcon from "../../components/icon/CustomIcon";
import CustomHeader from "../../components/text/CustomHeader";

interface Props {
    tag: React.ElementType;
    text?: string;
    icon?: any;
    style?: Object;
    id?: string;
    value?: string;
    size?: string;
    disabled?: boolean;
    // ACTION
    onClick?: any;
    onChange?: any;
    // STYLE
    sx?: Object;
    variant?: string;
    // TYPOGRAPHY
    align?: string,
    textOverflow?: string;
    noWrap?: boolean;
    textAlign?: string;
    // GRID
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
    container?: boolean;
    item?: boolean;
    xs?: number;
    columns?: Object;
    wrap?: string;
    // BUTTON
    startIcon?: any;
    endIcon?: any;
    // TEXTFIELD
    fullWidth?: boolean;
    inputProps?: Object;
    helperText?: string;
    error?: boolean;
    FormHelperTextProps?: Object;
    placeholder?: string;
    multiline?: boolean;
    rows?: number;
    startAdornment?: any;
    endAdornment?: any;
}

export default function Generate() {
    const [strTag, setStrTag] = useState<string>("Grid");
    const tagRef = useRef<HTMLDivElement | null>(null);
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [showSetSxOrStyle, setShowSetSxOrStyle] = useState<boolean>(false);
    const [regenerateCode, setRegenerateCode] = useState<boolean>(false);
    const [typeSet, setTypeSet] = useState<"SX" | "STYLE">("SX");
    const [sxValue, setSxValue] = useState<any>(defaultSx);
    const [styleValue, setStyleValue] = useState<any>(defaultStyle);
    const [typeValue, setTypeValue] = useState<any>(defaultSx);
    const typeValueRef: any = useRef();

    // STATE RENDER CUSTOM MUI TAG
    const [tag, setTag] = useState<React.ElementType>(Grid);
    const [text, setText] = useState<string>("Test");
    const [icon, setIcon] = useState<any>(<CustomIcon name={"copy"} color={"black"} />);
    const textIcon = `<CustomIcon name={"copy"} color={"black"} />`;
    const [style, setStyle] = useState<Object>({});
    const [textStyle, setTextStyle] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [size, setSize] = useState<"small" | "medium" | "large">("medium");
    const [disabled, setDisabled] = useState<boolean>(false);
    // ACTION
    const [onClickAction, setOnClickAction] = useState<boolean>(true);
    const textClick = `onClick={() => {}}`;
    const [onChangeAciton, setOnChangeAction] = useState<boolean>(true);
    const textChange = `onChange={(e) => {}}`;
    // STYLE
    const [sx, setSx] = useState<Object>({});
    const [textSx, setTextSx] = useState<string>("");
    const [variant, setVariant] = useState<"filled" | "contained" | "outlined" | "text" | "standard">("outlined");
    // TYPOGRAPHY
    const [align, setAlign] = useState<"center" | "inherit" | "justify" | "left" | "right">("left");
    const [textOverflow, setTextOverflow] = useState<"-moz-initial" | "clip" | "ellipsis" | "inherit" | "initial" | "revert" | "revert-layer" | "">("");
    const [noWrap, setNoWrap] = useState<true | false>(false);
    const [textAlign, setTextAlign] = useState<"-moz-initial" | "center" | "end" | "inherit" | "initial" | "justify" | "left" | "match-parent" | "revert" | "revert-layer" | "right" | "start" | "unset">("left");
    // GRID
    const [direction, setDirection] = useState<"row" | "row-reverse" | "column" | "column-reverse">("row");
    const [justifyContent, setJustifyContent] = useState<"-moz-initial" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "left" | "normal" | "revert" | "revert-layer" | "right" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | "unset">("center");
    const [alignItems, setAlignItems] = useState<"-moz-initial" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherit" | "initial" | "normal" | "revert" | "revert-layer" | "self-end" | "self-start" | "start" | "stretch" | "unset">("center");
    const [container, setContainer] = useState<true | false>(false);
    const [item, setItem] = useState<true | false>(false);
    const [xs, setXs] = useState<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12">("12");
    const [columns, setColumns] = useState<Object | number>({});
    const [wrap, setWrap] = useState<"nowrap" | "wrap" | "wrap-reverse" | "">("");
    // BUTTON
    const [showStartIcon, setShowStartIcon] = useState<boolean>(false);
    const startIcon = (<CustomIcon name={"copy"} color={"black"} />);
    const [showEndIcon, setShowEndIcon] = useState<boolean>(false);
    const endIcon = (<CustomIcon name={"copy"} color={"black"} />);
    // TEXTFIELD
    const [fullWidth, setFullWidth] = useState<true | false>(false);
    const [inputProps, setInputProps] = useState<Object>({});
    const [helperText, setHelperText] = useState<string>("");
    const [error, setError] = useState<true | false>(false);
    const [FormHelperTextProps, setFormHelperTextProps] = useState<Object>({});
    const [placeholder, setPlaceholder] = useState<string>("");
    const [multiline, setMultiline] = useState<true | false>(false);
    const [rows, setRows] = useState<number | "">("");
    const [showStartAdornment, setShowStartAdornment] = useState<boolean>(false);
    const [showEndAdornment, setShowEndAdornment] = useState<boolean>(false);
    const startAdornment = (
        <InputAdornment position={"start"}>
            <CustomIcon name={"copy"} color={"black"} />
        </InputAdornment>
    );
    const endAdornment = (
        <InputAdornment position={"end"}>
            <CustomIcon name={"copy"} color={"black"} />
        </InputAdornment>
    );
    const textStartAdornment = `\n\t\t<InputAdornment position={"start"}>\n\t\t\t<CustomIcon name={"copy"} color={"black"} />\n\t\t</InputAdornment>`;
    const textEndAdornment = `\n\t\t<InputAdornment position={"end"}>\n\t\t\t<CustomIcon name={"copy"} color={"black"} />\n\t\t</InputAdornment>`;

    // SOURCE CODE
    const [sourceCode, setSourceCode] = useState<string>();

    useEffect(() => {
        typeValueRef.current = typeValue;
    }, [typeValue]);

    const setTagFromSelectAction = (targetTag: string) => {
        for (let i = 0; i < listTag.length; i++) {
            if (targetTag === listTag[i].menu) {
                setTag(listTag[i].tag);
                break;
            }
        }
    }

    const onScrollListTag = (position: string) => {
        // console.log("Scroll Width : " + tagRef.current?.scrollWidth);
        // console.log("Offset Width : " + tagRef.current?.offsetWidth);
        // console.log("Client Width : " + tagRef.current?.clientWidth);
        if (position === "left") {
            tagRef.current?.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        } else if (position === "right") {
            tagRef.current?.scrollTo({
                left: 1000,
                behavior: "smooth",
            });
        }
    }

    const onClearComponent = () => {
        setSxValue(defaultSx);
        setTypeValue(defaultSx);
        setText("Test");
        setIcon(<CustomIcon name={"copy"} color={"black"} />);
        setStyle({});
        setTextStyle("");
        setId("");
        setValue("");
        setSize("medium");
        setDisabled(false);
        setOnClickAction(true);
        setOnChangeAction(true);
        setSx({});
        setTextSx("");
        setVariant("outlined");
        setAlign("left");
        setTextOverflow("");
        setNoWrap(false);
        setTextAlign("left");
        setDirection("row");
        setJustifyContent("center");
        setAlignItems("center");
        setContainer(true);
        setItem(true);
        setXs("12");
        setColumns({});
        setWrap("");
        setShowStartIcon(false);
        setShowEndIcon(false);
        setFullWidth(false);
        setInputProps({});
        setHelperText("");
        setError(false);
        setFormHelperTextProps({});
        setPlaceholder("");
        setMultiline(false);
        setRows("");
        setShowStartAdornment(false);
        setShowEndAdornment(false);
    }

    const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenAlert(false);
    };

    const onClickSxOrStyleValue = (item: string, check: boolean, value: any, style: any) => {
        let oldValue = [];
        if (typeSet === "SX") oldValue = sxValue;
        else if (typeSet === "STYLE") oldValue = styleValue;
        const newSxObj = { name: item, use: check, value: check ? value : "", style: style };
        for (let i = 0; i < oldValue.length; i++) {
            if (item === oldValue[i].name) {
                oldValue[i] = newSxObj;
                break;
            }
        }
        if (typeSet === "SX") setSxValue(oldValue);
        else if (typeSet === "STYLE") setStyleValue(oldValue);
        setTypeValue([...oldValue]);
    }

    const onOpenPopupSxOrStyle = (type: "SX" | "STYLE") => {
        setTypeSet(type);
        if (type === "SX") setTypeValue(sxValue);
        else if (type === "STYLE") setTypeValue(styleValue);
        setShowSetSxOrStyle(true);
    }

    const checkTypeValueObj = (value: string) => {
        let newValue: any = "";
        let cutDoubleCod = value.replaceAll("\"", "");
        if (/^[0-9]*$/.test(cutDoubleCod)) newValue = parseInt(cutDoubleCod);
        else newValue = cutDoubleCod;
        return newValue;
    }

    const onClosePopupSxOrStyle = () => {
        let newSxOrStyleArr = [];
        let newSxOrStyleObj: any = {};
        if (typeSet === "SX") {
            for (let i = 0; i < sxValue.length; i++) {
                if (sxValue[i].use) {
                    newSxOrStyleArr.push(sxValue[i]);
                    newSxOrStyleObj[sxValue[i].name] = checkTypeValueObj(sxValue[i].value);
                }
            }
            if (newSxOrStyleArr.length > 0) {
                const textSxStart = `\n\tsx={{\n`;
                const textSxEnd = `\t}}`;
                let detailTextSx = ``;
                for (let i = 0; i < newSxOrStyleArr.length; i++) {
                    const item = newSxOrStyleArr[i];
                    detailTextSx = detailTextSx + `\t\t${item.name}: ${item.value}${i !== newSxOrStyleArr.length - 1 ? `,` : ""}\n`;
                }
                const sumTextSx = textSxStart + detailTextSx + textSxEnd;
                setSx(newSxOrStyleObj);
                setTextSx(sumTextSx);
            } else {
                setSx({});
                setTextSx("");
                setTypeValue(defaultSx);
            }
        } else if (typeSet === "STYLE") {
            for (let i = 0; i < styleValue.length; i++) {
                if (styleValue[i].use) {
                    newSxOrStyleArr.push(styleValue[i]);
                    newSxOrStyleObj[styleValue[i].name] = checkTypeValueObj(styleValue[i].value);
                }
            }
            if (newSxOrStyleArr.length > 0) {
                const textStyleStart = `\n\tstyle={{\n`;
                const textStyleEnd = `\t}}`;
                let detailTextStyle = ``;
                for (let i = 0; i < newSxOrStyleArr.length; i++) {
                    const item = newSxOrStyleArr[i];
                    detailTextStyle = detailTextStyle + `\t\t${item.name}: ${item.value}${i !== newSxOrStyleArr.length - 1 ? `,` : ""}\n`;
                }
                const sumTextStyle = textStyleStart + detailTextStyle + textStyleEnd;
                setStyle(newSxOrStyleObj);
                setTextStyle(sumTextStyle);
            } else {
                setStyle({});
                setTextStyle("");
                setTypeValue(defaultStyle);
            }
        }
        setShowSetSxOrStyle(false);
    }

    const onCloseResetCSS = () => {
        if (typeSet === "SX") {
            const defaultNewValue = [
                { name: "m", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "mt", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "mb", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "ml", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "mr", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "p", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "pt", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "pb", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "pl", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "pr", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "width", use: false, value: "", style: [`"120px"`, `120`, `"20%"`] },
                { name: "height", use: false, value: "", style: [`"35px"`, `35`, `"10%"`] },
                { name: "minWidth", use: false, value: "", style: [`"120px"`, `120`, `"20%"`] },
                { name: "minHeight", use: false, value: "", style: [`"35px"`, `35`, `"10%"`] },
                { name: "color", use: false, value: "", style: [`"red"`, `"#ff00ef"`] },
                { name: "bgcolor", use: false, value: "", style: [`"red"`, `"#ff00ef"`] },
                { name: "backgroundImage", use: false, value: "", style: [`"linear-gradient(90deg, #FCAF45, #E1306C"`] },
                { name: "border", use: false, value: "", style: [`"1px solid #ffff00"`] },
                { name: "borderRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "borderTopLeftRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "borderTopRightRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "borderBottomLeftRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "borderBottomRightRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "boxShadow", use: false, value: "", style: [`"3px 3px 3px #C4C4C4"`] },
                { name: "textAlign", use: false, value: "", style: [`"left"`, `"center"`, `"right"`] },
                { name: "textDecoration", use: false, value: "", style: [`"underline"`, `"line-through"`] },
                { name: "textTransform", use: false, value: "", style: [`"none"`, `"uppercase"`, `"capitalize"`] },
                { name: "fontSize", use: false, value: "", style: [`"16px"`, `16`] },
                { name: "fontStyle", use: false, value: "", style: [`"normal"`, `"italic"`] },
                { name: "fontWeight", use: false, value: "", style: [`"bold"`, `700`] },
                { name: "opacity", use: false, value: "", style: [`0.3`, `0.8`] },
                { name: "display", use: false, value: "", style: [`"none"`, `"flex"`, `"block"`] },
            ];
            setTypeValue(defaultNewValue);
            setSxValue(defaultNewValue);
            setSx({});
            setTextSx("");
        } else if (typeSet === "STYLE") {
            const defaultNewValue = [
                { name: "margin", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "marginTop", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "marginBottom", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "marginLeft", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "marginRight", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "padding", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "paddingTop", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "paddingBottom", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "paddingLeft", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "paddingRight", use: false, value: "", style: [`"10px"`, `10`] },
                { name: "width", use: false, value: "", style: [`"120px"`, `120`, `"20%"`] },
                { name: "height", use: false, value: "", style: [`"35px"`, `35`, `"10%"`] },
                { name: "minWidth", use: false, value: "", style: [`"120px"`, `120`, `"20%"`] },
                { name: "minHeight", use: false, value: "", style: [`"35px"`, `35`, `"10%"`] },
                { name: "color", use: false, value: "", style: [`"red"`, `"#ff00ef"`] },
                { name: "bgcolor", use: false, value: "", style: [`"red"`, `"#ff00ef"`] },
                { name: "backgroundColor", use: false, value: "", style: [`"linear-gradient(90deg, #FCAF45, #E1306C"`] },
                { name: "border", use: false, value: "", style: [`"1px solid #ffff00"`] },
                { name: "borderRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "borderTopLeftRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "borderTopRightRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "borderBottomLeftRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "borderBottomRightRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
                { name: "boxShadow", use: false, value: "", style: [`"3px 3px 3px #C4C4C4"`] },
                { name: "textAlign", use: false, value: "", style: [`"left"`, `"center"`, `"right"`] },
                { name: "textDecoration", use: false, value: "", style: [`"underline"`, `"line-through"`] },
                { name: "textTransform", use: false, value: "", style: [`"none"`, `"uppercase"`, `"capitalize"`] },
                { name: "fontSize", use: false, value: "", style: [`"16px"`, `16`] },
                { name: "fontStyle", use: false, value: "", style: [`"normal"`, `"italic"`] },
                { name: "fontWeight", use: false, value: "", style: [`"bold"`, `700`] },
                { name: "opacity", use: false, value: "", style: [`0.3`, `0.8`] },
                { name: "display", use: false, value: "", style: [`"none"`, `"flex"`, `"block"`] },
            ];
            setTypeValue(defaultNewValue);
            setStyleValue(defaultNewValue);
            setStyle({});
            setTextStyle("");
        }
        setShowSetSxOrStyle(false);
    }

    const onClickGenerateCode = () => {
        setRegenerateCode(true);
        if (strTag === listTag[0].menu) {
            setSourceCode(`<${strTag}${id ? `\n\tid={"${id}"}` : ""}${textSx ? textSx : ""}${textStyle ? textStyle : ""}${container ? "\n\tcontainer" : ""}${item ? "\n\titem" : ""}${xs ? `\n\txs={${xs}}` : ""}${direction ? `\n\tdirection={"${direction}"}` : ""}${justifyContent ? `\n\tjustifyContent={"${justifyContent}"}` : ""}${alignItems ? `\n\talignItems={"${alignItems}"}` : ""}${wrap ? `\n\twarp={"${wrap}"}` : ""}\n>
\t${strTag === listTag[2].menu ? `<CustomIcon name={"copy"} color={"black"} />` : `{"${text}"}`}
</${strTag}>`);
        } else if (strTag === listTag[1].menu) {
            setSourceCode(`<${strTag}\n\t${textClick}${id ? `\n\tid={"${id}"}` : ""}${textSx ? textSx : ""}${textStyle ? textStyle : ""}${disabled ? `\n\tdisabled` : ""}${variant ? `\n\tvariant={"${variant}"}` : ""}${size ? `\n\tsize={"${size}"}` : ""}${showStartIcon ? `\n\tstartIcon={${textIcon}}` : ""}${showEndIcon ? `\n\tendIcon={${textIcon}}` : ""}\n>
\t${strTag === listTag[2].menu ? `<CustomIcon name={"copy"} color={"black"} />` : `{"${text}"}`}
</${strTag}>`);
        } else if (strTag === listTag[2].menu) {
            setSourceCode(`<${strTag}\n\t${textClick}${id ? `\n\tid={"${id}"}` : ""}${textSx ? textSx : ""}${textStyle ? textStyle : ""}${disabled ? `\n\tdisabled` : ""}${size ? `\n\tsize={"${size}"}` : ""}\n>
\t${strTag === listTag[2].menu ? `<CustomIcon name={"copy"} color={"black"} />` : `{"${text}"}`}
</${strTag}>`);
        } else if (strTag === listTag[3].menu) {
            setSourceCode(`<${strTag}\n\t${textChange}${id ? `\n\tid={"${id}"}` : ""}${textSx ? textSx : ""}${textStyle ? textStyle : ""}${fullWidth ? `\n\tfullWidth` : ""}${value ? `\n\tvalue={"${value}"}` : ""}${disabled ? `\n\tdisabled` : ""}${variant ? `\n\tvariant={"${variant}"}` : ""}${size ? `\n\tsize={"${size}"}` : ""}${error ? `\n\terror={${error}}` : ""}${helperText ? `\n\thelperText={"${helperText}"}` : ""}${placeholder ? `\n\tplaceholder={"${placeholder}"}` : ""}${multiline ? `\n\tmultiline` : ""}${rows ? `\n\trow={${rows}}` : ""}\n/>`);
            // inputProps={inputProps}
            // FormHelperTextProps={FormHelperTextProps}
        } else if (strTag === listTag[4].menu) {
            setSourceCode(`<${strTag}\n\t${textChange}${id ? `\n\tid={"${id}"}` : ""}${textSx ? textSx : ""}${textStyle ? textStyle : ""}${fullWidth ? `\n\tfullWidth` : ""}${value ? `\n\tvalue={"${value}"}` : ""}${disabled ? `\n\tdisabled` : ""}${variant ? `\n\tvariant={"${variant}"}` : ""}${size ? `\n\tsize={"${size}"}` : ""}${error ? `\n\terror={${error}}` : ""}${placeholder ? `\n\tplaceholder={"${placeholder}"}` : ""}${showStartAdornment ? `\n\tstartAdornment={${textStartAdornment}\n\t}` : ""}${showEndAdornment ? `\n\tendAdornment={${textEndAdornment}\n\t}` : ""}\n/>`);
            // style={style}
            // sx={sx}
            // inputProps={inputProps}
        } else if (strTag === listTag[5].menu) {
            setSourceCode(`<${strTag}\n\t${textClick}${id ? `\n\tid={"${id}"}` : ""}${disabled ? `\n\tdisabled` : ""}${variant ? `\n\tvariant={"${variant}"}` : ""}${size ? `\n\tsize={"${size}"}` : ""}${showStartIcon ? `\n\tstartIcon={${textIcon}}` : ""}${showEndIcon ? `\n\tendIcon={${textIcon}}` : ""}\n>
\t${strTag === listTag[2].menu ? `<CustomIcon name={"copy"} color={"black"} />` : `{"${text}"}`}
</${strTag}>`);
        } else if (strTag === listTag[6].menu) {
            setSourceCode(`<${strTag}\n\t${textClick}${id ? `\n\tid={"${id}"}` : ""}${disabled ? `\n\tdisabled` : ""}${variant ? `\n\tvariant={"${variant}"}` : ""}${size ? `\n\tsize={"${size}"}` : ""}${showStartIcon ? `\n\tstartIcon={${textIcon}}` : ""}${showEndIcon ? `\n\tendIcon={${textIcon}}` : ""}\n>
\t${strTag === listTag[2].menu ? `<CustomIcon name={"copy"} color={"black"} />` : `{"${text}"}`}
</${strTag}>`);
        } else {

        }
        setTimeout(() => {
            setRegenerateCode(false);
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        }, 500);
    };

    const renderListTag = () => {
        return <Grid ref={tagRef} container wrap={"nowrap"} justifyContent={"flex-start"} sx={{ width: "70%", overflow: "hidden" }}>
            {listTag.map((item: any, index: number) => {
                return (
                    <Chip
                        key={"ITEM_TAG_" + (item.menu).toUpperCase()}
                        variant={strTag === item.menu ? "filled" : "outlined"}
                        color={"primary"}
                        onClick={() => {
                            setStrTag(item.menu);
                            setTagFromSelectAction(item.menu);
                            onClearComponent();
                            setSourceCode("");
                        }}
                        sx={{
                            height: "30px",
                            mr: listTag.length - 1 !== index ? `${themes.marginComponent / 4}px` : "0px",
                            color: "white",
                            "&:hover": {
                                opacity: 0.8,
                                cursor: "pointer"
                            }
                        }}
                        label={
                            <Typography sx={{ fontSize: themes.fontsize.small, fontWeight: "bold" }}>
                                {item.menu}
                            </Typography>
                        }
                    />
                );
            })}
        </Grid>
    }

    const renderItemRowSelect = (title: string, value: string, onChange: any, itemList: any, mb: boolean) => {
        return (
            <>
                <Typography
                    sx={{
                        fontSize: themes.fontsize.small,
                        color: themes.color.mainText,
                        mb: `${themes.marginComponent / 6}px`,
                        fontWeight: "bold"
                    }}
                >
                    {title}
                </Typography>
                <Select
                    fullWidth
                    id={"DD_SELECT_TAG"}
                    value={value}
                    placeholder={title}
                    onChange={onChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    size={"small"}
                    sx={{
                        bgcolor: themes.color.mainText,
                        fontSize: themes.fontsize.small,
                        mb: mb ? `${themes.marginComponent / 3}px` : 0,
                    }}
                >
                    {itemList.map((item: any) => {
                        return (
                            <MenuItem
                                id={item.key}
                                key={item.key}
                                value={item.value}
                                sx={{
                                    fontSize: themes.fontsize.small,
                                }}
                            >
                                {item.menu}
                            </MenuItem>
                        )
                    })}
                </Select>
            </>
        );
    }

    const renderItemRowTextField = (title: string, value: string, onChange: any, mb: boolean) => {
        return (
            <>
                <Typography
                    sx={{
                        fontSize: themes.fontsize.small,
                        color: themes.color.mainText,
                        mb: `${themes.marginComponent / 6}px`,
                        fontWeight: "bold"
                    }}
                >
                    {title}
                </Typography>
                <TextField
                    fullWidth
                    id={"TF_" + title.toLowerCase()}
                    value={value}
                    type={title === "Rows" ? "number" : "text"}
                    placeholder={title}
                    onChange={onChange}
                    inputProps={{
                        "aria-label": "Without label",
                        style: {
                            fontSize: themes.fontsize.small,
                        },
                        min: 1,
                        max: 10,
                    }}
                    size={"small"}
                    sx={{
                        bgcolor: themes.color.mainText,
                        borderRadius: "4px",
                        mb: mb ? `${themes.marginComponent / 3}px` : 0,
                    }}
                />
            </>
        );
    }

    const renderItemRowCheckBox = (title: string, value: boolean, onChange: any, mb: boolean) => {
        return (
            <FormControlLabel
                value={"end"}
                labelPlacement={"end"}
                sx={{ mb: mb ? `${themes.marginComponent / 6}px` : 0 }}
                control={
                    <Checkbox
                        id={"CB_" + title}
                        checked={value}
                        onChange={onChange}
                        inputProps={{ "aria-label": "controlled" }}
                        sx={{ p: 0, pl: "8px", pr: "8px", color: themes.color.mainText }}
                    />
                }
                label={
                    <Typography
                        sx={{
                            fontSize: themes.fontsize.small,
                            color: themes.color.mainText,
                        }}
                    >
                        {title}
                    </Typography>
                }
            />
        );
    }

    const renderStyleFromTag = () => {
        if (tag === listTag[0].tag) {
            return <>
                {renderItemRowTextField("Text", text, (e: any) => { setText(e.target.value); }, true)}
                {/* STYLE */}
                {renderItemRowTextField("ID", id, (e: any) => { setId(e.target.value); }, true)}
                {/* ONCLICK */}
                {/* SX */}
                {renderItemRowSelect("Direction", direction, (e: any) => { setDirection(e.target.value); }, listDirection, true)}
                {renderItemRowSelect("JustifyContent", justifyContent, (e: any) => { setJustifyContent(e.target.value); }, listJustifyContent, true)}
                {renderItemRowSelect("AlignItems", alignItems, (e: any) => { setAlignItems(e.target.value); }, listAlignItems, true)}
                {renderItemRowCheckBox("Container", container, () => { setContainer(!container) }, true)}
                {renderItemRowCheckBox("Item", item, () => { setItem(!item) }, true)}
                {renderItemRowSelect("Xs", xs, (e: any) => { setXs(e.target.value); }, listXs, true)}
                {/* columns={columns} */}
                {renderItemRowSelect("Wrap", wrap, (e: any) => { setWrap(e.target.value); }, listWrap, false)}
            </>;
        } else if (tag === listTag[1].tag) {
            return <>
                {renderItemRowTextField("Text", text, (e: any) => { setText(e.target.value); }, true)}
                {renderItemRowTextField("ID", id, (e: any) => { setId(e.target.value); }, true)}
                {/* STYLE */}
                {renderItemRowSelect("Size", size, (e: any) => { setSize(e.target.value); }, listSize, true)}
                {renderItemRowCheckBox("Disabled", disabled, () => { setDisabled(!disabled) }, true)}
                {/* ONCLICK */}
                {/* SX */}
                {renderItemRowSelect("Variant", variant, (e: any) => { setVariant(e.target.value); }, listVariantButton, true)}
                {renderItemRowCheckBox("StartIcon", showStartIcon, () => { setShowStartIcon(!showStartIcon) }, true)}
                {renderItemRowCheckBox("EndIcon", showEndIcon, () => { setShowEndIcon(!showEndIcon) }, false)}
            </>;
        } else if (tag === listTag[2].tag) {
            return <>
                {renderItemRowTextField("Text", text, (e: any) => { setText(e.target.value); }, true)}
                {renderItemRowTextField("ID", id, (e: any) => { setId(e.target.value); }, true)}
                {/* STYLE */}
                {renderItemRowSelect("Size", size, (e: any) => { setSize(e.target.value); }, listSize, true)}
                {renderItemRowCheckBox("Disabled", disabled, () => { setDisabled(!disabled) }, false)}
                {/* ONCLICK */}
                {/* SX */}
            </>;
        } else if (tag === listTag[3].tag) {
            return <>
                {renderItemRowTextField("ID", id, (e: any) => { setId(e.target.value); }, true)}
                {/* STYLE */}
                {renderItemRowTextField("Value", value, (e: any) => { setValue(e.target.value); }, true)}
                {renderItemRowSelect("Size", size, (e: any) => { setSize(e.target.value); }, listSizeInput, true)}
                {renderItemRowCheckBox("Disabled", disabled, () => { setDisabled(!disabled) }, true)}
                {/* ONCHANGE */}
                {/* SX */}
                {renderItemRowSelect("Variant", variant, (e: any) => { setVariant(e.target.value); }, listVariantTextField, true)}
                {renderItemRowCheckBox("FullWidth", fullWidth, () => { setFullWidth(!fullWidth) }, true)}
                {/* inputProps */}
                {renderItemRowTextField("HelperText", helperText, (e: any) => { setHelperText(e.target.value); }, true)}
                {renderItemRowCheckBox("Error", error, (e: any) => { setError(!error); }, true)}
                {/* FormHelperTextProps */}
                {renderItemRowTextField("Placeholder", placeholder, (e: any) => { setPlaceholder(e.target.value); }, true)}
                {renderItemRowCheckBox("Multiline", multiline, (e: any) => { setMultiline(!multiline); }, true)}
                {renderItemRowTextField("Rows", rows.toString(), (e: any) => { setRows(parseInt(e.target.value) > 10 ? 10 : parseInt(e.target.value)); }, false)}
            </>;
        } else if (tag === listTag[4].tag) {
            return <>
                {/* STYLE */}
                {renderItemRowTextField("ID", id, (e: any) => { setId(e.target.value); }, true)}
                {renderItemRowTextField("Value", value, (e: any) => { setValue(e.target.value); }, true)}
                {renderItemRowSelect("Size", size, (e: any) => { setSize(e.target.value); }, listSizeInput, true)}
                {renderItemRowCheckBox("Disabled", disabled, () => { setDisabled(!disabled) }, true)}
                {/* ONCHANGE */}
                {/* SX */}
                {renderItemRowSelect("Variant", variant, (e: any) => { setVariant(e.target.value); }, listVariantTextField, true)}
                {renderItemRowCheckBox("FullWidth", fullWidth, () => { setFullWidth(!fullWidth) }, true)}
                {/* inputProps */}
                {renderItemRowCheckBox("Error", error, (e: any) => { setError(!error); }, true)}
                {/* FormHelperTextProps */}
                {renderItemRowCheckBox("StartAdornment", showStartAdornment, () => { setShowStartAdornment(!showStartAdornment); }, true)}
                {renderItemRowCheckBox("EndAdornment", showEndAdornment, () => { setShowEndAdornment(!showEndAdornment) }, false)}
            </>;
        } else {
            return <></>;
        }
    }

    const Component: React.FC<Props> = (props: Props) => {
        const Tag = props.tag;
        return <Tag
            style={props.style}
            id={props.id}
            value={props.value}
            size={props.size}
            disabled={props.disabled}
            onClick={props.onClick}
            onChange={props.onChange}
            sx={props.sx}
            variant={props.variant}
            align={props.align}
            textOverflow={props.textOverflow}
            noWrap={props.noWrap}
            textAlign={props.textAlign}
            direction={props.direction}
            justifyContent={props.justifyContent}
            alignItems={props.alignItems}
            container={props.container}
            item={props.item}
            xs={props.xs}
            columns={props.columns}
            wrap={props.wrap}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            fullWidth={props.fullWidth}
            inputProps={props.inputProps}
            helperText={props.helperText}
            error={props.error}
            FormHelperTextProps={props.FormHelperTextProps}
            placeholder={props.placeholder}
            multiline={props.multiline}
            rows={props.rows}
            startAdornment={props.startAdornment}
            endAdornment={props.endAdornment}
        >
            {props.text}
            {props.icon}
        </Tag>;
    };

    const renderCustomComponent = () => {
        if (tag === Grid) {
            return <Component
                tag={tag}
                text={text}
                style={style}
                id={id}
                onClick={onClickAction ? () => { } : () => { }}
                sx={sx}
                direction={direction}
                justifyContent={justifyContent}
                alignItems={alignItems}
                container={container}
                item={item}
                xs={parseInt(xs)}
                columns={columns}
                wrap={wrap}
            />;
        } else if (tag === Button) {
            return <Component
                tag={tag}
                text={text}
                style={style}
                id={id}
                size={size}
                disabled={disabled}
                onClick={onClickAction ? () => { } : () => { }}
                sx={sx}
                variant={variant}
                startIcon={showStartIcon ? startIcon : <></>}
                endIcon={showEndIcon ? endIcon : <></>}
            />;
        } else if (tag === IconButton) {
            return <Component
                tag={tag}
                icon={icon}
                style={style}
                id={id}
                size={size}
                disabled={disabled}
                onClick={onClickAction ? () => { } : () => { }}
                sx={sx}
            />;
        } else if (tag === TextField) {
            return <Component
                tag={tag}
                text={text}
                style={style}
                id={id}
                value={value}
                size={size}
                disabled={disabled}
                onChange={onChangeAciton ? () => { } : () => { }}
                sx={sx}
                variant={variant}
                fullWidth={fullWidth}
                inputProps={inputProps}
                helperText={helperText}
                error={error}
                FormHelperTextProps={FormHelperTextProps}
                placeholder={placeholder}
                multiline={multiline}
                rows={rows ? rows : 1}
            />;
        } else if (tag === OutlinedInput) {
            return <Component
                tag={tag}
                text={text}
                style={style}
                id={id}
                value={value}
                size={size}
                disabled={disabled}
                onChange={onChangeAciton ? () => { } : () => { }}
                sx={sx}
                variant={variant}
                fullWidth={fullWidth}
                inputProps={inputProps}
                error={error}
                placeholder={placeholder}
                startAdornment={showStartAdornment ? startAdornment : <></>}
                endAdornment={showEndAdornment ? endAdornment : <></>}
            />;
        } else if (tag === Select) {
            return <Component
                tag={tag}
                text={text}
                style={style}
                id={id}
                value={value}
                size={size}
                disabled={disabled}
                onChange={onChangeAciton ? () => { } : () => { }}
                sx={sx}
                variant={variant}
                fullWidth={fullWidth}
                inputProps={inputProps}
                error={error}
                placeholder={placeholder}
            />;
        } else if (tag === Typography) {
            return <Component
                tag={tag}
                text={text}
                align={align}
                style={style}
                id={id}
                onClick={onClickAction ? () => { } : () => { }}
                sx={sx}
                textOverflow={textOverflow}
                noWrap={noWrap}
                textAlign={textAlign}
            />;
        } else {
            return <></>;
        }
    }

    const renderContainer = () => {
        return (
            <Fade in={true} timeout={{ enter: 500, exit: 200 }}>
                <Grid
                    container
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent / 2}px`,
                        p: `${themes.marginComponent}px`,
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow,
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    <Grid container justifyContent={"space-between"} sx={{ width: "200px" }}>
                        <Button
                            id={"BT_STYLE"}
                            variant={"contained"}
                            size={"small"}
                            sx={{
                                textTransform: "none",
                                fontSize: themes.fontsize.small,
                                bgcolor: themes.color.bg,
                                "&:hover": {
                                    bgcolor: themes.color.bg,
                                    opacity: 0.8
                                }
                            }}
                            endIcon={<CustomIcon name={"url"} color={themes.color.mainText} sizeNumber={12} />}
                            onClick={() => onOpenPopupSxOrStyle("STYLE")}
                        >
                            {"Style"}
                        </Button>
                        <Button
                            id={"BT_SX"}
                            variant={"contained"}
                            size={"small"}
                            sx={{
                                textTransform: "none",
                                fontSize: themes.fontsize.small,
                                bgcolor: themes.color.bg,
                                "&:hover": {
                                    bgcolor: themes.color.bg,
                                    opacity: 0.8
                                }
                            }}
                            endIcon={<CustomIcon name={"url"} color={themes.color.mainText} sizeNumber={12} />}
                            onClick={() => onOpenPopupSxOrStyle("SX")}
                        >
                            {"SX"}
                        </Button>
                        <IconButton
                            sx={{
                                p: 0,
                                bgcolor: themes.color.bg,
                                borderRadius: "5px",
                                pl: "5px",
                                pr: "5px",
                                "&:hover": {
                                    bgcolor: themes.color.bg,
                                    opacity: 0.8
                                }
                            }}
                            onClick={() => onClearComponent()}
                        >
                            <CustomIcon name={"reset"} color={"white"} sizeNumber={"20px"} />
                        </IconButton>
                    </Grid>
                    <Grid
                        wrap={"nowrap"}
                        container
                        sx={{
                            width: `calc(100% - ${250}px)`,
                            mb: `${themes.marginComponent / 3}px`,
                        }}
                    >
                        <Grid container justifyContent={"center"} sx={{ width: "5%" }}>
                            <IconButton sx={{ p: 0 }} onClick={() => onScrollListTag("left")}>
                                <CustomIcon name={"left"} color={"white"} sizeNumber={"30px"} />
                            </IconButton>
                        </Grid>
                        {renderListTag()}
                        <Grid container justifyContent={"center"} sx={{ width: "5%" }}>
                            <IconButton sx={{ p: 0 }} onClick={() => onScrollListTag("right")}>
                                <CustomIcon name={"right"} color={"white"} sizeNumber={"30px"} />
                            </IconButton>
                        </Grid>
                        <Grid container justifyContent={"flex-end"} sx={{ width: "20%" }}>
                            <Button
                                id={"BT_GENERATE_CODE"}
                                variant={"contained"}
                                size={"small"}
                                sx={{
                                    textTransform: "none",
                                    bgcolor: themes.color.bg,
                                    "&:hover": {
                                        bgcolor: themes.color.bg,
                                        opacity: 0.8
                                    }
                                }}
                                endIcon={<CustomIcon name={"reset"} color={themes.color.mainText} sizeNumber={12} />}
                                onClick={() => onClickGenerateCode()}
                            >
                                <Typography noWrap textOverflow={"ellipsis"} sx={{ fontSize: themes.fontsize.small, color: themes.color.mainText, fontWeight: "bold" }}>
                                    {"Generate Code"}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        sx={{
                            width: "200px"
                        }}
                    >
                        {renderStyleFromTag()}
                    </Grid>
                    <Grid
                        container
                        justifyContent={"center"}
                        alignContent={"center"}
                        sx={{
                            width: `calc(100% - ${250}px)`,
                            minHeight: "300px",
                            bgcolor: "white",
                            p: `${themes.marginComponent}px`,
                            borderRadius: themes.radius,
                            border: `1px solid black`
                        }}
                    >
                        {renderCustomComponent()}
                    </Grid>
                </Grid>
            </Fade>
        );
    }

    const renderSourceCode = () => {
        return (
            <Fade in={true} timeout={{ enter: 500, exit: 200 }}>
                <Grid
                    container
                    item xs={12}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent / 2}px`,
                        p: `${themes.marginComponent / 2}px`,
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow,
                        display: { xs: "none", md: "flex" }
                    }}
                >
                    {regenerateCode
                        ? <Grid
                            container
                            justifyContent={"center"}
                            alignItems={"center"}
                            sx={{
                                bgcolor: "white",
                                width: "70%",
                                height: "150px",
                                borderRadius: "4px",
                                p: `${themes.marginComponent / 2}px`,
                            }}>
                            <CircularProgress color="primary" />
                        </Grid>
                        : <TextField
                            id={"TF_SOURCE_CODE"}
                            value={sourceCode}
                            disabled
                            inputProps={{
                                "aria-label": "Without label",
                                style: {
                                    fontSize: themes.fontsize.small,
                                    lineHeight: 1.3,
                                    padding: `${themes.marginComponent / 2}px`,
                                }
                            }}
                            size={"small"}
                            sx={{
                                bgcolor: "white",
                                borderRadius: "4px",
                                width: "70%",
                                color: "black"
                            }}
                            multiline
                        />}
                    <Button
                        id={"BT_COPY_CODE"}
                        variant={"contained"}
                        size={"small"}
                        disabled={regenerateCode || !(!!sourceCode)}
                        sx={{
                            textTransform: "none",
                            fontSize: themes.fontsize.small,
                            mt: `${themes.marginComponent / 3}px`,
                            "&:hover": {
                                opacity: 0.8
                            }
                        }}
                        endIcon={<CustomIcon name={"copy"} color={themes.color.mainText} sizeNumber={12} />}
                        onClick={() => {
                            navigator.clipboard.writeText(sourceCode ? sourceCode : "");
                            setOpenAlert(true);
                        }}
                    >
                        {word().TEXT_COPY_CODE}
                    </Button>
                </Grid>
            </Fade>
        );
    }

    const SnackbarAlertAction = (props: any) => {
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
    }

    const renderPopupSetSxOrStyle = () => {
        return (
            <Dialog onClose={() => onClosePopupSxOrStyle()} open={showSetSxOrStyle} aria-labelledby={"popup-set-style"} id={"PP_SET_STYLE"} fullWidth maxWidth="md" sx={{ display: { xs: "none", md: "block" } }}>
                <Paper elevation={0} sx={{ p: `${themes.marginComponent / 2}px`, bgcolor: themes.color.hover }}>
                    <Grid container item xs={12} direction={"column"} justifyContent={"center"} sx={{ p: `${themes.marginComponent / 2}px` }}>
                        <Grid container item xs={12} direction={"row"} justifyContent={"flex-end"} sx={{ mb: `${themes.marginComponent / 3}px`, borderRadius: "5px" }}>
                            <Button
                                id={"BT_RESET_CSS"}
                                variant={"contained"}
                                size={"small"}
                                sx={{
                                    mr: "10px",
                                    textTransform: "none",
                                    fontSize: themes.fontsize.small,
                                    bgcolor: "#ff3333",
                                    "&:hover": {
                                        bgcolor: "#ff3333",
                                        opacity: 0.8
                                    }
                                }}
                                onClick={() => onCloseResetCSS()}
                                endIcon={<CustomIcon name={"reset"} color={themes.color.mainText} sizeNumber={12} />}
                            >
                                {"Reset CSS"}
                            </Button>
                            <Button
                                id={"BT_CONFIRM"}
                                variant={"contained"}
                                size={"small"}
                                sx={{
                                    textTransform: "none",
                                    fontSize: themes.fontsize.small,
                                    bgcolor: "#00cc00",
                                    "&:hover": {
                                        bgcolor: "#00cc00",
                                        opacity: 0.8
                                    }
                                }}
                                onClick={() => onClosePopupSxOrStyle()}
                                endIcon={<CustomIcon name={"confirm"} color={themes.color.mainText} sizeNumber={12} />}
                            >
                                {"Confirm"}
                            </Button>
                        </Grid>
                        <Grid container item xs={12} direction={"row"} justifyContent={"center"} sx={{ mb: `${themes.marginComponent / 3}px`, bgcolor: themes.color.main, py: "5px", borderRadius: "5px" }}>
                            <Grid container item xs={3} justifyContent={"flex-start"} alignItems={"center"}>
                                <Typography sx={{ fontSize: themes.fontsize.default, color: themes.color.mainText, fontWeight: "bold", pl: "5px" }}>
                                    {"CSS"}
                                </Typography>
                            </Grid>
                            <Grid container item xs={4} justifyContent={"flex-start"} alignItems={"center"}>
                                <Typography sx={{ fontSize: themes.fontsize.default, color: themes.color.mainText, fontWeight: "bold" }}>
                                    {"Value"}
                                </Typography>
                            </Grid>
                            <Grid container item xs={5} justifyContent={"flex-start"} alignItems={"center"}>
                                <Typography sx={{ fontSize: themes.fontsize.default, color: themes.color.mainText, fontWeight: "bold", pl: "10px" }}>
                                    {"Recommend"}
                                </Typography>
                            </Grid>
                        </Grid>
                        {typeValue.map((item: any, index: number) => {
                            const listStyle = item.style;
                            return <Grid key={"ITEM_SET_SXORSTYLE_" + (item.name).toUpperCase()} container item xs={12} direction={"row"} justifyContent={"center"} sx={{ mb: index !== typeValue.length - 1 ? `${themes.marginComponent / 6}px` : 0 }}>
                                <Grid container item xs={3} justifyContent={"flex-start"} alignItems={"center"}>
                                    <FormControlLabel
                                        value={"end"}
                                        labelPlacement={"end"}
                                        control={
                                            <Checkbox
                                                id={"CB_SXORSTYLE_" + (item.name).toUpperCase()}
                                                checked={item.use}
                                                onChange={() => onClickSxOrStyleValue(item.name, !(item.use), !(item.use) ? item.style[0] : value, item.style)}
                                                inputProps={{ "aria-label": "controlled" }}
                                                sx={{ p: 0, pl: "8px", pr: "4px", color: themes.color.mainText }}
                                            />
                                        }
                                        label={
                                            <Typography sx={{ fontSize: 13, color: themes.color.mainText }}>
                                                {item.name}
                                            </Typography>
                                        }
                                    />
                                </Grid>
                                <Grid container item xs={4} justifyContent={"flex-start"} alignItems={"center"}>
                                    <TextField
                                        fullWidth
                                        id={"TF_SXORSTYLE_" + (item.name).toUpperCase()}
                                        value={item.value}
                                        placeholder={item.name}
                                        disabled={!item.use}
                                        onChange={(e) => onClickSxOrStyleValue(item.name, item.use, e.target.value, item.style)}
                                        inputProps={{
                                            "aria-label": "Without label",
                                            style: {
                                                fontSize: themes.fontsize.small,
                                                height: "10px",
                                                color: themes.color.mainText
                                            },
                                        }}
                                        size={"small"}
                                        sx={{
                                            bgcolor: themes.color.hover,
                                            borderRadius: "4px",
                                        }}
                                    />
                                </Grid>
                                <Grid container item xs={5} justifyContent={"flex-start"} alignItems={"center"}>
                                    {listStyle.map((style: any, index2: number) => {
                                        return <Button
                                            key={"ITEM_BT_SET_SXORSTYLE_" + (item.name).toUpperCase() + "_" + index2}
                                            id={"BT_SET_SXORSTYLE_" + (item.name).toUpperCase() + "_" + index2}
                                            variant={"contained"}
                                            size={"small"}
                                            disabled={!item.use}
                                            sx={{
                                                ml: "10px",
                                                height: "25px",
                                                textTransform: "none",
                                                fontSize: themes.fontsize.small,
                                                bgcolor: style === item.value ? themes.color.main : themes.color.third,
                                                color: style === item.value ? themes.color.mainText : "black",
                                                "&:hover": {
                                                    opacity: 0.8
                                                }
                                            }}
                                            onClick={() => onClickSxOrStyleValue(item.name, item.use, style, item.style)}
                                        >
                                            {style}
                                        </Button>
                                    })}
                                </Grid>
                            </Grid>
                        })}
                    </Grid>
                </Paper>
            </Dialog>
        );
    }

    return (
        <Box sx={{ display: "flex", bgcolor: themes.color.bg }}>
            <CustomAppbar />
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` }, pt: themes.appbarHeight }}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ pb: `${themes.marginComponent}px` }}>
                    <CustomHeader text={word().MENU_5} />
                    {renderContainer()}
                    <CustomHeader text={word().TEXT_SOURCE_CODE} />
                    {renderSourceCode()}
                    <Footer />
                </Grid>
            </Box>
            <SnackbarAlertAction />
            {renderPopupSetSxOrStyle()}
        </Box >
    );
}

const defaultStyle = [
    { name: "margin", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "marginTop", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "marginBottom", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "marginLeft", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "marginRight", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "padding", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "paddingTop", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "paddingBottom", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "paddingLeft", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "paddingRight", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "width", use: false, value: "", style: [`"120px"`, `120`, `"20%"`] },
    { name: "height", use: false, value: "", style: [`"35px"`, `35`, `"10%"`] },
    { name: "minWidth", use: false, value: "", style: [`"120px"`, `120`, `"20%"`] },
    { name: "minHeight", use: false, value: "", style: [`"35px"`, `35`, `"10%"`] },
    { name: "color", use: false, value: "", style: [`"red"`, `"#ff00ef"`] },
    { name: "bgcolor", use: false, value: "", style: [`"red"`, `"#ff00ef"`] },
    { name: "backgroundColor", use: false, value: "", style: [`"linear-gradient(90deg, #FCAF45, #E1306C"`] },
    { name: "border", use: false, value: "", style: [`"1px solid #ffff00"`] },
    { name: "borderRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "borderTopLeftRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "borderTopRightRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "borderBottomLeftRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "borderBottomRightRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "boxShadow", use: false, value: "", style: [`"3px 3px 3px #C4C4C4"`] },
    { name: "textAlign", use: false, value: "", style: [`"left"`, `"center"`, `"right"`] },
    { name: "textDecoration", use: false, value: "", style: [`"underline"`, `"line-through"`] },
    { name: "textTransform", use: false, value: "", style: [`"none"`, `"uppercase"`, `"capitalize"`] },
    { name: "fontSize", use: false, value: "", style: [`"16px"`, `16`] },
    { name: "fontStyle", use: false, value: "", style: [`"normal"`, `"italic"`] },
    { name: "fontWeight", use: false, value: "", style: [`"bold"`, `700`] },
    { name: "opacity", use: false, value: "", style: [`0.3`, `0.8`] },
    { name: "display", use: false, value: "", style: [`"none"`, `"flex"`, `"block"`] },
];

const defaultSx = [
    { name: "m", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "mt", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "mb", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "ml", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "mr", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "p", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "pt", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "pb", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "pl", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "pr", use: false, value: "", style: [`"10px"`, `10`] },
    { name: "width", use: false, value: "", style: [`"120px"`, `120`, `"20%"`] },
    { name: "height", use: false, value: "", style: [`"35px"`, `35`, `"10%"`] },
    { name: "minWidth", use: false, value: "", style: [`"120px"`, `120`, `"20%"`] },
    { name: "minHeight", use: false, value: "", style: [`"35px"`, `35`, `"10%"`] },
    { name: "color", use: false, value: "", style: [`"red"`, `"#ff00ef"`] },
    { name: "bgcolor", use: false, value: "", style: [`"red"`, `"#ff00ef"`] },
    { name: "backgroundImage", use: false, value: "", style: [`"linear-gradient(90deg, #FCAF45, #E1306C"`] },
    { name: "border", use: false, value: "", style: [`"1px solid #ffff00"`] },
    { name: "borderRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "borderTopLeftRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "borderTopRightRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "borderBottomLeftRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "borderBottomRightRadius", use: false, value: "", style: [`"10px"`, `10`, `"50%"`] },
    { name: "boxShadow", use: false, value: "", style: [`"3px 3px 3px #C4C4C4"`] },
    { name: "textAlign", use: false, value: "", style: [`"left"`, `"center"`, `"right"`] },
    { name: "textDecoration", use: false, value: "", style: [`"underline"`, `"line-through"`] },
    { name: "textTransform", use: false, value: "", style: [`"none"`, `"uppercase"`, `"capitalize"`] },
    { name: "fontSize", use: false, value: "", style: [`"16px"`, `16`] },
    { name: "fontStyle", use: false, value: "", style: [`"normal"`, `"italic"`] },
    { name: "fontWeight", use: false, value: "", style: [`"bold"`, `700`] },
    { name: "opacity", use: false, value: "", style: [`0.3`, `0.8`] },
    { name: "display", use: false, value: "", style: [`"none"`, `"flex"`, `"block"`] },
];

const listTag = [
    { menu: "Grid", key: "DD_ITEM_TAG_0", value: "Grid", tag: Grid },
    { menu: "Button", key: "DD_ITEM_TAG_1", value: "Button", tag: Button },
    { menu: "IconButton", key: "DD_ITEM_TAG_2", value: "IconButton", tag: IconButton },
    { menu: "TextField", key: "DD_ITEM_TAG_3", value: "TextField", tag: TextField },
    { menu: "OutlinedInput", key: "DD_ITEM_TAG_4", value: "OutlinedInput", tag: OutlinedInput },
    // { menu: "Select", key: "DD_ITEM_TAG_5", value: "Select", tag: Select },
    // { menu: "Typography", key: "DD_ITEM_TAG_6", value: "Typography", tag: Typography },
];

const listDirection = [
    { menu: "row", key: "DD_ITEM_DIRECTION_0", value: "row" },
    { menu: "row-reverse", key: "DD_ITEM_DIRECTION_1", value: "row-reverse" },
    { menu: "column", key: "DD_ITEM_DIRECTION_2", value: "column" },
    { menu: "column-reverse", key: "DD_ITEM_DIRECTION_3", value: "column-reverse" },
];

const listJustifyContent = [
    { menu: "-moz-initial", key: "DD_ITEM_JUSTIFYCONTENT_0", value: "-moz-initial" },
    { menu: "center", key: "DD_ITEM_JUSTIFYCONTENT_1", value: "center" },
    { menu: "end", key: "DD_ITEM_JUSTIFYCONTENT_2", value: "end" },
    { menu: "flex-end", key: "DD_ITEM_JUSTIFYCONTENT_3", value: "flex-end" },
    { menu: "flex-start", key: "DD_ITEM_JUSTIFYCONTENT_4", value: "flex-start" },
    { menu: "inherit", key: "DD_ITEM_JUSTIFYCONTENT_5", value: "inherit" },
    { menu: "initial", key: "DD_ITEM_JUSTIFYCONTENT_6", value: "initial" },
    { menu: "left", key: "DD_ITEM_JUSTIFYCONTENT_7", value: "left" },
    { menu: "normal", key: "DD_ITEM_JUSTIFYCONTENT_8", value: "normal" },
    { menu: "revert", key: "DD_ITEM_JUSTIFYCONTENT_9", value: "revert" },
    { menu: "revert-layer", key: "DD_ITEM_JUSTIFYCONTENT_10", value: "revert-layer" },
    { menu: "right", key: "DD_ITEM_JUSTIFYCONTENT_11", value: "right" },
    { menu: "space-around", key: "DD_ITEM_JUSTIFYCONTENT_12", value: "space-around" },
    { menu: "space-between", key: "DD_ITEM_JUSTIFYCONTENT_13", value: "space-between" },
    { menu: "space-evenly", key: "DD_ITEM_JUSTIFYCONTENT_14", value: "space-evenly" },
    { menu: "start", key: "DD_ITEM_JUSTIFYCONTENT_15", value: "start" },
    { menu: "stretch", key: "DD_ITEM_JUSTIFYCONTENT_16", value: "stretch" },
    { menu: "unset", key: "DD_ITEM_JUSTIFYCONTENT_17", value: "unset" },
];

const listAlignItems = [
    { menu: "-moz-initial", key: "DD_ITEM_ALIGNITEMS_0", value: "-moz-initial" },
    { menu: "baseline", key: "DD_ITEM_ALIGNITEMS_1", value: "baseline" },
    { menu: "center", key: "DD_ITEM_ALIGNITEMS_2", value: "center" },
    { menu: "flex-end", key: "DD_ITEM_ALIGNITEMS_3", value: "flex-end" },
    { menu: "flex-start", key: "DD_ITEM_ALIGNITEMS_4", value: "flex-start" },
    { menu: "inherit", key: "DD_ITEM_ALIGNITEMS_5", value: "inherit" },
    { menu: "initial", key: "DD_ITEM_ALIGNITEMS_6", value: "initial" },
    { menu: "normal", key: "DD_ITEM_ALIGNITEMS_7", value: "normal" },
    { menu: "revert", key: "DD_ITEM_ALIGNITEMS_8", value: "revert" },
    { menu: "revert-layer", key: "DD_ITEM_ALIGNITEMS_9", value: "revert-layer" },
    { menu: "self-end", key: "DD_ITEM_ALIGNITEMS_10", value: "self-end" },
    { menu: "self-start", key: "DD_ITEM_ALIGNITEMS_11", value: "self-start" },
    { menu: "start", key: "DD_ITEM_ALIGNITEMS_12", value: "start" },
    { menu: "stretch", key: "DD_ITEM_ALIGNITEMS_13", value: "stretch" },
    { menu: "unset", key: "DD_ITEM_ALIGNITEMS_14", value: "unset" },
];

const listXs = [
    { menu: "1", key: "DD_ITEM_XS_0", value: "1" },
    { menu: "2", key: "DD_ITEM_XS_1", value: "2" },
    { menu: "3", key: "DD_ITEM_XS_2", value: "3" },
    { menu: "4", key: "DD_ITEM_XS_3", value: "4" },
    { menu: "5", key: "DD_ITEM_XS_4", value: "5" },
    { menu: "6", key: "DD_ITEM_XS_5", value: "6" },
    { menu: "7", key: "DD_ITEM_XS_6", value: "7" },
    { menu: "8", key: "DD_ITEM_XS_7", value: "8" },
    { menu: "9", key: "DD_ITEM_XS_8", value: "9" },
    { menu: "10", key: "DD_ITEM_XS_9", value: "10" },
    { menu: "11", key: "DD_ITEM_XS_10", value: "11" },
    { menu: "12", key: "DD_ITEM_XS_11", value: "12" },
];

const listWrap = [
    { menu: "-", key: "DD_ITEM_WRAP_0", value: "" },
    { menu: "nowrap", key: "DD_ITEM_WRAP_1", value: "nowrap" },
    { menu: "wrap", key: "DD_ITEM_WRAP_2", value: "wrap" },
    { menu: "wrap-reverse", key: "DD_ITEM_WRAP_3", value: "wrap-reverse" },
];

const listSize = [
    { menu: "small", key: "DD_ITEM_SIZE_0", value: "small" },
    { menu: "medium", key: "DD_ITEM_SIZE_1", value: "medium" },
    { menu: "large", key: "DD_ITEM_SIZE_2", value: "large" },
];

const listSizeInput = [
    { menu: "small", key: "DD_ITEM_SIZE_INPUT_0", value: "small" },
    { menu: "medium", key: "DD_ITEM_SIZE_INPUT_1", value: "medium" },
];

const listVariantTextField = [
    { menu: "filled", key: "DD_ITEM_VARIANT_TEXTFIELD_0", value: "filled" },
    { menu: "outlined", key: "DD_ITEM_VARIANT_TEXTFIELD_1", value: "outlined" },
    { menu: "standard", key: "DD_ITEM_VARIANT_TEXTFIELD_2", value: "standard" },
];

const listVariantButton = [
    { menu: "contained", key: "DD_ITEM_VARIANT_BUTTON_0", value: "contained" },
    { menu: "outlined", key: "DD_ITEM_VARIANT_BUTTON_1", value: "outlined" },
    { menu: "text", key: "DD_ITEM_VARIANT_BUTTON_2", value: "text" },
];