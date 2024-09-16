
class BooksControllerApi {
    async bookDownLoad (req,res) {
        const {id} = req.params
        console.log(id)
    }

}

module.exports = BooksControllerApi