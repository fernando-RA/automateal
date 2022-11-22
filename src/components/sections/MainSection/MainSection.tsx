import { ReactNode } from 'react';
import Subtitle from '../../Text/Subtitle/Subtitle';
import Title from '../../Text/Title/Title';
import Banner from '../../utility/Banner/Banner';
import styles from './MainSection.module.scss';
export interface IMainSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

const MainSection: React.FC<IMainSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <Banner id={id}>
      <div className={styles.container}>
        <Title textValue={title}></Title>
        <Subtitle textValue={subtitle}></Subtitle>
        <Subtitle textValue={description}></Subtitle>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </Banner>
  );
};

export default MainSection;
