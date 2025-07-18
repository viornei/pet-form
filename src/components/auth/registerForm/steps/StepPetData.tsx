import { useFormContext } from "react-hook-form";
import styles from "../RegisterForm.module.css";
const StepPetData = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label className={styles.stepInput}>
        PET NAME
        <input type="text" {...register("petName", { required: true })} />
      </label>
      <div className={styles.stepRadioBlock}>
        <label className={styles.stepRadio}>
          <input
            type="radio"
            value="dog"
            {...register("petType", { required: true })}
          />
          DOG
        </label>
        <label className={styles.stepRadio}>
          {" "}
          <input
            type="radio"
            value="cat"
            {...register("petType", { required: true })}
          />
          CAT
        </label>
      </div>
      <label className={styles.stepInput}>
        PET AGE
        <input
          type="number"
          min={0}
          max={25}
          {...register("petAge", { required: true })}
        />
      </label>
    </div>
  );
};
export default StepPetData;
