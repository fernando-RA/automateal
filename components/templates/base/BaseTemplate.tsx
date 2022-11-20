import styles from './BaseTemplate.module.scss';
export interface IBaseTemplateProps {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ sampleTextProp }) => {
  return <div className={styles.base_container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
