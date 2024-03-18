const AppError = require("../utils/AppError")

class UsersController {
  /*
    index - GET para listar varios registros
    show - GET exibir um registro especifico
    create - POST criar um registro
    update - PUT para atualizar um registro
    delete - DELETE para deletar um registro
  */
 create(req, res) {
  const { name, email, password } = req.body

  if(!name) {
    throw new AppError("Nome é obrigatório")
  }

  res.status(201).json({ name, email, password })
 }
}

module.exports = UsersController