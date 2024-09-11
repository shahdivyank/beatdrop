const approximateLocation = (
  latitude: number,
  longitude: number,
  precision: number = 1,
) => {
  const latOffset = (Math.random() - 0.5) / Math.pow(10, precision);
  const longOffset = (Math.random() - 0.5) / Math.pow(10, precision);

  const approxLat = latitude + latOffset;
  const approxLong = longitude + longOffset;

  return {
    latitude: parseFloat(approxLat.toFixed(precision)),
    longitude: parseFloat(approxLong.toFixed(precision)),
  };
};

export default approximateLocation;
