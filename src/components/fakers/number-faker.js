import React from "react"

import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"

import Cached from '@material-ui/icons/Cached'
import FileCopy from '@material-ui/icons/FileCopy'

import FakeGenerator from '../../libs/fake-generator'

import { purple } from '@material-ui/core/colors'

const NumberFaker = () => {
  const [min, setMin] = React.useState(0)
  const [max, setMax] = React.useState(100)
  const [number, setNumber] = React.useState(FakeGenerator.generateNumber(min, max))

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} md={12}>
        <TextField
          id="min-number"
          variant="outlined"
          label="De"
          type="number"
          value={min}
          onChange={(event) => setMin(event.target.value)}
        />
      </Grid>

      <Grid item xs={6} md={12}>
        <TextField
          id="max-number"
          variant="outlined"
          label="Até"
          type="number"
          value={max}
          onChange={(event) => setMax(event.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
        <OutlinedInput
          variant="outlined"
          value={number}
          readOnly={true}
          style={{ minWidth: '280px' }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton style={{ color: purple[700] }} onClick={() => setNumber(FakeGenerator.generateNumber(min, max))}>
                <Cached fontSize="small" />
              </IconButton>
              <IconButton style={{ color: purple[700] }} onClick={() => FakeGenerator.copyToClipboard(number)}>
                <FileCopy fontSize="small" />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
    </Grid>
  )
}

export default NumberFaker
