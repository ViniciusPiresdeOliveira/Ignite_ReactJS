import { Play } from "phosphor-react"
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        type="text"
                        id="task"
                        list="task-suggestions"
                        placeholder="Dê um nome para o seu projeto" />

                    <datalist id="task-suggestions">
                        <option value="Projeto 01" />
                        <option value="Projeto 02" />
                        <option value="Projeto 03" />
                        <option value="Projeto 04" />
                        <option value="Projeto 05" />
                    </datalist>

                    <label htmlFor="minuteAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        step={5}
                        min={5}
                        max={60}
                        id="minuteAmount"
                        placeholder="00" />

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>
                <StartCountdownButton disabled type="submit">
                    <Play size={24} />
                    Começar</StartCountdownButton>
            </form>
        </HomeContainer>
    );
}

export default Home