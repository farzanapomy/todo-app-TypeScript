import { useCallback, useReducer, useRef } from "react";
import { reducer } from "./states/reducer";
import { Button, ButtonGroup, Input } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import useLocalStorage from "./useLocalStorage";

const Home = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [state, setState] = useLocalStorage("name", '')

    const handleName = useRef<HTMLInputElement>(null)
    const handleEmail = useRef<HTMLInputElement>(null)


    // add user 
    const handleAdd = useCallback(() => {
        if (handleName.current && handleEmail.current) {
            dispatch({
                type: "ADD",
                name: handleName.current.value,
                email: handleEmail.current.value
            })
            handleName.current.value = ''
            handleEmail.current.value = ''
            setState(handleEmail.current)
        }
    }, []);


    // remove User 
    const deleteUser = (id: number) => {
        dispatch({
            type: "DELETE",
            id
        })
    }


    return (
        <div>

            <Input
                placeholder='Enter Your Name'
                type="name" ref={handleName}
                size='sm'
                focusBorderColor='yellow.700'
                w='400px'
            />
            <br />
            <Input
                placeholder='Enter Your Email'
                type="email" ref={handleEmail}
                size='sm'
                focusBorderColor='yellow.700'
                w='400px'
            />
            <br />

            <ButtonGroup variant='outline' spacing='6'>
                <Button onClick={handleAdd} colorScheme='blue'>Save</Button>

            </ButtonGroup>
            <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                {
                    todos.map(todo =>
                        <GridItem key={todo.id} colSpan={2} bg='tomato'>
                            <p>
                                User Name: {todo.name}
                            </p>
                            <p>User email: {todo.email}</p>
                            {/* <button onClick={() => deleteUser(todo.id)}>Delete</button> */}
                            <Button onClick={() => deleteUser(todo.id)}>Cancel</Button>
                        </GridItem>
                    )
                }

            </Grid>



        </div >
    );
};

export default Home;