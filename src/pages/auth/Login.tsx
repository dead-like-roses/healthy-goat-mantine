import {Anchor, Button, Center, Group, Image, Paper, PasswordInput, Text, TextInput, Title} from '@mantine/core';
import {useForm} from "@mantine/form";
import logo from "../../assets/logo_200.jpg";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Nieprawidłowy adres email'),
        }
    })
    const navigate = useNavigate()
    return (
        <Center style={{height: '100%'}}>
            <Paper shadow="xs" radius="md" p="md" withBorder>
                <Center>
                    <Image src={logo}/>
                </Center>
                <Title align="center" order={1} mt='md'>
                    Zaloguj się do Bella Koza
                </Title>
                <form onSubmit={form.onSubmit((values => console.log(values)))}>
                    <Group direction="column" mt='md' grow>
                        <TextInput required label="E-mail"
                                   placeholder="example@example.com" size="lg" {...form.getInputProps('email')} />
                        <PasswordInput required label="Hasło"
                                       placeholder="Hasło" size="lg" {...form.getInputProps('password')} />
                        <Button type="submit" size="lg" mt='md' color="green">Zaloguj się</Button>
                        <Text align='center'>Nie masz jeszcze konta? {' '}
                            <Anchor component="button" type="button"
                                    onClick={() => navigate("/rejestracja")}> Stwórz je</Anchor>
                        </Text>
                    </Group>
                </form>
            </Paper>
        </Center>

    );
}

export default Login;