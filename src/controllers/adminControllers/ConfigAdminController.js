export class ConfigAdminController {
    static renderDashbordConfig(req, res) {
        res.status(200).render("adminViews/dashbordConfigAdmin")
    }
}