import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'

export default function AddService() {
    const [service, setService] = useState({})
    const form = useRef(null)


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newServiceData = { ...service };
        newServiceData[field] = value;
        setService(newServiceData)

    }
    const handleAddService = (e) => {
        // console.log(service)
        // send data to the server
        fetch('https://jerins-parlour-server.herokuapp.com/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Service Added')
                    form.current.reset();
                }
            })

        e.preventDefault()
    }
    return (
        <Box>
            <form
                ref={form}
                onSubmit={handleAddService}>

                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Service Name"
                    variant="standard"
                    name='name'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Service Description"
                    variant="standard"
                    name='description'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Price Of The Service"
                    variant="standard"
                    type='number'
                    name='price'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '75%', m: 2 }}
                    label="Image Link"
                    variant="standard"
                    name='img'
                    onBlur={handleOnBlur} />
                <button

                    style={{ width: '75%', backgroundColor: '#f63e7b', color: 'white', padding: '10px', borderRadius: '15px', cursor: 'pointer' }} type='submit'>Add Service</button>

            </form>
        </Box>
    )
}
