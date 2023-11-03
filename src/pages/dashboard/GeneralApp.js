import { Stack, Box } from "@mui/material";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Conversation/Contact";
const GeneralApp = () => {
    const theme = useTheme();
    return (
        <Stack direction="row" sx={{ width: "100%" }}>

            <Chats />

            <Box sx={{ height: "100%", width: "calc(100vw - 740px)", backgroundColor: theme.palette.mode === "light" ? "#F0F4FA"  : theme.palette.background.paper }}>
                <Conversation />
            </Box>
            <Contact/>
        </Stack>
    );
};

export default GeneralApp;
