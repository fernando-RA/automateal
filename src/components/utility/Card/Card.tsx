import styles from './Card.module.scss';
export interface ICardProps {
  sampleTextProp: string;
}

const Card: React.FC<ICardProps> = ({ sampleTextProp }) => {
  return <div className={styles.base_container}>{sampleTextProp}</div>;
};

export default Card;
