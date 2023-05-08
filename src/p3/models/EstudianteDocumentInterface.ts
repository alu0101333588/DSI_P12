import { AsignaturasDocumentInterface } from './AsignaturaDocumentInterface.js';
import { Document, Schema, model } from 'mongoose';
import validator from 'validator';


export interface EstudianteDocumentInterface extends Document {
    nombre: string,
    apellidos: string,
    edad: number,
    email: string,
    asignaturas: AsignaturasDocumentInterface
}

const EstudiantesNoteSchema = new Schema<EstudianteDocumentInterface>({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellidos: {
        type: String,
        required: true,
        trim: true,
    },
    edad: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value: string) {
            if (!validator.default.isEmail(value)) {
              throw new Error('Email is invalid');
            }
        }
    },
    asignaturas: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Asignatura'
    }
});

export const Estudiante = model<EstudianteDocumentInterface>('Estudiante', EstudiantesNoteSchema);