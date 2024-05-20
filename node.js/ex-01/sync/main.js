import {createFile} from './create.js'
import {showFile} from './read.js'
import {updateFile} from './write.js'
import {deleteFile} from './delete.js'


createFile()
console.log("- - - - - - - - - -")
showFile()
console.log("- - - - - - - - - -")
updateFile()
console.log("- - - - - - - - - -")
showFile()
console.log("- - - - - - - - - -")
deleteFile()