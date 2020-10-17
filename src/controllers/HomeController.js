/* eslint linebreak-style: ["error", "windows"] */
import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Diego',
      sobrenome: 'Ricardo',
      email: 'diegoricardoweb@gmail.com',
      idade: 30,
      peso: 100,
      altura: 1.95,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
