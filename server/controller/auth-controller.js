// registration login

// const home = async(req,res)=>{
//     router.route("/register").get((req,res)=>{
//     res.status(200).send("welcome to registation page");
// });

const register =  async(req,res)=>{
        try{
            res.status(200).send("welcome to registration pae");
        } catch (error){
            res.status(400).send("page no found");
        }
    }

module.exports = {home};
