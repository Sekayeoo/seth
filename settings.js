const fs = require('fs');
const chalk = require('chalk');

// ——————— [~SETTINGS~] ——————— \\

global.owner = ['6285868755849']
global.packname = 'stikkerrr'
global.author = 'SethB~'
global.botname = 'Seth-Bot'
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/99a576f25c29ec796fce0.jpg',
	thumbnail: fs.readFileSync('./src/media/sky.jpg'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/@sekayeoo_',
	gh: 'https://github.com/Sekayeoo',
	gc: '',
	ch: '120363319501996304@newsletter',
}

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot Bukan Admin!',
	group: 'Fitur Hanya Dapat Digunakan Di Group!',
	private: 'Fitur Hanya Dapat Digunakan Di Privat Chat!',
	prem: 'Fitur Khusus Premium!',
	wait: 'Bntr....',
	error: 'Error!',
	done: 'Done.'
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

global.APIs = {
	zaynn: 'https://api.zaynn.my.id/api',
}
global.APIKeys = {
	'https://api.zaynn.my.id/api': 'Najedev',
}

// ——————— [~END~] ——————— \\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});