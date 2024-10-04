import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const NoteItem = ({ note, ...props }) => {
    return (
        <View
            {...props}
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 400,
                marginHorizontal: "auto",
                backgroundColor: "#ddd",
                marginTop: 20,
                borderRadius: 10,
                padding: 10,
            }}
        >
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <AntDesign name="checksquareo" size={24} color="green" />
                <Text numberOfLines={1} style={{ fontWeight: 700 }}>
                    {note.content}
                </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <AntDesign name="delete" size={24} color="red" />
                <AntDesign name="edit" size={24} color="yellow" />
            </View>
        </View>
    );
};

export default NoteItem;
