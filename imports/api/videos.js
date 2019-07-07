import store from "../store/stores";


export const fetchVideos = async () => {
  const user = store.getState().login.user;
  const formData = new FormData();
  formData.append("u_id", user.users_id);
  formData.append("u_class", user.clss);
  formData.append("u_cat", user.cat);

  let response = await fetch('http://bhoomi.pe.hu/entei/getVideosByClass.php',
    { method: 'POST', body: formData }
  )
    .then(response => { return response.json() })
    .then(resData => {
      return resData
    })

  return response.videos
}
