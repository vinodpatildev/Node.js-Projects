const fs = require('fs')
const chalk = require('chalk')

const readNotes = function(title){
    const notes = loadData()
    const isNoteExist = notes.forEach((note) => note.title === title)
    if(!isNoteExist){
        notes.forEach((note) => {
            if(note.title === title){
                console.log(chalk.blue('------------------------------------------------')) 
                console.log(chalk.green('title :')+note.title)
                console.log(chalk.green('body  :')+note.body)
                console.log(chalk.blue('------------------------------------------------')) 
            }
        })
    }else{
        console.log(chalk.red("Note with given title does not exists."))
    }
}
const listNotes = function(){
    const notes = loadData()

    console.log(chalk.blue('------------------------------------------------'))
    notes.forEach((note) =>{
        console.log(chalk.green('title :')+note.title)
        console.log(chalk.green('body  :')+note.body)
        console.log(chalk.blue('------------------------------------------------'))        
    })
}
const addNotes = function(title,body){
    const notes = loadData()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveData(notes)
        console.log(chalk.green("New note added."))
    }else{
        console.log(chalk.red("Title taken already."))
    }
}
const removeNote = function(title){
    const notes = loadData()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notesToKeep.length != notes.length){
        saveData(notesToKeep)
        console.log(chalk.green("Note is removed"))
    }else{
        console.log(chalk.red("Note not found"))
    }
}
const loadData = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
const saveData = function(notes){
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}
module.exports = {addNotes, removeNote, listNotes, readNotes}