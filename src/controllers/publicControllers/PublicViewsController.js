export class ViewsController {

  static redirectHome(req, res) {
    res.status(200).render("publicViews/home");
  }

  static renderLogout(req, res) {
    res.status(200).render("publicViews/logout");
  }

  static renderLogin(req, res) {
    res.status(200).render("publicViews/login");
  }

  static renderRegister(req, res) {
    res.status(200).render("publicViews/register");
  }

 
}