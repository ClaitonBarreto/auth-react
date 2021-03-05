import { ButtonProps } from '../types.button'

import { Button } from './styles'

const PrimaryButton = ({ text }:ButtonProps) => {

    return (
        <Button>
            {text}
        </Button>
    )

}

export default PrimaryButton