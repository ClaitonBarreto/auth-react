//my components
import PButton from '@components/Button/Primary'
import TextField from '@components/TextInput'

//styles
import { 
  Container,
  Formulary ,
  Header,
  FormControl
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
          <TextField labelText="E-mail or username"/>
        </FormControl>
        <FormControl>
          <TextField 
          labelText="Password" 
          tipText="Must be 8 characters at least"
        />
        </FormControl>
        <FormControl>
          <PButton text="Sign in" />
        </FormControl>
      </Formulary>
    </Container>
  )

}

export default Login