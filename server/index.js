const Koa = require('koa')
const koaBody = require('koa-body')
const _ = require('lodash')
const app = new Koa()

app.use(koaBody())

// x-response-time
app.use(async function (ctx, next) {
	const start = new Date()
	await next()
	const ms = new Date() - start
	ctx.set('X-Response-Time', `${ms}ms`)
})

// logger
app.use(async function (ctx, next) {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response
app.use(async function(ctx) {
	const data = _.extend({}, ctx.request.query, ctx.request.body)
	const { interval } = data

	if (interval && interval > 0) {
		await timeout(interval)
	}
	ctx.response.status = 200
})

const PORT = 8080

app.listen(PORT, () => {
	console.log(`Server listening @ ${PORT}`)
})

function timeout(interval) {
	return new Promise((resolve) => {
		setTimeout(resolve, interval)
	})
}