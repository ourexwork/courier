import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { footerStyle } from "../materialstyle/footerStyle.css";

import ScrollableAnchor from "react-scrollable-anchor";
import moment from "moment";
const LANGUAGES = [
  {
    code: "en-US",
    name: "English"
  },
  {
    code: "fr-FR",
    name: "Français"
  }
];

function Footer() {
  const useStyles = makeStyles(footerStyle);
  const classes = useStyles();
  return (
    <ScrollableAnchor id={"footer"}>
      <footer>
        <Typography component="footer" className={classes.root}>
          <Container className={classes.container}>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={4} md={3}>
                <Grid
                  container
                  direction="column"
                  justify="flex-end"
                  className={classes.iconsWrapper}
                  spacing={2}
                >
                  <Grid item className={classes.icons}>
                    <a href="/" className={classes.icon}>
                      <img
                        src="/images/facebook-app-logo.png"
                        alt="Facebook"
                      />
                    </a>
                    <a
                      href="/"
                      className={classes.icon}
                    >
                      <img
                        src="/images/twitter.png"
                        alt="Twitter"
                      />
                    </a>
                  </Grid>
                  <Grid item>© {moment().get("year")} Rilxpress</Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Typography variant="h6" marked="left" gutterBottom>
                  Legal
                </Typography>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <Link href="/premium-themes/onepirate/terms/">Terms</Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link href="/premium-themes/onepirate/privacy/">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={8} md={4}>
                <Typography variant="h6" marked="left" gutterBottom>
                  Language
                </Typography>
                <TextField
                  select
                  SelectProps={{
                    native: true
                  }}
                  className={classes.language}
                >
                  {LANGUAGES.map(language => (
                    <option value={language.code} key={language.code}>
                      {language.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item>
            <Typography variant="caption">
              {'made by '}
              <Link href="/" rel="nofollow" title="Freepik">
                excorp
              </Link>
              
              {' is licensed by '}
              <Link
                href="/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
               Exemblar
              </Link>
            </Typography>
          </Grid>
            </Grid>
          </Container>
        </Typography>
      </footer>
    </ScrollableAnchor>
  );
}
export default Footer;
