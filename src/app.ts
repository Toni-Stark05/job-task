import appService from "./core/app.service.js"
import db, { TonyStak } from './core/db.js'

const start = async () => {
    await TonyStak.sync({ force: true })
    await appService.task()
}

start()