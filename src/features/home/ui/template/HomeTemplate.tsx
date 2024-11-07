import React from 'react';
import { FormStep } from "../../interfaces/formStep.ts";
import styles from "./home.module.css";

import {
    FifthStepComponent,
    FirstStepComponent,
    FourthStepComponent,
    SecondStepComponent, SixthStepComponent,
    ThirdStepComponent
} from "../organisms";
import { Banner } from "../molecules/Banner.tsx";
import { ProgressionBar } from "../atoms/progressionBar/ProgressionBar.tsx";
import { LogoGift } from "../atoms/logoGif/LogoGif.tsx";

const mappedComponent = {
    [FormStep.STEP_ONE]: FirstStepComponent,
    [FormStep.STEP_TWO]: SecondStepComponent,
    [FormStep.STEP_THREE]: ThirdStepComponent,
    [FormStep.STEP_FOUR]: FourthStepComponent,
    [FormStep.STEP_FIVE]: FifthStepComponent,
    [FormStep.STEP_SIX]: SixthStepComponent,
};
const INITIAL_STEP_DATA = {
    [FormStep.STEP_ONE]: '',
    [FormStep.STEP_TWO]: '',
    [FormStep.STEP_THREE]: '',
    [FormStep.STEP_FOUR]: '',
    [FormStep.STEP_FIVE]: '',
    [FormStep.STEP_SIX]: '',
}

export const HomeTemplate: React.FC = () => {
    const [formStep, setFormStep] = React.useState<FormStep>(FormStep.STEP_ONE);
    const [stepData, setStepData] = React.useState<Record<FormStep, string>>(INITIAL_STEP_DATA);

    const handleStepData = (key: FormStep, data: string) => {
        setStepData((prevState) => ({ ...prevState, [key]: data }));
    };

    const handleSetFormStep = (step: FormStep) => {
        setFormStep(step);
    };
    const isNextStepDisable = () => {
        return stepData[formStep] === "";
    }
    const handleResetStepData = () => {
        setStepData(INITIAL_STEP_DATA)
    }
    const CurrentStep = mappedComponent[formStep];

    return (
        <main className={`${styles.containerForm} ${formStep === FormStep.STEP_SIX && styles.gradientBackground}`}>
            <ProgressionBar formStep={formStep}/>
            <Banner formStep={formStep}/>
            <section className={styles.form}>
                <LogoGift className={styles.logoBannerDesk}/>
                <CurrentStep
                    handleStepData={handleStepData}
                    handleSetStep={handleSetFormStep}
                    currentStep={formStep}
                    stepData={stepData}
                    isNextStepDisable={isNextStepDisable}
                    handleResetStepData={handleResetStepData}
                />
            </section>
        </main>
    );
};

