import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/index.css";
import { useSelector} from "react-redux";
import { RootState} from "../redux/store";
import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {Box, CardContent, Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AuthModal from "./AuthModal";
import LoadPatternModal from "./LoadPatternModal";
import SaveReportModal from "./SaveReportModal";
import SavePatternModal from "./SavePatternModal";
import EmailSendingModal from "./EmailSendingModal";
import ReportPreviewModal from "./ReportPreviewModal";
import AttributeService from "../redux/services/AttributeService";
import {AttributeModel} from "../models/AttributeModel";
import {AttributeLoaded} from "../redux/actions/attributesActions";


export default function Home()
{
    const state = useSelector((state: RootState) => state);
    const [loadPatternOpen, setLoadPatternOpen] = React.useState(false);
    const handleLoadPatternOpen = () => {setLoadPatternOpen(true);}
    const [savePatternOpen, setSavePatternOpen] = React.useState(false);
    const handleSavePatternOpen = () => {setSavePatternOpen(true);}
    const [saveReportOpen,setSaveReportOpen] = React.useState(false);
    const handleSaveReportOpen = () => {setSaveReportOpen(true);}
    const [emailSendOpen,setEmailSendOpen] = React.useState(false);
    const handleEmailSendOpen = () => {setEmailSendOpen(true);}
    const [reportPreviewOpen,setReportPreviewOpen]=React.useState(false);
    const handleReportPreviewOpen=()=>{setReportPreviewOpen(true);}
    const [displayingAttributes,setDisplayingAttributes] = React.useState<AttributeModel[]>([])
    const [key,setKey] = React.useState<boolean>(false);

    const user = useSelector((state: RootState) => state);
    const [patternAttributes,setPatternAttributes] = React.useState<AttributeModel[]>([])
    const [currentAtrribute,setCurrentAttribute]= React.useState<AttributeModel|null>(null)

    const addAtribute =(attribute:AttributeModel)=>{
        if (attribute !== null)
        setPatternAttributes(patternAttributes=>[...patternAttributes,attribute]);
        AttributeLoaded(patternAttributes);
    }
    const removeAttribute=(attribute:AttributeModel)=>{
        setPatternAttributes((patternAttributes=>[...patternAttributes.filter(i=>i!==attribute)]))
        AttributeLoaded(patternAttributes);
    }

    React.useEffect(() => {
        if (key) return;
        AttributeService.getAttributes().then((res)=>{
            setDisplayingAttributes([{
                id: 1,
                title: "Вес",
                description: "Вес прибора"
            },
                {
                    id: 2,
                    title: "Индекс осциляции",
                    description: "Индекс"
                },
                {
                    id: 3,
                    title: "Эффективность обслуживания",
                    description: "Коэффициент автоматической работы"
                },
                {
                    id: 4,
                    title:"Дата неисправности",
                    description: "Дата зафиксирования неисправности"
                },
                {
                    id: 5,
                    title: "Тип неисправности",
                    description: "Тип неисправности"
                }])
            // if (res !== undefined){
            //     setDisplayingAttributes(res)
            // }
        })
        setKey(true)
    }, [displayingAttributes,key])

    return(
        <>
        <Box mx={2}>
            <Grid container mt={1} rowSpacing={3} columnSpacing={3} columns={{md: 12}}>
                <Grid item md={4}>
                    <Typography mb={1} sx={{
                        fontSize:"20px",
                        textAlign:"center",
                    }}>
                        Выбор установок
                    </Typography>
                   <Container sx={{
                       border:"1px solid black",
                       borderRadius:"10px",
                   }}>
                       <FormGroup>
                           <Grid container mt={1}   columns={{md: 9}}>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="AT-1"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="ABT-1"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="VISBREKING"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="AT-1"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="AT-1"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="ABT-1"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="VISBREKING"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="AT-1"></FormControlLabel>
                               </Grid><Grid item md={3}>
                               <FormControlLabel  control={<Checkbox color={"default"}/>} label="AT-1"></FormControlLabel>
                           </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="ABT-1"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="VISBREKING"></FormControlLabel>
                               </Grid>
                               <Grid item md={3}>
                                   <FormControlLabel  control={<Checkbox color={"default"}/>} label="AT-1"></FormControlLabel>
                               </Grid>
                           </Grid>
                       </FormGroup>
                   </Container>
                    <Typography mb={2} mt={5} sx={{
                        fontSize:"20px",
                        textAlign:"center",
                    }}>
                        Выбор параметров
                    </Typography>
                    <Container sx={{
                        border:"1px solid black",
                        borderRadius:"10px",
                        marginTop:3,
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center"
                    }}>
                        <FormControl sx={{
                            width:"60%",
                            mt:2,
                            mb:2,
                        }}>
                            <InputLabel id="demo-simple-select-label">Параметр</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Параметр">
                                <MenuItem value="">
                                    <em>None</em> </MenuItem>
                                {displayingAttributes.map((attribute)=>(
                                <MenuItem onSelect={e=>{setCurrentAttribute(attribute)}} value={attribute.id} >{attribute.title}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography mb={2} mt={3} sx={{
                            fontSize:"20px",
                            textAlign:"center",
                        }}>
                            Описание параметра
                        </Typography>
                        <TextField multiline variant="outlined" InputProps={{
                            readOnly:true,
                        }}
                                   defaultValue={currentAtrribute?.description}
                                   value={currentAtrribute?.description}
                        sx={{
                            width:"70%",
                            color:"black",
                            mb:2
                        }}>

                        </TextField>
                        <Button onClick={e=>{addAtribute(currentAtrribute!)}} variant="contained" sx={{
                            mb:2,
                            mt:2,
                            width:"30%"
                        }}>
                            Добавить
                        </Button>
                    </Container>
                </Grid>
                <Grid item md={5}>
                    <Typography mb={1} sx={{
                        fontSize:"20px",
                        textAlign:"center",
                    }}>
                        Выбранные параметры
                    </Typography>
                    <Container sx={{
                        border:"1px solid black",
                        borderRadius:"10px",

                    }}>
                        {state.attributes.map((attribute)=>(
                            <Box sx={{
                                border:"1px solid black",
                                borderRadius:"10px",
                                mt:2,
                                mb:2,
                                backgroundColor:"lightGray"
                            }}>
                                <Typography ml={2} mt={1} mr={2} sx={{
                                    fontWeight:"bold"
                                }}>
                                    {attribute.title}
                                </Typography>
                                <Typography  ml={2} mt={1} mr={2}>
                                    {attribute.description}
                                </Typography>
                                <Button onClick={e=>{removeAttribute(attribute)}} variant="contained" color="error" sx={{
                                    mt:2,
                                    mb:2,
                                    ml:2,
                                }}>
                                    Удалить
                                </Button>
                            </Box>
                            )
                        )}

                        <Box sx={{
                            border:"1px solid black",
                            borderRadius:"10px",
                            mt:2,
                            mb:2,
                            backgroundColor:"lightGray"
                        }}>
                            <Typography ml={2} mt={1} mr={2} sx={{
                                fontWeight:"bold"
                            }}>
                                Индекс осциляции
                            </Typography>
                            <Typography  ml={2} mt={1} mr={2}>
                                Какой-то там коэффициент который определяет все ли нормально, если больше 0.4 то беда
                            </Typography>
                            <Button variant="contained" color="error" sx={{
                                mt:2,
                                mb:2,
                                ml:2,
                            }}>
                                Удалить
                            </Button>
                        </Box>
                        <Box sx={{
                            border:"1px solid black",
                            borderRadius:"10px",
                            mt:2,
                            mb:2,
                            backgroundColor:"lightGray"
                        }}>
                            <Typography ml={2} mt={1} mr={2} sx={{
                                fontWeight:"bold"
                            }}>
                                Индекс осциляции
                            </Typography>
                            <Typography  ml={2} mt={1} mr={2}>
                                Какой-то там коэффициент который определяет все ли нормально, если больше 0.4 то беда
                            </Typography>
                            <Button variant="contained" color="error" sx={{
                                mt:2,
                                mb:2,
                                ml:2,
                            }}>
                                Удалить
                            </Button>
                        </Box>
                        <Box sx={{
                            border:"1px solid black",
                            borderRadius:"10px",
                            mt:2,
                            mb:2,
                            backgroundColor:"lightGray"
                        }}>
                            <Typography ml={2} mt={1} mr={2} sx={{
                                fontWeight:"bold"
                            }}>
                                Индекс осциляции
                            </Typography>
                            <Typography  ml={2} mt={1} mr={2}>
                                Какой-то там коэффициент который определяет все ли нормально, если больше 0.4 то беда
                            </Typography>
                            <Button variant="contained" color="error" sx={{
                                mt:2,
                                mb:2,
                                ml:2,
                            }}>
                                Удалить
                            </Button>
                        </Box>
                        <Box sx={{
                            border:"1px solid black",
                            borderRadius:"10px",
                            mt:2,
                            mb:2,
                            backgroundColor:"lightGray"
                        }}>
                            <Typography ml={2} mt={1} mr={2} sx={{
                                fontWeight:"bold"
                            }}>
                                Индекс осциляции
                            </Typography>
                            <Typography  ml={2} mt={1} mr={2}>
                                Какой-то там коэффициент который определяет все ли нормально, если больше 0.4 то беда
                            </Typography>
                            <Button variant="contained" color="error" sx={{
                                mt:2,
                                mb:2,
                                ml:2,
                            }}>
                                Удалить
                            </Button>
                        </Box>

                    </Container>
                </Grid>
                <Grid item md={3}>
                    <Typography mb={1} sx={{
                        fontSize:"20px",
                        textAlign:"center",
                    }}>
                        Функции
                    </Typography>
                    <Grid container direction="column" justifyContent="center" columns={{md:7}} sx={{
                        height:"100%",

                    }}>
                        <Grid item md={3} sx={{
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center"
                        }}>
                            <Button onClick={handleLoadPatternOpen} variant="contained" sx={{
                                mb:2,
                                mt:2,
                                width:"70%",
                                height:"20%",
                                borderRadius:"20px"
                            }}>
                                Загрузить шаблон
                            </Button>
                        </Grid>
                        <Grid item md={4}
                              sx={{
                                  display:"flex",
                                  flexDirection:"column",
                                  alignItems:"center"
                              }}>
                            <Button onClick={handleReportPreviewOpen} variant="contained" sx={{
                                mb:2,
                                mt:2,
                                width:"70%",
                                height:"20%",
                                borderRadius:"20px"
                            }}>
                                Предпросмотр
                            </Button>
                            <Button onClick={handleSavePatternOpen} variant="contained" sx={{
                                mb:2,
                                mt:2,
                                width:"70%",
                                height:"20%",
                                borderRadius:"20px"
                            }}>
                                Сохранить шаблон
                            </Button>
                            <Button onClick={handleEmailSendOpen} variant="contained" sx={{
                                mb:2,
                                mt:2,
                                width:"70%",
                                height:"20%",
                                borderRadius:"20px"
                            }}>
                                Рассылка по почте
                            </Button>
                            <Button onClick={handleSaveReportOpen} variant="contained" sx={{
                                mb:2,
                                mt:2,
                                width:"70%",
                                height:"20%",
                                borderRadius:"20px"
                            }}>
                                Сохранить отчет
                            </Button>
                        </Grid>

                    </Grid>


                </Grid>
            </Grid>
        </Box>
    <LoadPatternModal open={loadPatternOpen} handlerClose={() => setLoadPatternOpen(false)}/>
            <SavePatternModal open={savePatternOpen} handlerClose={()=>setSavePatternOpen(false)}/>
            <SaveReportModal open={saveReportOpen} handlerClose={()=>setSaveReportOpen(false)}/>
            <EmailSendingModal open={emailSendOpen} handlerClose={()=>setEmailSendOpen(false)}/>
            <ReportPreviewModal open={reportPreviewOpen} handlerClose={()=>setReportPreviewOpen(false)}/>
        </>
    );
}