interface SchemaLogin {
  email?: string,
  password?: string,
}

interface SchemaSign {
  email?: string,
  pass?: string,
  passAgain?: string,
}

export { SchemaLogin, SchemaSign };