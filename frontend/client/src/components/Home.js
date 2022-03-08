import React from 'react'
import NewFoodEntry from "./NewFoodEntry";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                    Icon with text
          </Typography>
                <div className={classes.demo}>
                    <List>
                        {generate(
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>,
                        )}
                    </List>
                </div>
            </Grid>
            <Button variant="contained" color="primary">
                Add new entry
</Button>
            <NewFoodEntry />
        </div>
    )
}

export default Home
