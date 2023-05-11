import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

interface EmailProps {
    open: boolean,
    handlerClose: () => void
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
};


function EmailSendingModal(props: EmailProps){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const navigate = useNavigate();
    const handleClose = () => props.handlerClose();
    const dispatch = useDispatch<AppDispatch>();

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
                        Введите Email'ы
                    </Typography>
                    <TextField type="email" label="Email" sx={{
                        mt:2,
                        mb:2
                    }}>
                    </TextField>
                    <Typography mb={1} sx={{
                        fontSize:"20px",
                        textAlign:"center",
                    }}>
                        Выбранные адреса
                    </Typography>
                    <Container sx={{
                        border:"1px solid black",
                        borderRadius:"10px",
                        mt:2,
                        mb:2
                    }}>
                        <Box sx={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <Typography mb={1} sx={{
                                fontSize:"20px",
                                textAlign:"center",
                            }}>
                                strooge2105@gmail.com
                            </Typography>
                            <Button color="error">
                                Удалить
                            </Button>
                        </Box>
                        <Box sx={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <Typography mb={1} sx={{
                                fontSize:"20px",
                                textAlign:"center",
                            }}>
                                strooge2105@gmail.com
                            </Typography>
                            <Button color="error">
                                Удалить
                            </Button>
                        </Box>
                        <Box sx={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <Typography mb={1} sx={{
                                fontSize:"20px",
                                textAlign:"center",
                            }}>
                                strooge2105@gmail.com
                            </Typography>
                            <Button color="error">
                                Удалить
                            </Button>
                        </Box>
                    </Container>
                    <Button onClick={handleClose} variant="contained">
                        Сохранить
                    </Button>
                </Box>

            </Modal>
        </>)
}
export default EmailSendingModal;