import { connect } from 'mongoose';
import express from 'express';
import { Document, Schema, model } from 'mongoose';
//import './db/mongoose.js';
import { Asignatura, AsignaturasDocumentInterface } from "./models/AsignaturaDocumentInterface.js";
import { Estudiante, EstudianteDocumentInterface } from "./models/EstudianteDocumentInterface.js";
import validator from 'validator';



/*connect('mongodb://127.0.0.1:27017/prueba').then(() => {
  console.log('Connection to MongoDB server established');
}).catch(() => {
  console.log('Unable to connect to MongoDB server');
}); 
*/

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


export const escuelaRouter = express.Router();

app.get('*', (req, res) => {
  console.log(`por aquí`);
  return res.status(404).send();
});

// Crear un estudiante
app.post('/estudiantes', async (req, res) => {
  console.log(`CONEXIÓN`);
  try {
    const estudiante = new Estudiante(req.body);
    if (Estudiante.length !== 0) {
      estudiante.save();
      res.send(Estudiante);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }

});

// Obtener estudiantes almacenados, por email
escuelaRouter.get('/estudiantes', async (req, res) => {
  const filter = req.query.email?{email: req.query.email.toString()}:{};
  console.log(`CONEXIÓN`);

  try {
    const estudiantes = await Estudiante.find(filter); 
    if (Estudiante.length !== 0) {
      res.send(Estudiante);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }

});


escuelaRouter.delete('/estudiantes', async (req, res) => {
  if (!req.query.email) {
    res.status(400).send({
      error: 'A student must be provided',
    });
  } else {
    Estudiante.findOne({email: req.query.email.toString()}).then((estudiante) => {
      if (!estudiante) {
        res.status(404).send();
      } else {
        // Delete all user notes before deleting the user
        return Estudiante.deleteMany({owner: estudiante._id}).then((result) => {
          if (!result.acknowledged) {
            res.status(500).send();
          } else {
            // Delete the user
            return Estudiante.findByIdAndDelete(estudiante._id).then((user) => {
              res.send(user);
            });
          }
        });
      }
    }).catch((error) => {
      res.status(500).send(error);
    });
  }
});
  

// Crear una asignatura
escuelaRouter.post('/asignaturas', async (req, res) => {
  console.log(`CONEXIÓN: Crear asignatura`);
  try {
    const asignatura = new Asignatura(req.body);
    if (Asignatura.length !== 0) {
      asignatura.save();
      res.send(Asignatura);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }

});

// Obtener asignaturas almacenadas, por ID único
escuelaRouter.get('/asignaturas', async (req, res) => {
  const filter = req.query.asignatura?{asignatura: req.query.asignatura.toString()}:{};
  console.log(`CONEXIÓN: Obtener asignatura`);

  try {
    const asignatura  = await Asignatura.find(filter); 
    if (Asignatura.length !== 0) {
      res.send(Asignatura);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }

});
















/*
escuelaRouter.patch('/estudiantes', async (req, res) => {
    if (!req.query.email) {
      res.status(400).send({
        error: 'A email must be provided',
      });
    } else {
      const allowedUpdates = ['email'];
      const actualUpdates = Object.keys(req.body);
      const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));
  
      if (!isValidUpdate) {
        res.status(400).send({
          error: 'Update is not permitted',
        });
      } else {

        try {
            const estudiantes = await 

        }
        Estudiante.findOneAndUpdate({email: req.query.email.toString()}, req.body, {
          new: true,
          runValidators: true,
        }).then((user) => {
          if (!user) {
            res.status(404).send();
          } else {
            res.send(user);
          }
        }).catch((error) => {
          res.status(500).send(error);
        });
      }
    }
  });



userRouter.delete('/users', async (req, res) => {
    if (!req.query.username) {
      res.status(400).send({
        error: 'A username must be provided',
      });
    } else {
      User.findOne({username: req.query.username.toString()}).then((user) => {
        if (!user) {
          res.status(404).send();
        } else {
          // Delete all user notes before deleting the user
          return Note.deleteMany({owner: user._id}).then((result) => {
            if (!result.acknowledged) {
              res.status(500).send();
            } else {
              // Delete the user
              return User.findByIdAndDelete(user._id).then((user) => {
                res.send(user);
              });
            }
          });
        }
      }).catch((error) => {
        res.status(500).send(error);
      });
    }
  });
*/
  

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
