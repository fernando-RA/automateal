import styles from './Subtitle.module.scss';
export interface ISubtitleProps {
  textValue: string;
}

const Subtitle: React.FC<ISubtitleProps> = ({ textValue }) => {
  return (
    <div className={styles.subtitle}>
      <h2>{textValue}</h2>
    </div>
  );
};

export default Subtitle;
