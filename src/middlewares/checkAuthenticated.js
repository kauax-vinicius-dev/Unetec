import jwt from 'jsonwebtoken';

export const authToken = (req, res, next) => {
  //pega o token nos cookies
  const token = req.cookies.token

  //verifica se o token existe
  if (!token) {
    return res.status(400).json({ mensagem: 'Token nao existe' });
  }

  try {
    // permite acessso se o token for true
    const dados = jwt.verify(token, process.env.JWT_SECRET);
    req.user = dados;
    next();
  } catch (error) {
    return res.status(403).json({ mensagem: 'Token invalido' });
  }
};

export const authTokenAluno = (req, res, next) => {
  const authTokenAluno = req.cookies.authTokenAluno

  if (!authTokenAluno) {
    return res.status(400).json({ mensagem: 'Token aluno nao existe' });
  }

  try {
    const dados = jwt.verify(authTokenAluno, process.env.JWT_SECRET_ALUNO);
    req.user = dados;
    next();
  } catch (error) {
    return res.status(403).json({ mensagem: 'Token aluno invalido' });
  }
}

export const authTokenAdmin = (req, res, next)=>{
  const authTokenAdmin = req.cookies.authTokenAdmin;

  if(!authTokenAdmin){
    return res.status(400).json({ mensagem: 'Token admin nao existe' });
  }

  try {
    const dados = jwt.verify(authTokenAdmin, process.env.JWT_SECRET_ADMIN);
    req.user = dados;
    next();
  } catch (error) {
    return res.status(403).json({ mensagem: 'Token admin invalido' });
  }
}
