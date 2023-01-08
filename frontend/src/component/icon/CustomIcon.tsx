
import MailIcon from "@mui/icons-material/Mail";
import ErrorIcon from "@mui/icons-material/Error";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface ICustomIconProps {
    name: string;
    size?: "medium" | "small" | "inherit" | "large" | undefined;
    color?: string;
    sizeNumber?: any;
}

export default function CustomIcon(props: ICustomIconProps) {
    const {
        name = "",
        size = "medium",
        color = "#b3b3b3",
        sizeNumber = "",
    } = props;

    if (name === "mail") return <MailIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber }} />;
    else if (name === "copy") return <ContentCopyIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "inbox") return <InboxIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "menu") return <MenuIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "phone") return <PhoneIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "home") return <HomeIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "about") return <AccountBoxIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "contact") return <MessageIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "skill") return <ListIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "arrow") return <KeyboardArrowDownIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else if (name === "add") return <AddCircleIcon fontSize={size} style={{ color: color, width: sizeNumber, height: sizeNumber}} />;
    else return <ErrorIcon fontSize={size} />;
}