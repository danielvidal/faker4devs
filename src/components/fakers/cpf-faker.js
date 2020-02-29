import React from "react"

import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"

import Cached from '@material-ui/icons/Cached'
import FileCopy from '@material-ui/icons/FileCopy'

import FakeGenerator from '../../libs/fake-generator'

import { purple } from '@material-ui/core/colors'

const CPFFaker = () => {
  const [cpf, setCpf] = React.useState(FakeGenerator.generateCPF())

  return (
    <OutlinedInput
      value={cpf}
      readOnly={true}
      style={{ minWidth: '280px' }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton style={{ color: purple[700] }} onClick={() => setCpf(FakeGenerator.generateCPF())}>
            <Cached fontSize="small" />
          </IconButton>
          <IconButton style={{ color: purple[700] }} onClick={() => FakeGenerator.copyToClipboard(cpf)}>
            <FileCopy fontSize="small" />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default CPFFaker
