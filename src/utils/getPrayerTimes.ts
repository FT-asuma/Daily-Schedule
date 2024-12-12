export const getPrayerTimes = async (city: string) => {
  const response = await fetch(
    `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Uzbekistan&method=2`
  );
  const data = await response.json();
  return data.data.timings;
};
