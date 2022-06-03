import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
      console.log("placeData:",type,sw,ne)
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-key': 'f68031ddc5msh14deeb1d22be315p1aa846jsna253077f19a4',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/find',
      {
        params: { lon: lng, lat: lat },
        headers: {
          'x-rapidapi-key': '8e59401748mshf6028adabdd809dp1d1ce8jsnab01012bcb45',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
