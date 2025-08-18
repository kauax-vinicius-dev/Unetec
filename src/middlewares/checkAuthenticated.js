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
  const tokenAluno = req.cookies.tokenAluno

  if (!tokenAluno) {
    return res.status(400).json({ mensagem: 'Token aluno nao existe' });
  }

  try {
    const dados = jwt.verify(tokenAluno, process.env.JWT_SECRET_ALUNO);
    req.user = dados;
    next();
  } catch (error) {
    return res.status(403).json({ mensagem: 'Token aluno invalido' });
  }
}

export const tokenAdminEtec = (req, res, next)=>{
  const tokenAdminEtec = req.cookies.tokenAdminEtec;

  if(!tokenAdminEtec){
    return res.status(400).json({ mensagem: 'Token admin nao existe' });
  }

  try {
    const dados = jwt.verify(tokenAdminEtec, process.env.JWT_SECRET_ADMIN);
    req.user = dados;
    next();
  } catch (error) {
    return res.status(403).json({ mensagem: 'Token admin invalido' });
  }
}
