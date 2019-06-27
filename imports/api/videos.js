export const  fetchVideos = async () => {
  const response=await fetch("http://bhoomi.pe.hu/entei/getVideos.php")
    .then(response => response.json())
    .then(resData => {
        return  resData
    });
return response.videos
};


