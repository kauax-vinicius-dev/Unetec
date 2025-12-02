export class ConfigUserController{
    static renderConfigDashbord(req, res){
        res.status(200).render("alunoViews/dashbordConfigUser");
    }
}