import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Stack } from '@mui/material';
import React from 'react'
import { Gear } from "phosphor-react";
import { Nav_Buttons } from "../../data";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { faker } from "@faker-js/faker";
import Logo from "../../assets/Images/logo.ico"

const SideBar = () => {
    const theme = useTheme();
    const [selected, setselected] = useState(0);
    const { onToggleMode } = useSettings();
    return (
        <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0.25)", height: "100vh", width: 100 }}>
            <Stack direction="column" alignItems={"center"} justifyContent="space-between" sx={{ height: "100%" }} spacing={3}>

                <Stack alignItems="center" spacing={4}>

                    <Box sx={{
                        backgroundColor: theme.palette.primary.main,
                        height: 64,
                        width: 64,
                        borderRadius: 1.5
                    }}>
                        <img src={Logo} alt={"chat app logo"} />
                    </Box>
                    <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
                        {Nav_Buttons.map((el) => (
                            el.index === selected ?
                                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                                    <IconButton sx={{ width: "max-content", color: "white" }} key={el.index}>{el.icon}</IconButton>
                                </Box>

                                : <IconButton

                                    onClick={() => {
                                        setselected(el.index);
                                    }}
                                    sx={{ width: "max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary }} key={el.index}>{el.icon}</IconButton>

                        ))}
                        <Divider sx={{ width: "48px" }} />
                        {selected === 3 ?

                            <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                                <IconButton sx={{ width: "max-content", color: "white" }}>
                                    <Gear />
                                </IconButton>
                            </Box>
                            :
                            <IconButton onClick={() => {
                                setselected(3);
                            }} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary }}
                            >
                                <Gear />
                            </IconButton>
                        }
                    </Stack>
                </Stack>




                <Stack spacing={4}>
                    <AntSwitch onChange={() => {
                        onToggleMode();
                    }} defaultChecked />
                    <Avatar src={faker.image.avatar()} />
                </Stack>


            </Stack>
        </Box>
    )
}

export default SideBar
