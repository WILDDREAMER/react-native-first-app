import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, ScrollView, Text, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false)

	const addGoalHandler = goalTitle => {
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ key: Math.random().toString(), val: goalTitle }
		]);
		setIsAddMode(false);
	};

	const deleteGoalHnadler = goalKey => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goalKey != goal.key);
		});
	}

	const disableModel = () => {
		setIsAddMode(false);
	}

	return (
		<View style={styles.screen}>
			<Button title='Add goal' onPress={() => setIsAddMode(true)} />
			<GoalInput onAddGoal={addGoalHandler} visible={isAddMode} cancel={disableModel} />
			<FlatList
				data={courseGoals}
				renderItem={itemData =>
					<GoalItem
						id={itemData.item.key}
						onDelete={deleteGoalHnadler}
						title={itemData.item.val}
					/>
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create
	({
		screen:
		{
			padding: 50,
		},
	});

//row -> main axis : left to right
//       cross axis : top to buttom

//column -> main axis : right to left
//            cross axis : buttom to top

//justifyContent to organise elements along the main axis
//alignItems to organise elements around the cross axis