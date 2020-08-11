module.exports = () => {
    return (req, res, next) => {
        const agent = req.headers["user-agent"]

        if (/insomnia/.test(agent)) {
            // if the client is Insomnia, deny them access
            return res.status(418).json({
                message: "No Insomnia allowed here!"
            })
        }

        next()
    }
}