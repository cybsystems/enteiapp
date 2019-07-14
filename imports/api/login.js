export const checkLogin = async (username, password) => {
  const formData = new FormData()

  const sql =
    "select * from users where activate=1 and  users_uname like binary '" +
    username +
    "' and users_password like binary '" +
    password +
    "'"
  formData.append('sql', sql)
  const response = await fetch('http://bhoomi.pe.hu/entei/query.php', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(resData => {
      return resData
    })
     
  return response.res
}
