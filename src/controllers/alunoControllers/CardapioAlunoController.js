import { CardapioService } from "../../service/CardapioService.js";

export class CardapioAlunoController {
    static renderCardapioAluno(req, res) {
        res.status(200).render("alunoViews/dashbordCardapioAluno")
    }
}