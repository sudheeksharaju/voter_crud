import express from 'express'
import pg from 'pg'
import cors from 'cors'

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "voteing_system",
    password: "A1b2c3d4e5@",
    port: 5432,
})
db.connect();

const app = express()
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/insert', async function (req, res) {
    console.log(req.body)
    let { reg_no, name, voterid_no, gender, date_birth, address, imgurl, adhaarcardno,id } = req.body
    console.log(req.body);
    try {
        const result = await db.query("INSERT INTO voter_list (reg_no,name,voterid_no,gender,date_birth,address,imgurl,adhaarcardno,id) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10)", [reg_no, name, voterid_no, gender, date_birth, address, imgurl, adhaarcardno,id])
        console.log(result.rows);
        res.json("success")
    } catch (error) {
        console.log(error);
    }
})

app.post('/getUpdateData', async function (req, res) {
    console.log(req.body.id)
    try {
        const result = await db.query("SELECT * FROM voter_list WHERE id=$1", [req.body.id])
        console.log(result.rows[0]);
        res.json(result.rows[0])

    } catch (error) {
        console.log(error);
    }
})

app.get('/voter', async function (req, res) {
    // console.log(req.body) 
    try {
        const result = await db.query("SELECT * FROM voter_list");
        // console.log(result.rows);
        res.json(result.rows);

    } catch (error) {
        console.log(error);
    }
})

app.post('/delete', async function (req, res) {
    console.log(req.body.id)
    try {
        const result = await db.query("DELETE FROM voter_list where id = $1", [req.body.id])
        // console.log(result.rows);
        res.json("success")
    } catch (error) {
        console.log(error);
    }
})
app.post('/Update', async function (req, res) {
    let { id,reg_no, name, voterid_no, gender, date_birth, address, imgurl, adhaarcardno } = req.body
    try {
        const result = await db.query("UPDATE voter_list SET reg_no=$2, name=$3, voterid_no=$4, gender=$5, date_birth=$6, address=$7,imgurl=$8,adhaarcardno=$9 WHERE id=$1", [id,reg_no, name, voterid_no, gender, date_birth, address, imgurl, adhaarcardno])
        console.log(result.rows);
        res.json("success")
    } catch (error) {
        console.log(error);
    }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/contacts', async function (req, res) {

    try {
        const result = await db.query("SELECT * FROM candidate_list")
        // console.log(result.rows)
        res.json(result.rows)
    } catch (error) {
        console.log(error)
    }
    // res.json('contacts message')
  })

  app.post('/delete', async function (req, res) {
  console.log(req.body.id)
    try {
        const result = await db.query("DELETE FROM candidate_list WHERE id = $1" ,[req.body.id])
        // console.log(result.rows)
        res.json("success")

    } catch (error) {
        console.log(error)
    }
  })

  app.post('/insert', async function (req, res) {
    console.log(req.body)
    const {reg_no,name,address,symbol,party_name,id} = req.body;
      try {
          const result = await db.query("INSERT INTO candidate_list (reg_no,name,address,symbol,party_name,id) VALUES ($1,$2,$3,$4,$5) " ,[reg_no,name,address,symbol,party_name,id])
          // console.log(result.rows)
          res.json("success")
      } catch (error) {
          console.log(error) 
      }
    })  

    app.post('/getData', async function (req, res) {
        try {
            const result = await db.query("SELECT * FROM candidate_list WHERE id=$1" ,[req.body.id])
            console.log(result.rows[0])
            res.json(result.rows[0])
    
        } catch (error) {
            console.log(error)  
        }
       
      })

      app.post('/update', async function (req, res) {
        const {reg_no,name,address,symbol,imgurl,party_name,id} = req.body;
        try {
            const result = await db.query("UPDATE candidate_list SET reg_no=$1,name=$2,address=$3,symbol=$4,imgurl=$5 party_name=$6  WHERE id= $7" ,[reg_no,name,address,symbol,imgurl,party_name,id])
            
            res.json("success")
    
        } catch (error) {
            console.log(error)
        }
      })
      app.post('/voter1', async function (req, res) {
        console.log(req.body)
        const {firstname,lastname,email, password,} = req.body;
       
    
          try {
              const result = await db.query("INSERT INTO login (firstname,lastname,email,password) VALUES ($1,$2,$3,$4) " ,[firstname,lastname,email, password])
              // console.log(result.rows)
              res.json("success")
      
          } catch (error) {
              console.log(error)  
          }
        })  

app.listen(3001)
