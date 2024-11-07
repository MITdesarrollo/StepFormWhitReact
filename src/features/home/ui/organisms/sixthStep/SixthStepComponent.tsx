
import { sixthStepInfo } from "../../../constants/sixthStepInfo.ts";
import styles from "./sixthStep.module.css";
import { StepContainer } from "../stepContainer/StepContainer.tsx";
import Arrow from "../../../../../assets/arrow.png";


export const SixthStepComponent = ()=> {

    return (
        <StepContainer>
            <h2 className={styles.text}><span
                className={styles.thanksText}>{sixthStepInfo.firstPartTitle}</span> {sixthStepInfo.secondPartTitle}</h2>
            <p className={styles.secondText}>{sixthStepInfo.subtitle}</p>
            <div className={styles.containerButtons}>
                <a className={styles.link} href={"https://www.customerscoops.com/"}>Finalizar
                    <img className={styles.arrow} src={Arrow} alt="flecha hacia la derecha"/>
                </a>

            </div>
        </StepContainer>
    );
};
