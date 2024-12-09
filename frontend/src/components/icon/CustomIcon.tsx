import MailIcon from "@mui/icons-material/Mail";
import ErrorIcon from "@mui/icons-material/Error";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MessageIcon from "@mui/icons-material/Message";
import ListIcon from "@mui/icons-material/List";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CheckIcon from "@mui/icons-material/Check";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

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
    sizeNumber = "20px",
  } = props;

  if (name === "mail")
    return (
      <MailIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "copy")
    return (
      <ContentCopyIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "inbox")
    return (
      <InboxIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "menu")
    return (
      <MenuIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "phone")
    return (
      <PhoneIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "home")
    return (
      <HomeIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "about")
    return (
      <AccountBoxIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "contact")
    return (
      <MessageIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "skill")
    return (
      <ListIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "arrow")
    return (
      <KeyboardArrowDownIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "add")
    return (
      <AddCircleIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "url")
    return (
      <OpenInNewIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "up")
    return (
      <KeyboardArrowUpIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "generate")
    return (
      <BuildCircleIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "right")
    return (
      <ArrowRightIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "left")
    return (
      <ArrowLeftIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "reset")
    return (
      <RestartAltIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "confirm")
    return (
      <CheckIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else if (name === "basic")
    return (
      <NoteAltIcon
        fontSize={size}
        sx={{ color: color, width: sizeNumber, height: sizeNumber }}
      />
    );
  else return <ErrorIcon fontSize={size} />;
}
