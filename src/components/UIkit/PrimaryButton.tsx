import React from "react";
import Button from "@material-ui/core/Button";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = () =>
  createStyles({
    button: {
      backgroundColor: "#4dd0e1",
      color: "#000",
      fontSize: 16,
      height: 48,
      marginBottom: 16,
      width: 256,
    },
  });

interface Props extends WithStyles<typeof styles> {
  label: string;
  onClick: any;
}

const PrimaryButton = (props: Props) => {
  const { classes, label, onClick } = props;
  return (
    <Button className={classes.button} variant="contained" onClick={() => onClick()}>
      {label}
    </Button>
  );
};

export default withStyles(styles)(PrimaryButton);
