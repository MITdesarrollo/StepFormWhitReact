
import { sixthStepInfo } from "../../../constants/sixthStepInfo.ts";
import styles from "./sixthStep.module.css";
import { StepContainer } from "../stepContainer/StepContainer.tsx";



export const SixthStepComponent = ()=> {

    return (
        <StepContainer>
            <h2 className={styles.text}><span
                className={styles.thanksText}>{sixthStepInfo.firstPartTitle}</span> {sixthStepInfo.secondPartTitle}</h2>
            <p className={styles.secondText}>{sixthStepInfo.subtitle}</p>
            <div className={styles.containerButtons}>
                <a className={styles.link} href={"https://www.customerscoops.com/"}>Finalizar
                </a>

            </div>
        </StepContainer>
    );
};
