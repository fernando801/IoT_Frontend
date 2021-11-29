const API = 'http://cr7god.hopto.org';

const getData = async (plant) => {
  const apiURL = API;
  try {
    const response = await fetch(`${apiURL}/datos/${plant}`);
    const data = await response.json();
    // const data = {
    //   id: plant,
    //   temperature: 22,
    //   light: 1,
    //   humidity: 1,
    //   watering: 1
    // }
    console.log(data);
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
}

export default getData;
