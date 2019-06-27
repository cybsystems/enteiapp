export const checkLogin = async (username, password) => {
  const formData = new FormData();
   
  
  const sql="select * from users where users_uname='"+username+"' and users_password='"+password+"'"
  formData.append("sql", sql);
  const response = await fetch("http://bhoomi.pe.hu/entei/query.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(resData => {
      return resData;
    });
  return response.res;
};
