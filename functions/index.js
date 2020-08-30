const functions = require('firebase-functions');
const admin = require('firebase-admin');
const key = require('./key');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert( key ),
  databaseURL: "https://voronukmaster.firebaseio.com"
});

const db = admin.firestore();

app.get('/:function', async (req, res) => {
  switch (req.params.function) {
    case 'getComments': 
      return await getComments(req, res);  
    default:
      return res.status(404).json({
        errors: 'Can not find endpoint'
      })
  }
});

app.post('/:function', async (req, res) => {
  switch (req.params.function) {
    case 'createComment': 
      return await createComment(req, res);
    case 'generate': 
      return await generate100Coments(req, res);
    default:
      return res.status(404).json({
        errors: 'Can not find endpoint'
      })
  }
});

exports.main = functions.https.onRequest(app);

async function createComment(req, res) {
    const { name, text } = req.body;
    const newComment = { name, text, date: new Date};

  try {
    await db.collection('comments/').add(newComment)
    res.status(200).send()

  }
  catch (e) {
    res.status(500).json({ errors: e })
  }
}


async function getComments(req, res) {
  try {
    const { limit, page } =  req.query;

    const newList = [];

    await db.collection('comments/').orderBy('date').get().then( snapshot => {
      if (!snapshot.empty) {
        snapshot.forEach(doc => {
          newList.push({...doc.data(), id: doc.id})
        });
      }
    });
    
    const size = newList.size;
    const startedRequestItem = limit * page;
    const endedRequestItem = limit * (page +1);

    if (limit && page) { 
      if ( size >= startedRequestItem ) {
        res.status(200).json({
          responce: newList,
          count: size
        })
      } else {
        res.status(200).json({
          respnce: newList.slice(startedRequestItem, (size > endedRequestItem)),
          count: size
        })
      }

    } else if (limit && !page) {
      res.status(200).json({
        respnce: newList.slice(0, limit),
        count: size

      })
    } else {
      res.status(200).json({
        respnce: newList,
        count: size
      })
    }

    //const response = list.docs.map(item => ({...item.data(), id: item.id}) )
  }
  catch (e) {
    res.status(500).json({ errors: e })
  }
}

async function generate100Coments(req, res) {
  try {
    const list = [];
    const collection = await db.collection('comments/');
    for(let i = 0; i <= 100; i++) {
      await collection.add({name: 'some text ' + i})
    }

    await db.collection('comments/').get().then(snapshot => {
      if (!snapshot.empty) {
        snapshot.forEach(doc => {
          list.push({...doc.data(), id: doc.id, date: new Date() })
        })
      } 
    })

    res.status(200).json(list)

  } catch (e) {
    res.status(500).json({ errors: e })
  }
} 