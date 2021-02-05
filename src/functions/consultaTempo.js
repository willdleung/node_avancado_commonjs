const fetch = require('node-fetch')

module.exports = async function consultaTempo(cidade){
    const response = await fetch(`https://api.hgbrasil.com/weather?key=2c1d5276&user_ip=remote`)
    const json = await response.json()

    return json
}