import dayjs from "dayjs";

const calculateBiorhythm = (birthDate: string, targetDate: string, cycle: number) => {
  const birthDay = dayjs(birthDate).startOf("day");
  const targetDay = dayjs(targetDate).startOf("day");
  const diff = targetDay.diff(birthDay, "day");
  return Math.sin((2 * Math.PI * diff) / cycle).toFixed(2);
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
  const data = [];
  const col = [
    { type: "string", label: "日付" },
    { type: "string", role: "annotation" },
    { type: "number", label: "身体" },
    { type: "number", label: "感情" },
    { type: "number", label: "知性" },
  ];
  data.push(col);

  const startDay = dayjs(startDate).startOf("day");
  for (let i = 0; i < duration; i++) {
    const targetDay = startDay.add(i, "day").toISOString();
    const result = calculateBiorhythms(birthDate, targetDay);
    const annotation = i === 15 ? "" : null;
    const row = [dayjs(targetDay).format("MM/DD"), annotation, result.physical, result.emotional, result.intellectual];
    data.push(row);
  }
  return data;
};
