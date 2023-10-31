import React from "react";
import {useTheme} from "@mui/material/styles";
import {Stack,Divider,Box,Typography,Link, IconButton} from "@mui/material";
import { DownloadSimple,Image } from "phosphor-react";




const DocMsg = ({el}) => {
    const theme = useTheme();
return <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
    <Box p ={1.5} sx = {{backgoundColor: el.incoming ? theme.pallete.background.default : theme.pallete.primary.main, borderRadius: 1.5, width: "max-content", }}>
        <Stack spacing={2}>
            <Stack p={2} direction="row" spacing={3} alignItems="center" sx = {{backgoundColor:theme.pallete.background.paper,borderRadius:1,}}>
                <Image size={48}/>
                <Typography variant="caption">Abstract.png</Typography>
                <IconButton>
                    <DownloadSimple/>
                </IconButton>
            </Stack>
            <Typography variant="subtitle2" sx ={{color: el.incoming ? theme.palette.text : "#fff"}} ></Typography>
        </Stack>
    </Box>
 </Stack>
}



const LinkMsg = ({el}) => {
    const theme = useTheme();
return <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
    <Box p ={1.5} sx = {{backgoundColor: el.incoming ? theme.pallete.background.default : theme.pallete.primary.main, borderRadius: 1.5, width: "max-content", }}>
        <Stack spacing={2}>
            <Stack p={2} direction="column" spacing={3} alignItems="center" sx = {{backgoundColor:theme.pallete.background.paper,borderRadius:1,}}>
                <img src={el.preview} alt={el.message} style={{maxHeight:210, borderRadius:10}}/>
                <Typography variant="subtitle2" sx ={{color: theme.palette.primary.main}} component={Link}></Typography>
            </Stack>
            <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}></Typography>
        </Stack>
    </Box>
 </Stack>

}

const ReplyMsg = ({el}) => {
    const theme = useTheme();
return <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
    <Box p ={1.5} sx = {{backgoundColor: el.incoming ? theme.pallete.background.default : theme.pallete.primary.main, borderRadius: 1.5, width: "max-content", }}>
        <Stack spacing={2}>
            <Stack p={2} direction="column" spacing={3} alignItems="center" sx = {{backgoundColor:theme.pallete.background.paper,borderRadius:1,}}>
                <Typography variant="body2" color={theme.pallete.text}>
                    {el.message}
                </Typography>
            </Stack>
        </Stack>
    </Box>

</Stack>

}


const MediaMsg = ({el}) => {
    const theme = useTheme();
return <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
    <Box p ={1.5} sx = {{backgoundColor: el.incoming ? theme.pallete.background.default : theme.pallete.primary.main, borderRadius: 1.5, width: "max-content", }}>
        {/* <Typography variant="body2" color={el.incoming ?theme.pallete.text : "#fff"}>
            {el.message}
        </Typography> */}

        <Stack spacing={1}>
<img src={el.img} alt={el.message} style={{maxHeight:210, borderRadius: 10}} />
<Typography variant="body2" color={el.incoming ?theme.pallete.text : "#fff"}>
    {el.message}
</Typography>
        </Stack>
    </Box>
    
    
    {/* <Divider width="46%"/>
        <Typography variant="caption" sx={{color: theme.pallete.text}}>{el.text}</Typography>
    <Divider width="46%"/> */}
</Stack>

}


const TextMsg = ({el}) => {
    const theme = useTheme();
return <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
    <Box p ={1.5} sx = {{backgoundColor: el.incoming ? theme.pallete.background.default : theme.pallete.primary.main, borderRadius: 1.5, width: "max-content", }}>
        <Typography variant="body2" color={el.incoming ?theme.pallete.text : "#fff"}>
            {el.message}
        </Typography>
    </Box>
    
    
    {/* <Divider width="46%"/>
        <Typography variant="caption" sx={{color: theme.pallete.text}}>{el.text}</Typography>
    <Divider width="46%"/> */}
</Stack>

}







const Timeline = ({el}) => {
        const theme = useTheme();
    return <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Divider width="46%"/>
            <Typography variant="caption" sx={{color: theme.pallete.text}}>{el.text}</Typography>
        <Divider width="46%"/>
    </Stack>
    
}

export {Timeline,TextMsg,MediaMsg,ReplyMsg,LinkMsg,DocMsg};