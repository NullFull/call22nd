const path = require('path')

let config = {
    webpack: config => {
        config.resolve.modules.push(path.join(__dirname))
        return config
    },
    webpack5: false,
    reactStrictMode: false,
}

module.exports = config
