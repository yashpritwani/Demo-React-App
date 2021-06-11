import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
// import SortIcon from '@material-ui/icons/Sort';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  header: {

  },
  title: {
    height: '6vh',
    width: '30%',
    background: '#00ccbb',
    marginTop: '30vh',
    marginLeft: '70vh',
    textAlign: 'center',
    justifyContent: ' center',
    fontSize: '2em',
  },
  titleBox: {
    transform: 'skew(-10deg)',
  },
  titleText: {
    color: '#351d8e',
    background: '#fff200',
    fontWeight: '900',
  },
  caption: {
    background: '#fff200',
    width: '60%',
    color: '#000000',
    marginLeft: '200px',
    marginTop: '20px',
    fontSize: '1.3em',
    fontWeight: '600'
  },
  table: {
    color: '#ffffff',
    fontSize: '1rem',
    textAlign: 'center',
    padding: '20px 0px 20px 20px',
  },
  container: {
    width: '55%',
    background: '#00ccbb',
    transform: 'translate(40%,-45%)',
  },
  tabHead: {
    color: '#161a5b',
  },
  tabCol: {
    padding: '5px 20px 5px 20px',
  },
  arrow: {
    fontSize: '100px',
    color: '#000000',
    paddingLeft: '31.5%',
    transform: 'translateY(-8.5vh)',
    position: 'relative', 
    zIndex: '20'
  }
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <div className={classes.title}>
      <div className={classes.titleBox}>
      <span className={classes.titleText}>Very very carefully chosen tutors</span>
      </div>
      </div>
      <div className={classes.arrow}>
      <span >&#8625;</span>
      </div>
      <div className={classes.container}>
      <table className={classes.table}>
    <caption className={classes.caption}>Cambridge 	&#38; IB Mathematics Subject choice</caption>
    <thead className={classes.header}>
      <tr>
        <th className={classes.tabHead}>IGCSE - Mathematics</th>
        <th className={classes.tabHead}>AS-A Level</th>
        <th className={classes.tabHead}>IBDP</th>
        <th className={classes.tabHead}></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={classes.tabCol}>Mathematics Core/ Extended 0580</td>
        <td className={classes.tabCol}>Mathematics 9709</td>
        <td className={classes.tabCol}>Mathematics: AA SL</td>
      </tr>
      <tr>
        <td className={classes.tabCol}>International Mathematics 0607</td>
        <td className={classes.tabCol}>Mathematics Further 9231</td>
        <td className={classes.tabCol}>Mathematics: AA HL</td>
      </tr>
      <tr>
        <td className={classes.tabCol}>Additional Mathematics 0606</td>
        <td className={classes.tabCol}>Mathematics Further 9231</td>
        <td className={classes.tabCol}>Mathematics: AI SL</td>
      </tr>
      <tr>
        <td className={classes.tabCol}></td>
        <td className={classes.tabCol}></td>
        <td className={classes.tabCol}>Mathematics: AI HL</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
  );
}
