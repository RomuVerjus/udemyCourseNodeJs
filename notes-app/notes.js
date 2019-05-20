const fs = require('fs');

const getNotes = () => "youNotes ..."
const savedFile = "notes.json"

const addNote = (title, body) => {
    try {
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

    } catch (error) {
        console.log(error);
        console.log(`The file ${savedFile} does not exist`);
    }
}

const loadNotes = () => {
    const fileBuffer = fs.readFileSync(savedFile)
    const fileToString = fileBuffer.toString()

    try {
        return JSON.parse(fileToString)
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync(savedFile, notesJson)
}

const doesNoteExist = (title, notes) => {
    const notesTitle = notes.map(note => note.title)
    return notesTitle.includes(title)
}

module.exports = {
    getNotes,
    addNote
};
