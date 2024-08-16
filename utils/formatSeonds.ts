/**
 * @param seconds a number representing seconds
 * @returns the seconds formatted into minutes and seconds. Example: 94 -> 1:34, 70 -> 1:10
 */
export const formatSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
};
