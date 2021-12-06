import express from 'express'
const router = express.Router() 
import db from '../config/db.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
//const { registerValidation, loginValidation } = require('../validation')
//const cookieParser = require('cookie-parser')


export const CreateUser = async (req,res) => {
    const body = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    var sql = `INSERT INTO user (nama, email, password, date) VALUES ('${body.nama}', '${body.email}', '${hashedPassword}', 'CURRENT_TIMESTAMP')`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    //end of db.getConnection()
}//end of app.post(

    // const { error } = registerValidation(req.body)
    // if(error) return res.status(400).send(error.details[0].message)

    // const emailExist = await User.findOne({email: req.body.email})
    // if(emailExist) return res.status(400).send('emil already taken') 

    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(req.body.password, salt)


    // try{
    //     const savedUser = await user.save()
    //     res.send({ user: user._id })
    // }catch(err){
    //     res.status(400).send(err)
    // }


router.post("/login", (req, res)=> {
    const user = req.body.name
    const password = req.body.password
    db.getConnection ( async (err, connection)=> {
     if (err) throw (err)
     const sqlSearch = "Select * from user where nama = ?"
     const search_query = mysql.format(sqlSearch,[user])
     await connection.query (search_query, async (err, result) => {
      connection.release()
        
      if (err) throw (err)
      if (result.length == 0) {
       console.log("--------> User does not exist")
       res.sendStatus(404)
  } 
      else {
     const hashedPassword = result[0].password
     //get the hashedPassword from result
     if (await bcrypt.compare(password, hashedPassword)) {
     console.log("---------> Login Successful")
     res.send(`${user} is logged in!`)
     } 
     else {
     console.log("---------> Password Incorrect")
     res.send("Password incorrect!")
     } //end of bcrypt.compare()
   }//end of User exists i.e. results.length==0
  }) //end of connection.query()
 }) //end of db.connection()
}) //end of app.post()

//     const { error } = loginValidation(req.body)
//     if(error) return res.status(400).send(error.details[0].message)

//     const user = await User.findOne({email: req.body.email})
//     if(!user) return res.status(400).send('emil doesnt exist') 
//     const validPass = await bcrypt.compare(req.body.password, user.password)
//     if(!validPass) return res.status(400).send('invalid pasword')

//     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: '1h' })
//  //   res.cookie('jwt', token, { httpOnly: true, maxAge: 900000 })
//     res.header('auth-token', token).send(token)



/*
router.get('/logout',function(req,res){
    res.cookie('jwt')
    res.send('sori')
})
*/
/*router.get('/logout',function(req,res){
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err)
        res.sendStatus(200)
    })

})*/


//module.exports = router