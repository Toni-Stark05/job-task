import Api from './core/app.api.js'

const test = async () => {
    const res = await Api.get('character')
    console.log(res.data)
}

test()