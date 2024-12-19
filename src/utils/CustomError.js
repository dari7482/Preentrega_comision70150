
export const createCustomError = (name, message, cause, code) => {
    let error = Error(message)
    error.cause = cause
    error.name = name
    error.code = code
    error.custom = true

    throw error



}


