interface TimeLeftI {
  días: number,
  horas: number,
  minutos: number,
  segundos: number,
}

export const calculateTimeLeft = (targetDate: string): TimeLeftI => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {
    días: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  };

  if (difference > 0) {
    timeLeft = {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  } 
  return timeLeft;
};
