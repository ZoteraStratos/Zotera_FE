
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import NestedMenu from './NestedMenu';
import Folder from "@material-ui/icons/Folder";
import Loader from "./Loader";
import Tree from '../ReuseableComponents/FileTree/Tree/Tree'

const useStyles = makeStyles({
    root: {
        width: '100%',

    },
    media: {
        width: '4%'
    },
    headerCardCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonColor: {
        backgroundColor: '#26616a',
        color: 'white'
    },
    dropDownBtnStyle: {
        backgroundColor: '#26616a',
        color: 'white',
        paddingTop: '4px',
        paddingLeft: '15px',
        paddingBottom: '4px',
        paddingRight: '14px',
        borderRadius: '5px'
    },
    alignCenter: {
        textAlign: 'center'
    },
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 400,
        overflow: 'scroll',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        padding: '16px 32px 32px 32px',
    },

});


const ListOfFileModal = (props) => {
    const classes = useStyles();
    const [pathNames, setpathNames] = useState([]);
    const [menuData, setMenuData] = useState([]);
    const [selectedFilePath, setSelectedFilePath] = useState('');
    const [msg, setMsg] = useState('');
    const { modalStatus, handleModalClose, receiveOldData } = props;

    const getModalStyle = () => {
        return {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        };
    }
    const handleChange = (event) => {
        const url = 'https://wastewatertreatmentarrowdemoserver.azurewebsites.net/getListOfFile';
        fetch(url)
            .then(res => res.text())
            .then(res => {
                let pathNamesArray = [];
                for (const blob of JSON.parse(res).thumbnails) {
                    pathNamesArray.push("/" + blob.name);
                }
                setpathNames(pathNamesArray);
            })
            .catch(error => {
            
                console.error('There has been a problem with your fetch operation:', error);
                setMsg(`Please refresh page and try one more time .There has been a problem with your fetch operation:${error}`);
            });
    }

    const handleSelectedFilePath = (filePathName) => {
        setMsg('Stage 1 / 3 Downloading Content from this path');
        setSelectedFilePath(filePathName);

    }
    // Insert path into directory tree structure:
    // const insert = (items = [], [head, ...tail], indx) => {
    //     let child = items.find(child => child.title === head);
    //     if (!child) items.push(child = { title: head, items: [], icon: <Folder />, filePath: (tail.length == 0) ? pathNames[indx] : '' });
    //     if (tail.length > 0) insert(child.items, tail, indx);
    //     return items;
    // }

    const insert = (items = [], [head, ...tail], indx) => {
        let files = items.find(files => files.name === head);
        if (!files) items.push(files = { name: head, files: [], icon: <Folder />, filePath: (tail.length == 0) ? pathNames[indx] : '' , type : (tail.length == 0) ? 'file': 'folder'});
        if (tail.length > 0) insert(files.files, tail, indx);
        return items;
    }

    useEffect(() => {
        if (modalStatus) {
            handleChange()
        }
    }, [modalStatus])

    useEffect(() => {
        if (pathNames.length > 0) {
            let objectArray = pathNames
                .map(path => path.split('/').slice(1))
                .reduce((items, path, index) => insert(items, path, index), []);
            setMenuData(objectArray);
        }
    }, [pathNames])

    useEffect(() => {
        if (selectedFilePath.length > 0) {
            var finalFilePath = selectedFilePath;
            if (finalFilePath.charAt(0) == "/") finalFilePath = finalFilePath.substr(1);
            fetch(`https://wastewatertreatmentarrowdemoserver.azurewebsites.net/list/filePathName?${finalFilePath}`)
                .then((response) => response.json())
                .then((responseJson) => {
                    receiveOldData(responseJson);
                    setMsg(' Stage 2 / 3 File content receive successfully now processing its data for chart . This window will close automatically Please wait for sometime ')
                    const timer = setTimeout(() => {
                        setMsg('Stage 3 / 3 Processing completed successfully')
                        setSelectedFilePath('')
                    }, 8000);
                    return () => clearTimeout(timer);
                })
                .catch(error => {
                    setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
                    console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
                });
        }
    }, [selectedFilePath])




    return (
        <>
            <Card className={classes.root}  >
                <div>
                    <Grid container spacing={24}>
                        <Grid item md={12} lg={12} xs={12}>
                            <Modal
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                open={modalStatus}
                                onClose={handleModalClose}
                                xs={6}
                            >
                                <div style={getModalStyle()} className={classes.paper}>
                                    <button
                                        aria-label="Close Modal"
                                        aria-labelledby="close-modal"
                                        className="_modal-close"
                                        onClick={handleModalClose}
                                    >

                                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                                        </svg>
                                    </button>
                                    <Typography variant="h6" id="modal-title">
                                        Select a File from below Folder:-
                                    </Typography>
                                    <hr />

                                    {
                                        (selectedFilePath.length > 0) ?
                                            <Loader>File Path you have selected is :- <br /> <b>{selectedFilePath}</b> <br /><br /><span className="blink_me">{msg}</span></Loader> :
                                            (menuData.length > 0) ?
                                                // <NestedMenu menu={menuData} handleSelectedFilePath={handleSelectedFilePath} /> :
                                                <Tree data={menuData} handleSelectedFilePath={handleSelectedFilePath}  /> :
                                                (msg.length > 0) ? 
                                                <span className="blink_me"><br/>{msg}</span> : <Loader>Loading...</Loader>
                                    }
                                </div>
                            </Modal>
                        </Grid>
                    </Grid>
                </div>

            </Card>
        </>
    );
};

export default ListOfFileModal;