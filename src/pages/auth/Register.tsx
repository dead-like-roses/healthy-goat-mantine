import {Anchor, Button, Center, Group, Image, Paper, PasswordInput, Text, TextInput, Title} from '@mantine/core';
import {useForm} from "@mantine/form";
import logo from "../../assets/logo_200.jpg";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validate: {
            name: (value) => value.length >= 3 ? null : 'Imię i nazwisko musi miec minimum 3 znaki',
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Nieprawidłowy adres email'),
            password: (value) => value.length >= 8 ? null : 'Hasło musi mieć minimum 8 znaków'
        }
    })
    const navigate = useNavigate();
    return (
        <Center style={{height: '100%'}}>
            <Paper shadow="xs" radius="md" p="md" withBorder>
                <Center>
                    <Image src={logo}/>
                </Center>
                <Title align="center" order={1} mt='md'>
                    Zarejestruj się do Bella Koza
                </Title>
                <form onSubmit={form.onSubmit((values => console.log(values)))}>
                    <Group direction="column" mt='md' grow>
                        <TextInput  required label="Imię i nazwisko" placeholder="Imię i nazwisko" size="lg" {...form.getInputProps('name')}/>
                        <TextInput required label="E-mail"
                                   placeholder="example@example.com" size="lg" {...form.getInputProps('email')} />
                        <PasswordInput required label="Hasło"
                                       placeholder="Hasło" size="lg" {...form.getInputProps('password')} />
                        <Button type="submit" size="lg" mt='md' color="green">Zarejestruj się</Button>
                        <Text align='center'>Masz już konto? {' '}
                            <Anchor component="button" type="button"
                                    onClick={() => navigate("/login")}> Zaloguj się</Anchor>
                        </Text>
                    </Group>
                </form>
            </Paper>
        </Center>
    );
}

export default Register;