import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function AppContainer() {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View />;
    }
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text>AppContainer</Text>
            <CameraView style={styles.camera}>
                <View style={styles.buttonContainer}>
                    <View style={styles.mask}>
                        <View style={styles.maskScan} />
                        <View style={styles.scanActions}>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#ddd')}
                                useForeground={true}
                            >
                                <View style={styles.actionBtn}>
                                    <Ionicons name="close" size={40} color="#fff" />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </CameraView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    mask: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    maskScan: {
        width: '70%',
        height: 250,
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: 'transparent'
    },
    scanActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    actionBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    }
})