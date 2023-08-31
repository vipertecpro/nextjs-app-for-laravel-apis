'use client'
import { Alert } from '@material-tailwind/react'
import { useState } from 'react'
const AuthSessionStatus = ({ status, className, ...props }) => {
    if (status && status.messageData) {
        const [open, setOpen] = useState(true)
        return (
            <>
                <div className={'mt-5'}>
                    <Alert
                        open={open}
                        onClose={() => setOpen(false)}
                        color={
                            status.messageStatus === 'success'
                                ? 'light-green'
                                : 'red'
                        }
                        {...props}>
                        {status.messageData}
                    </Alert>
                </div>
            </>
        )
    }
}

export default AuthSessionStatus
