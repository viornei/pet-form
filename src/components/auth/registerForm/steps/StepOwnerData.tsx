import { useFormContext } from "react-hook-form";
import styles from "../RegisterForm.module.css";

const StepOwnerData = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label className={styles.stepInput}>
        YOUR NAME
        <input type="text" {...register("ownerName", { required: true })} />
      </label>
      <label className={styles.stepInput}>
        EMAIL
        <input type="email" {...register("ownerEmail", { required: true })} />
      </label>
      <label className={styles.stepInput}>
        PHONE
        <input type="tel" {...register("ownerTel")} />
      </label>
    </div>
  );
};
export default StepOwnerData;
