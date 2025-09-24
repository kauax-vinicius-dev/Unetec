export class viewsAdminController {
    static renderDashbordAdmin(req, res) {
        res.status(200).render("adminViews/dashbordAdmin");
    }

    static renderFormAvisosAdmin(req, res) {
        res.status(200).render("adminViews/formAvisosAdmin");
    }

}