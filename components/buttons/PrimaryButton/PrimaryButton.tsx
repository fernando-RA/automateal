import styles from './PrimaryButton.module.scss';

export interface IPrimaryButton {
  label: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ label }) => {
  return (
    <button className={`${styles.container} ${styles.primary_button}`}>
      {label}
    </button>
  );
};

export default PrimaryButton;
