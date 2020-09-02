import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listGoals}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listGoals:
    {
        borderRadius:20,
        padding: 10,
        borderColor: '#808080',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        marginVertical: 10,
        alignItems:'center',
    },
})

export default GoalItem;