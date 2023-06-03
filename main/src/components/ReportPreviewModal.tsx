import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SaveReportModal from "./SaveReportModal";
import {AttributeModel} from "../models/AttributeModel";

interface PreviewProps {
    open: boolean,
    handlerClose: () => void
    attributes: AttributeModel[]
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
};


function ReportPreviewModal(props: PreviewProps){
    const [saveReportOpen,setSaveReportOpen] = React.useState(false);
    const handleSaveReportOpen = () => {setSaveReportOpen(true);}

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const navigate = useNavigate();
    const handleClose = () => props.handlerClose();
    const dispatch = useDispatch<AppDispatch>();
    function createData(
        name: string,
        assetGroup:string,
        weight: number,
        oscillation_index: number,
        serviceFactor: number,
    ) {
        return { name, assetGroup,weight,oscillation_index,serviceFactor };
    }
    const rows = [
        createData('Контур 1', "AT-1", 1.0, 0.4, 100),
        createData('Контур 2', "AВT-1", 1.0, 0.45, 64),
        createData('Контур 3', "AT-1", 1.0, 0.43, 20),
        createData('Контур 4', "VISBREKING", 1.7, 0.5, 76),
        createData('Контур 5', "AВT-1", 1.0, 0.46, 98),
    ];

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
                        Предпросмотр
                    </Typography>
                    <Box sx={{
                        border:"1px solid black",
                    }}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название</TableCell>
                                        <TableCell align="right">Установка</TableCell>
                                        {props.attributes.map((attribute)=>(<TableCell align="right">{attribute.title}</TableCell>))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.assetGroup}</TableCell>
                                            <TableCell align="right">{row.weight}</TableCell>
                                            <TableCell align="right">{row.oscillation_index}</TableCell>
                                            <TableCell align="right">{row.serviceFactor}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        width:"50%",
                        mt:5
                    }}>
                        <Button onClick={()=>{handleClose();handleSaveReportOpen()}} variant="contained">
                            Сохранить отчет
                        </Button>
                        <Button onClick={handleClose} variant="contained">
                            Закрыть
                        </Button>
                    </Box>

                </Box>

            </Modal>
            <SaveReportModal open={saveReportOpen} handlerClose={()=>setSaveReportOpen(false)}/>
        </>)
}
export default ReportPreviewModal;