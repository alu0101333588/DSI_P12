import { connect } from 'mongoose';
import express from 'express';
//import './db/mongoose.js';
//import { Note } from './models/note.js';

/*
connect('mongodb://127.0.0.1:27017/notes-api').then(() => {
  console.log('Connection to MongoDB server established');
}).catch(() => {
  console.log('Unable to connect to MongoDB server');
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


userRouter.get('/users', async (req, res) => {
    const filter = req.query.username?{username: req.query.username.toString()}:{};

    try {
        const users = await User.find(filter);

        if (users.length !== 0) {
        res.send(users);
      } else {
        res.status(404).send();
      }
    } catch (error) {
        res.status(500).send(error);
    }
});
  


userRouter.patch('/users', async (req, res) => {
    if (!req.query.username) {
      res.status(400).send({
        error: 'A username must be provided',
      });
    } else {
      const allowedUpdates = ['name', 'username', 'email', 'age'];
      const actualUpdates = Object.keys(req.body);
      const isValidUpdate =
        actualUpdates.every((update) => allowedUpdates.includes(update));
  
      if (!isValidUpdate) {
        res.status(400).send({
          error: 'Update is not permitted',
        });
      } else {

        try {
            const users = await 

        }
        User.findOneAndUpdate({username: req.query.username.toString()}, req.body, {
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

  

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
*/