import { useCallback, useEffect, useReducer, useRef } from "react";
import { reducer } from "./states/reducer";
import { Box, Button, ButtonGroup, Input, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useLocalStorage } from "./useLocalStorage";

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [value, setValue] = useLocalStorage([], "todos");




    const handleName = useRef<HTMLInputElement>(null)
    const handleEmail = useRef<HTMLInputElement>(null)


    // add user 

    const handleAdd = useCallback(() => {
        if (handleName.current && handleEmail.current) {
            dispatch({
                type: "ADD",
                name: handleName.current.value,
                email: handleEmail.current.value,
            })
            handleName.current.value = ''
            handleEmail.current.value = ''
        }

    }, []);



    //save user in local storage 
    useEffect(() => {
        setValue(todos)
    }, [todos])





    // useEffect(() => {
    //     window.localStorage.setItem("todos", JSON.stringify(todos))
    // }, [todos])


    // remove User 
    const deleteUser = (id: number) => {
        dispatch({
            type: "DELETE",
            id
        });
    };






    return (
        <Container bg={'#202020'} borderRadius='2xl' textAlign={"left"} my='15px' padding={5}>

            <Input
                placeholder='Enter Your Name'
                type="name" ref={handleName}
                size='sm'
                focusBorderColor='yellow.700'
                w='400px'
                margin='5px 0px'
                color={'white'}
                border={'2px solid white'}
            />
            <br />
            <Input
                placeholder='Enter Your Email'
                type="email" ref={handleEmail}
                size='sm'
                margin='5px 0px'
                focusBorderColor='yellow.700'
                w='400px'
                my={5}
                color={'white'}
            />
            <br />

            <Button onClick={handleAdd} colorScheme='yellow' color='black'>Save</Button>

            <Box mx="auto" bg='royalGreen' my={5} gap='14' padding={15} color='white'>
                {
                    todos.map(todo =>
                        <Box key={todo.id} color='whiteAlpha' border={'1px solid gray'} padding='4' textAlign={'left'} borderRadius={5} margin='5px 0px'>
                            <p>
                                User Name: {todo.name}
                            </p>
                            <p>User email: {todo.email}</p>
                            <Button fontSize={15} colorScheme='yellow' color='black' my={3} onClick={() => deleteUser(todo.id)}>DELETE</Button>
                        </Box>
                    )
                }
            </Box>
        </Container >
    );
};

export default Todos;
