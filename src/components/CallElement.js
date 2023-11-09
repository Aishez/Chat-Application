import React from "react";
import {
    Box,
    Badge,
    Stack,
    Avatar,
    Typography,
    IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
    ArrowDownLeft,
    ArrowUpRight,
    VideoCamera,
    Phone,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker"
import StyledBadge from "./StyledBadge";



const CallLogElement = ({ img, name, incoming, missed, online, id }) => {

    const theme = useTheme();

    return (

        <Box
            sx={{
                flexGrow: 1,
                width: "100%",
                borderRadius: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,
            }}
            p={2}
        >

            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
            >

                <Stack direction={"row"} alignItems={"center"} spacing={2}>

                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                        >
                            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        </StyledBadge>
                    ) : (
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                    )}

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                        <Stack spacing={1} alignItems="center" direction={"row"}>
                            {incoming ? (
                                <ArrowDownLeft color={missed ? "red" : "green"} />
                            ) : (
                                <ArrowUpRight color={missed ? "red" : "green"} />
                            )}
                            <Typography variant="caption">Yesterday 21:24</Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <IconButton>
                    <Phone color="green" />
                </IconButton>


            </Stack>


        </Box>

    )
}



const CallElement = ({ img, name, id, handleClose, online }) => {
    const theme = useTheme();

    return (

        <Box
            sx={{
                flexGrow: 1,
                width: "100%",
                borderRadius: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,
            }}
            p={2}
        >

            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
            >

                <Stack direction={"row"} alignItems={"center"} spacing={2}>

                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                        >
                            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        </StyledBadge>
                    ) : (
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                    )}

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                    </Stack>
                </Stack>


                <Stack direction={"row"} alignItems={"center"}>

                    <IconButton>
                        <Phone color="green" />
                    </IconButton>

                    <IconButton>
                        <VideoCamera color="green" />
                    </IconButton>

                </Stack>


            </Stack>


        </Box>

    )
};

export { CallElement, CallLogElement };
