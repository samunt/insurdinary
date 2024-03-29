import {useState} from 'react';
const inputState = (initialVal) => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => {
        setValue(e.target.value)
    };
    const reset = () => {
        setValue("")
    };
    return [value, handleChange, reset];
}
export default inputState;
// an example use case would be something like
// const [age, handleAgeChange, resetAge] = useFormState("")
// you can call the state whatever, as well as the hooks
