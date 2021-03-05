import {TextField, Label, FieldTip} from './styles'

export interface TextInputProps {
  labelText:string 
  tipText?:string
}

const TextInput:React.FC<TextInputProps> = ({tipText, labelText, ...props}) => {
  return (
    <>
      <Label>{labelText}</Label>
      <TextField />
      {tipText && (
        <FieldTip>{tipText}</FieldTip>
      )}
    </>
  )
}

export default TextInput