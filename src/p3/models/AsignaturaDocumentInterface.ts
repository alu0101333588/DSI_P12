import { Document, Schema, model } from 'mongoose';
import validator from 'validator';

export interface AsignaturasDocumentInterface extends Document {
    nombre: string,
    descripcion: string
}


const AsignaturasNoteSchema = new Schema<AsignaturasDocumentInterface>({
    nombre: {
        type: String,
        required: true,
        trim: true,
        uniqued: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    }
});

export const Asignatura = model<AsignaturasDocumentInterface>('Asignatura', AsignaturasNoteSchema);