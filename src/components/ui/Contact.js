import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery
} from '@material-ui/core'

import ButtonArrow from './ButtonArrow'

import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'
import phoneIcon from '../../assets/phone.svg'
import emailIcon from '../../assets/email.svg'
import airplane from '../../assets/send.svg'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}))


export default function Contact(props) {

  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'))
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [message, setMessage] = useState('')

  const onChange = event => {
    let valid

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

        if (!valid) {
          setEmailHelper('Invalid Email')
        } else {
          setEmailHelper('')
        }
        break

      case 'phone':
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)

        if (!valid) {
          setPhoneHelper('Invalid Phone Number')
        } else {
          setPhoneHelper('')
        }
        break

      default:
        break
    }

  }





  return (
    <Grid container direct='row'>
      <Grid item container direction='column' lg={4} xl={3} alignItems='center' justify='center' style={{ marginBottom: matchesMd ? '5em' : 0, marginTop: matchesSM ? '1em' : matchesMd ? '5em' : 0 }}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h1' align={matchesMd ? 'center' : undefined} style={{ lineHeight: 1 }}>Contact Us</Typography>
              <Typography variant='body1' align={matchesMd ? 'center' : undefined} style={{ color: theme.palette.common.blue }}>We're waiting.</Typography>
            </Grid>
            <Grid item style={{ marginTop: '2em' }} container>
              <Grid item>
                <img src={phoneIcon} alt='phone' style={{ marginRight: '0.5em' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>555.555.5555</Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img src={emailIcon} alt='email' style={{ marginRight: '0.5em', verticalAlign: 'bottom' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>jbj@jbj.com</Typography>
              </Grid>
            </Grid>
            <Grid item container direction='column' style={{ maxWidth: '20em' }}>
              <Grid item style={{ marginBottom: '0.5em ' }}>
                <TextField fullWidth label='Name' id='name' value={name} onChange={(event) => setName(event.target.value)} />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em ' }}>
                <TextField fullWidth label='Email' error={emailHelper.length !== 0} helperText={emailHelper} id='email' value={email} onChange={onChange} />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em ' }}>
                <TextField fullWidth label='Phone' error={phoneHelper.length !== 0} helperText={phoneHelper} id='phone' value={phone} onChange={onChange} />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField InputProps={{ disableUnderline: true }} fullWidth value={message} className={classes.message} id='message' multiline rows='10' onChange={(event) => setMessage(event.target.value)} />
            </Grid>
            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button variant='contain' className={classes.sendButton}>Send Message
                <img alt='paper airplane' src={airplane} style={{ marginLeft: '1em' }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container className={classes.background} direction={matchesMd ? 'column' : 'row'} alignItems='center' justify={matchesMd ? 'center' : undefined} lg={8} xl={9}>
        <Grid
          item
          style={{
            marginLeft: matchesMd ? 0 : "3em",
            textAlign: matchesMd ? "center" : "inherit"
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h1"
                align={matchesMd ? 'center' : undefined}
                style={{ lineHeight: matchesMd ? 1.1 : null }}
              >
                Simple Software.
              {matchesMd && <br />}
                <br />
              Revolutionary Results.
            </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMd ? 'center' : undefined}
                style={{ fontSize: matchesMd ? "1.25rem" : "1.5rem" }}
              >
                Take advantage of the 21st Century.
            </Typography>
              <Grid container justify={matchesMd ? "center" : undefined} item>
                <Button
                  component={Link}
                  href="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            href="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              props.setValue(5);
            }}
          >
            Free Estimate
        </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}