import React from "react";
import { View, Text } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import HomeDashboard from "./src/components/Dashboard/Home";

export default function App() {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<HomeDashboard />} />
                <Route path="/Home" element={<HomeDashboard />} />
                <Route path="/dashboard" element={<HomeDashboard />} />
                <Route path="*" element={
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Page not found</Text>
                    </View>
                } />
            </Routes>
        </NativeRouter>
    );
}