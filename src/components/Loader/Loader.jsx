import { Oval } from 'react-loader-spinner';
import { Container } from './Loader.styled';


export const Loader = () => {
    return (
        <Container>
            <Oval
                height={80}
                width={80}
                color="rgb(233 230 118)"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="rgb(145 112 14)"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </Container>
    )
}