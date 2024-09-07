import React, { useRef, useMemo, useState } from 'react';
import { View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Details from './details';
import Search from './search';
import { beat } from '@/types';
import MapView from 'react-native-maps';

const CreateScreen = () => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['90%'], []);
  const [beat, setBeat] = useState<beat>({
    song: '',
    artist: '',
    image: {
      uri: '',
    },
  });
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [state, setState] = useState(0);

  const addTag = (value: string) => {
    setTags([...tags, value]);
  };

  const map = useRef<MapView>(null);

  return (
    <View className="flex-1">
      <MapView
        ref={map}
        showsUserLocation
        style={{
          height: '100%',
          width: '100%',
        }}
      />
      <BottomSheet ref={ref} snapPoints={snapPoints}>
        <View className="flex items-center justify-between p-3">
          {state === 0 && (
            <Search setBeat={setBeat} handleNext={() => setState(1)} />
          )}
          {state === 1 && (
            <Details
              beat={beat}
              handleBack={() => setState(0)}
              description={description}
              setDescription={setDescription}
              addTag={addTag}
              tags={tags}
            />
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

export default CreateScreen;
