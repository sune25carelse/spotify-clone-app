import React from 'react';
import './Footer.css';
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import SkipNext from "@material-ui/icons/SkipNext";
import Shuffle from "@material-ui/icons/Shuffle";
import Repeat from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core"; 
import { PlaylistPlay, VolumeDown } from '@material-ui/icons';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://hothiphop.org/wp-content/uploads/2020/11/Future-Lil-Uzi-Vert-%E2%80%93-Stripes-Like-Burberry-300x245.png" 
          alt="" 
        />
        <div className="footer__songInfo">
          <h4>Bust a Move!</h4>
          <p>Future ft. Uzi</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
