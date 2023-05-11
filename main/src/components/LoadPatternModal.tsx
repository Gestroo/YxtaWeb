import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import RegisterModal from "./RegisterModal";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import AttributeService from "../redux/services/AttributeService";
import {AttributeModel} from "../models/AttributeModel";
import PatternService from "../redux/services/PatternService";
import {PatternModel} from "../models/PatternModel";

interface PatternProps {
    open: boolean,
    handlerClose: () => void
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
};


function LoadPatternModal(props: PatternProps){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const navigate = useNavigate();
    const handleClose = () => props.handlerClose();
    const dispatch = useDispatch<AppDispatch>();
    const [patterns,setPatterns] = React.useState<PatternModel[]>([])
    const [key,setKey] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (key) return;
        PatternService.getPatterns().then((res)=>{
            if (res !== undefined){
                setPatterns(res)
            }
        })
        setKey(true)
    }, [patterns,key])

    return(
        <>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography mb={1} sx={{
                        fontSize:"20px",
                        textAlign:"center",
                    }}>
                        Выберите шаблон
                    </Typography>
                    <FormControl sx={{
                        width:"60%",
                        mt:2,
                        mb:2,
                    }}>
                        <InputLabel id="demo-simple-select-label">Шаблон</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Параметр">
                            <MenuItem value="">
                                <em>None</em> </MenuItem>
                            {patterns.map((pattern)=>(
                                <MenuItem value={10}>{pattern.title}</MenuItem>
                            ))}
                            <MenuItem value={10}>Шаблон 1</MenuItem>
                            <MenuItem value={20}>Шаблон 2</MenuItem>
                            <MenuItem value={30}>Шаблон 3</MenuItem>
                        </Select>
                    </FormControl>
                    <Button onClick={handleClose} variant="contained">
                        Выбрать
                    </Button>
                </Box>

            </Modal>
        </>)
}
export default LoadPatternModal;