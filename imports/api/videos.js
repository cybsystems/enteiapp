import store from "../store/stores";
import { ON_GET_VIDEOS } from "../actionTypes/actionTypes";


export const insertComment = async ({ users_id, videos_id, comment }) => {

  const sql = `insert into videos_comments (videos_id,users_id,comment) values(${videos_id},${users_id},'${comment}')`;
  const formData = new FormData()
  formData.append('sql', sql)
  formData.append('op', 'INSERT')

  const response = await fetch('http://bhoomi.pe.hu/entei/query.php', {
    method: 'POST',
    body: formData,
  }).then((res) => {
    store.dispatch({ type: ON_GET_VIDEOS })
  })

}

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
// SELECT T2.users_name,T1.comment FROM videos_comments as T1 , users as T2 where T1.videos_id=103 and T1.users_id=T2.users_id
