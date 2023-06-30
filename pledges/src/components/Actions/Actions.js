import { Wrap } from '../../App.styled'
import { ActionsBlock, ActionsHeader, ActionsFooter } from './Actions.styled'
import ActionsList from './ActionsList/ActionsList'

export default function Actions(props) {
    return (
        <ActionsBlock ref={props.myRef}>
            <Wrap>
                <ActionsHeader>Our 5 actions:</ActionsHeader>
                <ActionsList />
                <ActionsFooter>Make a pledge and stick to new habits...</ActionsFooter>
            </Wrap>
        </ActionsBlock>
    )
}
