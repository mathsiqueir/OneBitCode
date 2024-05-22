const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path")
function br(){
	console.log("- - - - - - - - - - - - -")
}

const systemPlatformMap={
	'win32':'Windows',
	'Linux': 'Linux',
	'darwin': 'MacOs',
	'freebsd': 'freeBSD'
}

function getSystemInfo(){
	const plataforma = systemPlatformMap[os.platform()]
	const arquitetura = os.arch()
	const cpuModel = os.cpus()[0].model

	const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
  const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

  const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
  const uptimeHoursInSeconds = uptimeHours * 60 * 60

  const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
  const uptimeMinsInSeconds = uptimeMins * 60

  const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

  const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`
	

	
	const totalmem = (os.totalmem() /1024 /1024 /1024)
	const memoryUsage = ((os.totalmem() - os.freemem())/1024/1024/1024).toFixed(2)
	const memoryUsagePercent = ((memoryUsage / totalmem) * 100).toFixed(0)

	return {plataforma,cpuModel,arquitetura,uptime,memoryUsage,memoryUsagePercent}
}
function printLog({plataforma,cpuModel,arquitetura,uptime,memoryUsage,memoryUsagePercent}){
	console.clear()

	console.log(`nome do sistema operacional: ${plataforma}`)
	br()
	console.log(`arquitetura do sistema: ${arquitetura}`)
	br()
	console.log("Modelo do processador: "+cpuModel)
	br()
	console.log(`O computador está ligado a ${uptime}`)
	br()
	console.log(`uso de memória: ${memoryUsage}GB (${memoryUsagePercent}%) 
	`)
	br()
}
function saveLog({plataforma,cpuModel,arquitetura,uptime,memoryUsage,memoryUsagePercent}){
	const log = `nome do sistema operacional: ${plataforma} | arquitetura do sistema: ${arquitetura} | Modelo do processador:,${cpuModel} | O computador está ligado a ${uptime} | uso de memória: ${memoryUsage}GB  (${memoryUsagePercent}%)`


	const logDir = path.join("/", "log")
  
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)
  }

  const logFilePath = path.join(logDir, "log.txt")
  fs.appendFileSync(logFilePath, log)

}

setInterval(()=>{
	const systemInfo = getSystemInfo()
	printLog(systemInfo)
	saveLog(systemInfo)
},10000)