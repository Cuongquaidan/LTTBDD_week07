import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import NoteItem from "./components/NoteItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
const Edit = ({ navigation, route }) => {
    const name = route.params.name;
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://66f5f8bb436827ced97590b0.mockapi.io/api/v1/notes/${name}`
                );
                if (!response.ok) throw new Error("Fetch notes failed");
                const notes = await response.json();
                setData(notes);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [name]);

    return (
        <SafeAreaView>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 20,
                }}
            >
                <Pressable
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                >
                    {" "}
                    <MaterialIcons
                        name="keyboard-backspace"
                        size={24}
                        color="black"
                    />
                </Pressable>
                <View
                    style={{ display: "flex", flexDirection: "row", gap: 10 }}
                >
                    {" "}
                    <Image
                        source={{
                            uri: "https://images.pexels.com/photos/28210177/pexels-photo-28210177/free-photo-of-phong-c-nh-thien-nhien-mua-he-thu-v-t.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        }}
                        style={{ width: 40, height: 40, borderRadius: "50%" }}
                    ></Image>
                    <View>
                        <Text style={{ fontWeight: 700, fontSize: 16 }}>
                            Hi {data?.name}
                        </Text>
                        <Text style={{ color: "#gray", fontSize: 12 }}>
                            Have a great day a head
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View>
                    {data?.notes?.map((item) => (
                        <NoteItem note={item} key={item.id} />
                    ))}
                </View>
            </ScrollView>
            <Pressable style={{ marginTop: 60, marginHorizontal: "auto" }}>
                <Ionicons name="add-circle-sharp" size={80} color="#00BDD6" />
            </Pressable>
        </SafeAreaView>
    );
};

export default Edit;
