//my components
import PButton from '@components/Button/Primary'

//styles
import { 
    Container,
    Formulary ,
    Header,
    FormControl,
    Label,
    TextField,
    FieldTip
} from './styles'

const Login = () => {

    return (
        <Container>
            <Header>
                <h2>Hello, friend!</h2>
                <h3>Let's build somenthing great</h3>
            </Header>
            <Formulary>
                <FormControl>
                    <Label>Email or username</Label>
                    <TextField type="text"/>
                </FormControl>
                <FormControl>
                    <Label>Password</Label>
                    <TextField type="password" security="0"/>
                    <FieldTip>Must be 8 characters at least</FieldTip>
                </FormControl>
                <FormControl>
                    <PButton text="Sign in" />
                </FormControl>
            </Formulary>
        </Container>
    )

}

export default Login