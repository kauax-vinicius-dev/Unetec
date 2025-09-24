export class ViewsController {

  static redirectHome(req, res) {
    res.status(200).redirect("/home");
  }

  static renderHome(req, res) {
    res.status(200).render("pagInicial");
  }

  static renderLogout(req, res) {
    res.status(200).render("logout");
  }

  static renderLogin(req, res) {
    res.status(200).render("login");
  }

  static renderRegister(req, res) {
    res.status(200).render("register");
  }

}