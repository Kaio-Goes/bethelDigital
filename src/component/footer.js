import React from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Security, Info } from "@material-ui/icons";

const Footer = () => {
  const { footer, social, copyright } = useStyles();
  return (
    <Grid >
      <footer className={footer}>
        <div className={social}>
          <a href="https://www.instagram.com/speak.up.tech/">
            <Security color="action" />
          </a>
          <a href="https://www.youtube.com/c/SpeakupTech">
            <Info color="action" />
          </a>
        </div>
        <p className={copyright}>Made with by Speak up Tech</p>
      </footer>{" "}
    </Grid>
  );
};

export default Footer;

const useStyles = makeStyles(() => ({
  footer: {
    width: '100%',
    height: "100px",
    marginTop: "90px",
    backgroundColor: "#256eeb",
    position: "relative",
  },
  social: {
    paddingTop: "8px",
    display: "flex",
    justifyContent: "center",
  },
  copyright: {
    position: "relative",
    bottom: "8px",
    textAlign: "center",
    color: "white",
  },
}));
