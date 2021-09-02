import TodoManager from '../services/todoManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state),
	input: '',
});

const toggleTodo = ({ state, data }) => ({
	todos: TodoManager.toggleTodo(state.todos, data),
});

const toggleAllTodos = ({ state, data }) => ({
	todos: TodoManager.toggleAllTodos(state.todos, data),
});

const removeTodo = ({ state, data }) => ({
	todos: TodoManager.removeTodo(state.todos, data),
});

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleAllTodos,
	removeTodo,
};

export default actions;
