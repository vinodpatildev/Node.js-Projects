const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')

yargs.version('1.1.0')


yargs.command({
    command:'add',
    describe: 'To add note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'                        
        },
        body:{
            describe:'Node body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'To remove note',
    builder:{
        title:{
            describe:'Title of note to be deleted',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'To list notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'To remove note',
    builder:{
        title:{
            describe:'Title of the note to be read.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})



const arg = yargs.argv