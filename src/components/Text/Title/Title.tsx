import styles from './Title.module.scss';
export interface ITitleProps {
  textValue: string;
}

const Title: React.FC<ITitleProps> = ({ textValue }) => {
  return (
    <div className={styles.title}>
      <h1>{textValue}</h1>
    </div>
  );
};

export default Title;
