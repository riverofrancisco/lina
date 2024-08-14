export const calculateTimeLeft = (targetDate: Date) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      días: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }

  return timeLeft;
};
