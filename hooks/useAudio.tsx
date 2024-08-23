import { useState, useEffect } from "react";
import { Audio } from "expo-av";

const useAudio = (url: string): [boolean, () => void] => {
  const [audio, setAudio] = useState<Audio.Sound>();
  const [playing, setPlaying] = useState<boolean>(false);

  const audioToggle = () => {
    setPlaying(!playing);
  };

  const load = async () => {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: false },
    );

    setAudio(playbackObject);
  };

  useEffect(() => {
    if (!audio) load();

    return audio
      ? () => {
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  useEffect(() => {
    playing ? audio?.playAsync() : audio?.pauseAsync();
  }, [playing]);

  return [playing, audioToggle];
};

export default useAudio;
