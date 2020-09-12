import React, {useState} from 'react';
import './Todo.css';
import { List,ListItem,ListItemText,ListItemAvatar,Button,Modal} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing (2,4,3),
    },

}));
function Todo(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div>
                <h1>
                    I am modal
                </h1>
                <button onClick = {e =>setOpen(false)}></button>
            </div>
        </Modal>
        <List /*class="todo_list"*/>
            <ListItem>
                <ListItemAvatar>
                
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary= 'deadline...⏰'/>
                
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick= {event =>{db.collection('todos').doc(props.todo.id).delete()}}/>
            {/* <li>{props.text}</li> */}
        </List>
        </>
    )
}

export default Todo
