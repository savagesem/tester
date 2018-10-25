const HOST = 'https://test-api.techsee.me';

export const getTester = (testerName) => {
  return fetch(`${HOST}/api/ex/${testerName}`).then(response => {
    if (response.status < 400){
      return response.json();
    }

    throw new Error(response.statusText);
  });
};