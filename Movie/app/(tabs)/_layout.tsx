import { Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Image, ImageBackground } from 'expo-image';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 80,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <ImageBackground
                                source={images.highlight}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 20,
                                    height: 56,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    source={icons.home}
                                    tintColor="#151312"
                                    style={{ width: 20, height: 20 }}
                                />
                                <Text
                                    style={{
                                        color: '#151312',
                                        marginLeft: 8,
                                        fontWeight: '600',
                                        fontSize: 16,
                                    }}
                                >
                                    Home
                                </Text>
                            </ImageBackground>
                        ) : (
                            <Image
                                source={icons.home}
                                tintColor="#999"
                                style={{ width: 24, height: 24 }}
                            />
                        ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search}
                            tintColor={focused ? '#151312' : '#999'}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.save}
                            tintColor={focused ? '#151312' : '#999'}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.person}
                            tintColor={focused ? '#151312' : '#999'}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default _Layout;
