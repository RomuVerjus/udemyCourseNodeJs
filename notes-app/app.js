const chalk = require('chalk')
const note = require('./notes')
const yargs = require('yargs')
const fs = require('fs')

yargs.version("1.1.0")

yargs.command({
    command: 'add',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',

        }
    },
    describe: 'Add a new note',
    handler: (argv) => note.addNote(argv.title, argv.body)
}).command({
    command: 'remove',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Remove a note',
    handler: (argv) => note.removeNote(argv.title)
}).command({
    command: 'read',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Read the note',
    handler: (argv) => note.readNote(argv.title)
}).command({
    command: 'list',
    describe: 'List notes!',
    handler: () => note.listNotes()
}).parse()
