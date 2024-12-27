const documentIdValidator = (req,res,next) =>{
    const {id} = req.params;
    //Create Regular expression to validate the id
    //Should be 24 characters long
    //Should be hexadecimal
    const regex = new RegExp(/^[a-fA-F0-9]{24}$/);
    if(!regex.test(id))
        return res.status(404).send({message : "Id is invalid"});
    next();
}

const queryValidator = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.query);
    if (error) return res.status(400).send({ message: error.details[0].message });
    next();
  };

module.exports = {documentIdValidator, queryValidator};