import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers-pro/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers-pro";
import TextField from "@mui/material/TextField";

interface SaveReportProps {
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


function SaveReportModal(props: SaveReportProps){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const navigate = useNavigate();
    const handleClose = () => props.handlerClose();
    const dispatch = useDispatch<AppDispatch>();

    const [startDate,setStartDate] = React.useState<Dayjs | null>(null);
    const [endDate,setEndDate] = React.useState<Dayjs | null>(null);

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
                        Выберите период отчета
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box sx = {{
                            mt:2,
                            mb:2
                        }}>
                            <DatePicker  label="Начальная дата"
                                         value={startDate}
                                         renderInput={(params) => <TextField {...params}/>}
                                         onChange={(newValue:Dayjs|null)=>{setStartDate(newValue)}}/>
                        </Box>

                        <DatePicker label="Конечная дата"
                                     value={endDate}
                                     renderInput={(params) => <TextField {...params}/>}
                                     onChange={(newValue:Dayjs|null)=>{setEndDate(newValue)}}/>
                    </LocalizationProvider>
                    <Button onClick={handleClose} variant="contained">
                        Сохранить
                    </Button>
                </Box>

            </Modal>
        </>)
}
export default SaveReportModal;