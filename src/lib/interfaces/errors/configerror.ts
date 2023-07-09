export class ConfigError extends Error {
    data: {
        message: string
    }

    constructor({
        message,
        data
    }: {
        message: string,
        data: {
            message: string
        }
    }) {
        super(message)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ConfigError)
        }

        this.name = "ConfigError"
        this.data = data ?? { message: message }
    }
}