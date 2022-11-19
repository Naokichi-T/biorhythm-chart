import dayjs from "dayjs";

const calculateBiorhythm = (birthDate: string, targetDate: string, cycle: number) => {
  const birthDay = dayjs(birthDate).startOf("day");
  const targetDay = dayjs(targetDate).startOf("day");
  const diff = targetDay.diff(birthDay, "day");
  return Math.sin((2 * Math.PI * diff) / cycle);
};

export const calculateBiorhythms = (birthDate: string, targetDate: string) => {
  return {
    date: targetDate,
    physical: calculateBiorhythm(birthDate, targetDate, 23),
    emotional: calculateBiorhythm(birthDate, targetDate, 28),
    intellectual: calculateBiorhythm(birthDate, targetDate, 33),
  };
};

export const getCalculateBiorhythmData = (birthDate: string, startDate: string, duration: number) => {
  const data: any[][] = [["日付", "身体", "感情", "知性"]];
  const startDay = dayjs(startDate).startOf("day");
  for (let i = 0; i < duration; i++) {
    const targetDay = startDay.add(i, "day").toISOString();
    const result = calculateBiorhythms(birthDate, targetDay);
    data.push([dayjs(targetDay).format("MM/DD"), result.physical, result.emotional, result.intellectual]);
  }
  return data;
};
