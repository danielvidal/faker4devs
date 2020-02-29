import React from "react"

import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"

import Cached from '@material-ui/icons/Cached'
import FileCopy from '@material-ui/icons/FileCopy'

import FakeGenerator from '../../libs/fake-generator'

import { purple } from '@material-ui/core/colors'

const CNPJFaker = () => {
  const [cnpj, setCpnj] = React.useState(FakeGenerator.generateCNPJ())

  return (
    <OutlinedInput
      value={cnpj}
      readOnly={true}
      style={{ minWidth: '280px' }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton style={{ color: purple[700] }} onClick={() => setCpnj(FakeGenerator.generateCNPJ())}>
            <Cached fontSize="small" />
          </IconButton>
          <IconButton style={{ color: purple[700] }} onClick={() => FakeGenerator.copyToClipboard(cnpj)}>
            <FileCopy fontSize="small" />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default CNPJFaker
