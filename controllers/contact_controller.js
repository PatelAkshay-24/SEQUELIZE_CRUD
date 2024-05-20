const db =  require('../models/contact')
const Contact = db.Contacts

const addcontact = async (req,res)=>{
   try{

    peramnent_address = req.body.peramnent_address
    current_address = req.body.current_address
    const janecontact = await Contact.create({peramnent_address,current_address})
    res.status(200).json(janecontact)

   }catch(err){
    res.status(500).send('error',err)

   }
}

module.exports = {
    addcontact
}