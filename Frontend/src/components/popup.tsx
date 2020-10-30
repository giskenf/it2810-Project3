import React, { useEffect, useState } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { spacing } from "@material-ui/system";
import rootReducer from "../store/reducers";
import axios from "axios";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: any) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export function PopUp(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [number, setNumber] = useState(0);
  const [votes, setVotes] = useState<number>(props.votes);
  useEffect(() => {
    const changeVote = async () => {

      const votesAndNumber = votes + number;
      setVotes(votesAndNumber);

      const data = await axios.put(
        "http://localhost:8000/players/" + props.id + "?votes=" + votesAndNumber
      );
    };
    changeVote();
  }, [number]);

  return (
    <Div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        size="large"
        fullWidth={true}
      >
        {props.name}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <h4>Team: {props.team}</h4>
          </Typography>
          <Typography gutterBottom>
            <p>Goals scored: {props.goals_scored}</p>
            <p>Assists: {props.assists}</p>
            <p>Goals conceded: {props.goals_conceded}</p>
            <p>Clean sheets: {props.clean_sheets}</p>
            <p>Red cards: {props.red_cards}</p>
            <p>Yellow cards: {props.yellow_cards}</p>
            <p>Votes: {votes}</p>
          </Typography>
          <Typography gutterBottom>
            <h5>News</h5>
            {props.news.length > 0 ? props.news : "Nothing to report."}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setNumber(1)} color="primary">
            Upvote
          </Button>
          <Button autoFocus onClick={() => setNumber(-1)} color="primary">
            Downvote
          </Button>
        </DialogActions>
      </Dialog>
      <div />
    </Div>
  );
}

const Div = styled.div<{}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;
