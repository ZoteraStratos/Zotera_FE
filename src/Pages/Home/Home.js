import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Box, Typography } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PlantLayoutImage from "../../Images/PlantLayout.png";

const useStyles = makeStyles({
  root: {
    // marginTop: "70px",
    // marginLeft: "225px",

  },
  media: {
    // maxWidth: "55vw"

  },
  fiberManualRecordIcon: {
    fontSize: "19px"
  },
  greenColorIcon: {
    color: "#56ff54"
  },
 
  typographyLableColor: {
    color: "white",
    fontSize: '13px'
  },

  container: {
    position: "relative",
    textAlign: "center",
    color: "white",

  },
  wordWrap: {
    wordWrap: "break-word"
  },
  administrationNdMaint: {
    position: "absolute",
    bottom: '25%',
    left: '07%',
    transform: 'translate(-50 %, -50 %)',
  },
  mainControlRoom: {
    position: "absolute",
    bottom: '50%',
    left: '15%',
    transform: 'translate(-50 %, -50 %)',
  },
  gritAndScreen: {
    position: "absolute",
    top: '30%',
    left: '20%',
    transform: 'translate(-50 %, -50 %)',
  },
  preliminaryTreat: {
    position: "absolute",
    top: '10%',
    left: '31%',
    transform: 'translate(-50 %, -50 %)',
  },
  pumpStation: {
    position: "absolute",
    bottom: '20%',
    left: '20%',
    transform: 'translate(-50 %, -50 %)',
  },
  primarySettling: {
    position: "absolute",
    top: '25%',
    left: '38%',
    transform: 'translate(-50 %, -50 %)',
  },
  secondarySettling: {
    position: "absolute",
    top: '45%',
    left: '36%',
    transform: 'translate(-50 %, -50 %)',
  },
  thickener: {
    position: "absolute",
    bottom: '27%',
    left: '42%',
    transform: 'translate(-50 %, -50 %)',
  },
  fermenters: {
    position: "absolute",
    bottom: '34%',
    left: '52%',
    transform: 'translate(-50 %, -50 %)',
  },
  primaryClarifiers: {
    position: "absolute",
    top: '8%',
    right: '35%',
    transform: 'translate(-50 %, -50 %)',
  },
  bioFilters: {
    position: "absolute",
    top: '20%',
    right: '28%',
    transform: 'translate(-50 %, -50 %)',
  },
  uvDisinfection: {
    position: "absolute",
    top: '34%',
    right: '36%',
    transform: 'translate(-50 %, -50 %)',
  },
  influentPump: {
    position: "absolute",
    top: '28%',
    right: '18%',
    transform: 'translate(-50 %, -50 %)',
  },
  nutrientRec: {
    position: "absolute",
    top: '36%',
    right: '16%',
    transform: 'translate(-50 %, -50 %)',
  },
  anaerobicDigestr: {
    position: "absolute",
    top: '45%',
    right: '27%',
    transform: 'translate(-50 %, -50 %)',
  },
  chemicalStorage: {
    position: "absolute",
    top: '56%',
    right: '08%',
    transform: 'translate(-50 %, -50 %)',
  },
  secondaryTreatmnt: {
    position: "absolute",
    top: '56%',
    right: '28%',
    transform: 'translate(-50 %, -50 %)',
  },
  redColorIcon: {
    color: "#ff2e3f",
    animation: '2s linear infinite condemned_blink_effect'
  },
  pulse: {
    background: "#ff2e3f",
    borderRadius: "50%",
    margin: 10,
    height: 15,
    width: 15,
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
    transform: "scale(1)",
    animation: "$pulse 1s infinite"
  },
  "@keyframes pulse": {
    "0%": {
      visibility: 'hidden',
    },
    "70%": {
      visibility: 'hidden',
     
    },
    "100%": {
      visibility: 'visible',
     
    }
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root + " " + classes.container}>
      <CardMedia
        className={classes.media}
        component="img" src={PlantLayoutImage}
        title="Plant Layout Image"
      />
      <Box display='flex' alignItems='center' className={classes.administrationNdMaint}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Administration & Maintenance
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.mainControlRoom}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Main Control Room
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.pumpStation}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Pump
          Station
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.gritAndScreen}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Grit & Screen
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.preliminaryTreat}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Preliminary  Treatment
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.primarySettling}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Primary Settling Basins
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.secondarySettling}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Secondary Clarifier
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.thickener}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Thickener
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.fermenters}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Fermenters
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.primaryClarifiers}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Primary Clarifiers
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.bioFilters}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Bio - Filters
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.uvDisinfection}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          UV Disinfections
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.influentPump}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.redColorIcon, classes.pulse ]} />
        <Typography className={classes.typographyLableColor + " " + classes.headerGT}>
          Influent Pump Station
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.nutrientRec}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Nutrient Recovery Facility
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.anaerobicDigestr}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Anaerobic Digester
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.chemicalStorage}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Chemical Storage Tanks
        </Typography>
      </Box>

      <Box display='flex' alignItems='center' className={classes.secondaryTreatmnt}>
        <FiberManualRecordIcon className={[classes.fiberManualRecordIcon, classes.greenColorIcon]} />
        <Typography className={classes.typographyLableColor}>
          Secondary Treatment
        </Typography>
      </Box>
    </Card>
  );
}
