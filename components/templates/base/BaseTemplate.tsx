import styles from './BaseTemplate.module.css';
export interface IBaseTemplateProps {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ sampleTextProp }) => {
  return <div className={styles.base_container}>{sampleTextProp}</div>
};

export default BaseTemplate;
