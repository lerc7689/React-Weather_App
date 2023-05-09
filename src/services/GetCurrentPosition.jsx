const getCurrentPosition = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    };
  } catch (_) {
    return null;
  }
};

export default getCurrentPosition;
