const fs = require('fs');

const getNotes = () => "youNotes ..."
const savedFile = "notes.json"

const addNote = (title, body) => {
    if (title !== "") {
        const notes = loadNotes()
        if (doesNoteExist(title, notes)) {
            console.log(`The note "${title}" already exists`);
        } else {
            const newNotes = notes.concat({
                "title": title,
                "body": body
            })
            saveNotes(newNotes)
        }
    } else {
        console.log("The title can't be empty");
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    if (doesNoteExist(title, notes)) {
        console.log("removing notes");
        const notesUpdated = notes.filter(note => note.title !== title)
        saveNotes(notesUpdated)
    } else {
        console.log(`The note "${title}" does not exist.`);
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    if (doesNoteExist(title, notes)) {
        const note = notes.find(note => note.title === title)
        printNote(note)
    } else {
        console.log(`The note "${title}" does not exist.`);
    }
}

const listNotes = () => {
    const notes = loadNotes()
    debugger
    notes.forEach(note => {
        console.log(`  - ${note.title}`);
    });
}

const loadNotes = () => {
    try {
        const fileBuffer = fs.readFileSync(savedFile)
        const fileToString = fileBuffer.toString()
        try {
            return JSON.parse(fileToString)
        } catch (error) {
            return []
        }
    } catch (error) {
        console.log(`The file ${savedFile} does not exist`);
        throw error
    }
}

const printNote = (note) => {
    console.log(`Note's title : ${note.title}`);
    console.log(`Note's body: ${note.body}`);
}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync(savedFile, notesJson)
}

const doesNoteExist = (title, notes) => {
    return notes.some(note => note.title === title)
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    readNote,
    listNotes
}
