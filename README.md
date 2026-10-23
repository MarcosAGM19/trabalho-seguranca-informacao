# Trabalho Prático - Segurança da Informação e Análise Forense

## Autor

Marcos André Gomes de Mello

---

## Objetivo do Projeto

Desenvolver um protótipo Web seguro aplicando conceitos de Segurança da Informação, Computação em Nuvem, HTTPS, controle de acesso, versionamento de código e práticas recomendadas pela OWASP Top 10.

---

## Infraestrutura Utilizada

### Cloud Computing

- AWS EC2 (Free Tier)
- Ubuntu Server 24.04 LTS

### Servidor Web

- Nginx

### Domínio

- projetoervidorseguro.com.br

### Criptografia

- HTTPS habilitado
- Certificado SSL/TLS emitido pela Let's Encrypt

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Nginx
- Ubuntu Server

---

## Funcionalidades

### Tela de Login

A aplicação possui uma tela de autenticação contendo:

- Usuário
- Senha
- Botão Entrar

### Página Interna

Após autenticação bem-sucedida o usuário é redirecionado para uma área interna protegida.

### Logout

A aplicação possui botão de Logout responsável por encerrar a sessão e retornar ao Login.

---

## Segurança Implementada (OWASP Top 10)

### 1. Broken Access Control

Proteção da página interna através da verificação de sessão.

```javascript
if (loggedIn !== "true") {
    window.location.href = "index.html";
}
```

### 2. Injection / Cross Site Scripting (XSS)

Sanitização dos dados informados pelo usuário.

```javascript
function sanitize(input) {
    return input.replace(/[<>&"'`]/g, "");
}
```

### 3. Identification and Authentication Failures

Validação de credenciais antes da liberação do acesso ao sistema.

```javascript
if (username === VALID_USER && password === VALID_PASS)
```

---

## Controle de Versionamento

O código-fonte encontra-se hospedado em repositório público GitHub.

Repositório:

https://github.com/MarcosAGM19/trabalho-seguranca-informacao

---

## Estrutura do Projeto

```text
trabalho-seguranca
│
├── index.html
├── home.html
├── script.js
├── style.css
├── README.md
└── .gitignore
```

---

## Desenvolvimento Assistido por Inteligência Artificial

A implementação do projeto contou com auxílio de Inteligência Artificial para:

- Geração de código
- Revisão de segurança
- Validação de requisitos
- Correção de erros
- Documentação técnica

---

## Status do Projeto

✅ Infraestrutura em Nuvem

✅ HTTPS

✅ Controle de Acesso

✅ Login

✅ Logout

✅ OWASP Top 10

✅ GitHub

✅ Documentação Técnica