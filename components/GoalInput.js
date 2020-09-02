import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHnadler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="ADD" onPress={addGoalHnadler} /></View>
                    <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.cancel} /></View>
                </View>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:
    {
        width: '80%',
        borderRadius: 30,
        borderColor: '#808080',
        borderWidth: 1.5,
        padding: 10,
        marginBottom: 5,
    },
    buttonContainer:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%',
    },
    button:
    {
        marginTop:10,
        width:'40%',
    }
})
export default GoalInput;