import { View, Text } from "react-native";
import React from "react";
import SkeletonLoader from "expo-skeleton-loader";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utils/ResponsiveLayout";
import { COLORS } from "../utils/Colors";

const Loader = () => {
    const numberofPost = new Array(4).fill(null);

    return (
        <SkeletonLoader
            duration={1000}
            highlightColor="#F9C5B9"
            boneColor={COLORS.BUTTON_COLOR}
            style={{
                height: DEVICE_HEIGHT,
                width: DEVICE_WIDTH,
                position: "absolute",
                backgroundColor: COLORS.BG_COLOR,
            }}
        >
            <SkeletonLoader.Container
                style={{
                    marginTop: 60,
                    marginHorizontal: 20,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <SkeletonLoader.Item
                    style={{ height: 60, width: 60, borderRadius: 60 }}
                />

                <SkeletonLoader.Item
                    style={{
                        height: 10,
                        width: 160,
                        borderRadius: 60,
                        marginLeft: 20,
                    }}
                />
            </SkeletonLoader.Container>
            <SkeletonLoader.Item
                    style={{
                        height: 10,
                        width: 160,
                        borderRadius: 60,
                        marginLeft: 20,
                        marginTop: 26,
                        
                    }}
                />
                <SkeletonLoader.Item
                    style={{
                        height: 52,
                        width: DEVICE_WIDTH - 40,
                        borderRadius: 60,
                        marginLeft: 20,
                        marginTop: 20,
                        
                    }}
                />
            <SkeletonLoader.Container
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                    marginHorizontal: 20,
                    justifyContent: 'space-around'
                }}
            >
                {numberofPost.map((e) => {
                    return (
                        <SkeletonLoader.Container>
                            <SkeletonLoader.Item
                              key={e}
                                style={{
                                    height: 60,
                                    width: 60,
                                    borderRadius: 60,
                                }}
                            />
                            <SkeletonLoader.Item
                              key={e+1}
                                style={{
                                    height: 10,
                                    width: 60,
                                    borderRadius: 60,
                                    marginTop: 10,
                                }}
                            />
                        </SkeletonLoader.Container>
                    );
                })}
            </SkeletonLoader.Container>
            <SkeletonLoader.Container
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 26,
                    marginHorizontal: 20,
                }}
            >
                {numberofPost.map((e) => {
                    return (
                        <SkeletonLoader.Container>
                            <SkeletonLoader.Item
                              key={e}
                                style={{
                                    height: 180,
                                    width: 220,
                                    borderRadius: 12,
                                    marginRight: 10
                                }}
                            />
                        </SkeletonLoader.Container>
                    );
                })}
            </SkeletonLoader.Container>
            <SkeletonLoader.Container
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 26,
                    marginHorizontal: 20,
                    // justifyContent: 'space-around'
                }}
            >
                {numberofPost.map((e) => {
                    return (
                        <SkeletonLoader.Container>
                            <SkeletonLoader.Item
                              key={e}
                                style={{
                                    height: 80,
                                    width: 240,
                                    borderRadius: 12,
                                    marginRight: 10
                                }}
                            />
                        </SkeletonLoader.Container>
                    );
                })}
            </SkeletonLoader.Container>
            
        </SkeletonLoader>
    );
};

export default Loader;
