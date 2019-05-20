const fs = require('fs');

const getNotes = () => "youNotes ..."
const savedFile = "notes.json"

const saveNote = (title, body) => {
    if (!fs.existsSync(savedFile)) {
        fs.writeFileSync(savedFile, "")
    }

    const note = {
        title: title,
        body: body
    }

    const noteBuffer = Buffer.from(JSON.stringify(note))
    const fileBuffer = fs.readFileSync(savedFile)

    const updatedBuffer = Buffer.concat([fileBuffer, noteBuffer])

    fs.writeFileSync(savedFile, updatedBuffer)

}

module.exports = {
    getNotes,
    saveNote
};
