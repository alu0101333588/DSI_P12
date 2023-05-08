/*import { MongoClient } from 'mongodb';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'notes-app';

interface NoteInterface {
  title: string,
  body: string,
  color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
}

MongoClient.connect(dbURL).then((client) => {
  const db = client.db(dbName);

  return db.collection<NoteInterface>('notes').insertMany([
    {
      title: 'Yellow note',
      body: 'This is a yellow note',
      color: 'yellow',
    },
    {
      title: 'Magenta note',
      body: 'This is a magenta note',
      color: 'magenta',
    },
  ]);
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});*/


// sudo /home/usuario/mongodb/bin/mongod --dbpath /home/usuario/mongodb-data/




// Note - nombre del modelo 
// NoteSchema - Esquema en el que se basa el modelo

// unique - debe ser único el atributo
// required - obligatorio
// trim - quita espacios al principio y al final
// default - valor por defecto, en caso de no indiciar alguno

// import './db/mongoose.js';

import { Document, connect, model, Schema } from 'mongoose';

connect('mongodb://127.0.0.1:27017/notes-app').then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

interface NoteDocumentInterface extends Document {
  title: string,
  body: string,
  color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
}

const NoteSchema = new Schema<NoteDocumentInterface>({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  color: {
    type: String,
  },
});

const Note = model<NoteDocumentInterface>('Note', NoteSchema);

const note = new Note({
  title: 'Red note',
  body: 'This is a red note',
  color: 'red',
});

note.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
