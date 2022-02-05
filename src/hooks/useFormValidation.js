const { useState } = require("react")

export default function useFormValidation() {
    const [errors, setErrors] = useState({})
    const err = {}

    const appendError = (key, message) => {
        err[key] = message
    }
    
    const doSetErrors = () => {
        if (Object.keys(err).length > 0) {
            setErrors(prev => ({ ...prev, ...err }))
            return true
        }

        return false
    }

    const setValidation = (validation) => {
        setErrors({})

        validation(appendError)

        return doSetErrors
    }

    const isError = key => {
        if (errors[key]) {
            return true
        }

        return false
    }

    const getError = key => {
        return errors[key]
    }

    return [setValidation, getError, isError]
}