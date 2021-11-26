const API = 'http://cr7god.hopto.org';

const getData = async () => {
  const apiURL = API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.log('Fetch Error', error);
  };
}

export default getData;
