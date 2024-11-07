import styles from "./banner.module.css";
import Line from "../../../../assets/line.png";
import PersonBanner from "../../../../assets/persona-banner.png";
import { FormStep } from "../../interfaces/formStep.ts";
import { LogoGift } from "../atoms/logoGif/LogoGif.tsx";

interface Props{
    formStep: FormStep
}
export const Banner = ({ formStep }: Props) => {
    const backgroundColor = (formStep === FormStep.STEP_SIX && window.innerWidth >= 992) ? styles.backgroundTransparent : styles.backgroundFigure;
    return (
        <section className={styles.containerBanner}>
            <div className={`${styles.figureBanner} ${backgroundColor}`} >
                <LogoGift className={styles.logoBanner}/>
                <div className={styles.containerPersonSteps}>
                    <p className={styles.stepsNumber}>
                        <span key={formStep} className={styles.currentStep}>{formStep}</span>
                        <img loading={"lazy"} src={Line} alt="Line" className={styles.line}/>
                        <span className={styles.totalStep}>06</span>
                    </p>
                    <img className={styles.imageBanner} src={PersonBanner}
                         alt="Hombre sonriendo mientras mira su teléfono"/>
                </div>
            </div>
        </section>
    )
}
