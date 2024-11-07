import { FormComponentProps, FormStep } from "../../../interfaces/formStep.ts";
import { sixthStepInfo } from "../../../constants/sixthStepInfo.ts";
import styles from "./sixthStep.module.css";
import { StepContainer } from "../stepContainer/StepContainer.tsx";
import Arrow from "../../../../../assets/arrow.png";


export const SixthStepComponent = ({ handleSetStep  , handleResetStepData }: FormComponentProps )=> {

    return (
        <StepContainer>
            <h2 className={styles.text}><span
                className={styles.thanksText}>{sixthStepInfo.firstPartTitle}</span> {sixthStepInfo.secondPartTitle}</h2>
            <p className={styles.secondText}>{sixthStepInfo.subtitle}</p>
            <div className={styles.containerButtons}>
                <button  className={styles.button} onClick={() => {
                    handleSetStep(FormStep.STEP_ONE)
                    handleResetStepData()
                }}>Finalizar
                    <img className={styles.arrow} src={Arrow} alt="flecha hacia la derecha"/>
                </button>

            </div>
        </StepContainer>
    );
};
