const express = require("express");

function auth(request, response, next) {
  console.log("autenticated");
  next();
}

module.exports = auth;
