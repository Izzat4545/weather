
export function get(url,value) {
  
return fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch(error => {
    console.error(error);
  });
}




