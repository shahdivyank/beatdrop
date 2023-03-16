import { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [audioPlaying, setPlaying] = useState(false);

  const audioToggle = () => setPlaying(!audioPlaying);

  useEffect(() => {
    audioPlaying ? audio.play() : audio.pause();
  }, [audioPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [audioPlaying, audioToggle];
};

export default useAudio;
