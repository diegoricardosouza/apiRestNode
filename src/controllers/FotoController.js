/* eslint linebreak-style: ["error", "windows"] */
class FotoController {
  async store(req, res) {
    res.json(req.file);
  }
}

export default new FotoController();
