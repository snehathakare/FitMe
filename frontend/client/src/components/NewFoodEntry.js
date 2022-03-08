import React from 'react'
import TextField from '@material-ui/core/TextField';

function NewFoodEntry() {
    return (
        <div>
            <TextField id="outlined-basic" label="Date/Time" variant="outlined" />
            <TextField id="outlined-basic" label="Food" variant="outlined" />
            <TextField id="outlined-basic" label="Calories" variant="outlined" />
        </div>
    )
}

export default NewFoodEntry
