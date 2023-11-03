import { Stack, Box } from "@mui/material";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Conversation/Contact";
import { useSelector } from "react-redux";
const GeneralApp = () => {
    const theme = useTheme();
    const {sidebar} = useSelector((store)=> store.app);
    // console.log(app,"app");
    return (
        <Stack direction="row" sx={{ width: "100%" }}>

            <Chats />

            <Box sx={{  height: "100%", width: sidebar.open ? "calc(100vw - 740px)": "calc(100vw - 420px)", backgroundColor: theme.palette.mode === "light" ? "#F0F4FA"  : theme.palette.background.paper }}>
                <Conversation />
            </Box>
            {sidebar.open && <Contact/>}
        </Stack>
    );
};

export default GeneralApp;
