import { SafeAreaView, Text, View } from 'react-native';
import { Href, Link, useLocalSearchParams } from 'expo-router';

const stages = [
  {
    header: 'Let’s go, Bobby!',
    text: 'Welcome to Beatdrop! We are so excited to have you. Discover and share music by pinning your favorite tracks to real-world locations. ',
    button: 'Next',
    link: '/onboarding/1',
  },
  {
    header: 'Discover',
    text: 'Welcome to Beatdrop! We are so excited to have you. Discover and share music by pinning your favorite tracks to real-world locations. ',
    button: 'Next',
    link: '/onboarding/2',
  },
  {
    header: 'Drop a Beat',
    text: 'Welcome to Beatdrop! We are so excited to have you. Discover and share music by pinning your favorite tracks to real-world locations. ',
    button: 'Next',
    link: '/onboarding/3',
  },
  {
    header: 'Connect',
    text: 'Welcome to Beatdrop! We are so excited to have you. Discover and share music by pinning your favorite tracks to real-world locations. ',
    button: 'Next',
    link: '/onboarding/4',
  },
  {
    header: "Let's Get Started",
    text: 'Welcome to Beatdrop! We are so excited to have you. Discover and share music by pinning your favorite tracks to real-world locations. ',
    button: 'Done',
    link: '/dashboard',
  },
];

const OnboardingScreen = () => {
  const { stage } = useLocalSearchParams();

  const { header, text, button, link } = stages[parseInt(stage as string)];

  return (
    <SafeAreaView>
      <View className="h-full flex justify-between p-4">
        <View className="gap-3 mt-10">
          <Text className="font-bold text-4xl">{header}</Text>
          <Text className="text-3xl">{text}</Text>
        </View>
        <View className="bg-beatdrop-primary rounded-full w-full">
          <Link href={link as Href} className="w-full py-4">
            <Text className="text-center text-white text-xl font-semibold">
              {button}
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
