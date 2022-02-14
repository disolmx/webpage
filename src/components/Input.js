import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

function Input({ 
    error, 
    onChange, 
    value, 
    helperText,
    fullWidth,
    multiline,
    rows,
    required, 
    label,
}) {

    const handleChange = event => {
        const { name, value } = event.target
        onChange({ name, value })
    }

    return (
        <TextField 
            required={required} 
            label={label}
            name={label}
            error={error}
            variant="outlined"
            value={value}
            helperText={helperText}
            onChange={handleChange}
            fullWidth={fullWidth}
            multiline={multiline}
            rows={rows}
        />
    )
}

Input.defaultProps = {
    required: false,
    label: "",
    error: false,
    helperText: "",
    value: "",
    fullWidth: true,
    multiline: false,
    rows: 4,
}

Input.propTypes = {
    required: PropTypes.bool,
    label: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    fullWidth: PropTypes.bool,
    multiline: PropTypes.bool,
    error: PropTypes.bool,
    rows: PropTypes.number,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Input
