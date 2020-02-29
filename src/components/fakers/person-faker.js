import React from "react"

import Grid from "@material-ui/core/Grid"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"

import Cached from '@material-ui/icons/Cached'
import FileCopy from '@material-ui/icons/FileCopy'

import CPFFaker from './cpf-faker'

import FakeGenerator from '../../libs/fake-generator'

import { purple } from '@material-ui/core/colors'

const PersonFaker = () => {
  const [name, setName] = React.useState(FakeGenerator.generatePersonName())
  const [phone, setPhone] = React.useState(FakeGenerator.generatePersonPhone())

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CPFFaker />
      </Grid>

      <Grid item xs={12}>
        <OutlinedInput
          value={name}
          readOnly={true}
          style={{ minWidth: '280px' }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton style={{ color: purple[700] }} onClick={() => setName(FakeGenerator.generatePersonName())}>
                <Cached fontSize="small" />
              </IconButton>
              <IconButton style={{ color: purple[700] }} onClick={() => FakeGenerator.copyToClipboard(name)}>
                <FileCopy fontSize="small" />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <OutlinedInput
          value={phone}
          readOnly={true}
          style={{ minWidth: '280px' }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton style={{ color: purple[700] }} onClick={() => setPhone(FakeGenerator.generatePersonPhone())}>
                <Cached fontSize="small" />
              </IconButton>
              <IconButton style={{ color: purple[700] }} onClick={() => FakeGenerator.copyToClipboard(phone)}>
                <FileCopy fontSize="small" />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
    </Grid>
  )
}

export default PersonFaker
