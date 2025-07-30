import {Text, View, Image, Animated} from 'react-native';
import '../globals.css';
import {images} from "@/constants/images";
import ScrollView = Animated.ScrollView;
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

export default function HomeScreen() {
    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0"/>
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}
                        contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}>
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>

                <View className="flex-1 mt-5">
                    <SearchBar />
                </View>
            </ScrollView>
        </View>
    );
}
