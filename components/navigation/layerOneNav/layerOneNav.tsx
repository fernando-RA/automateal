import { useRouter } from 'next/router';
import { BannerLogo } from '../Logo/Logo';
import styles from './layerOneNav.module.scss';

export interface IlayerOneNavProps {
  title?: string;
  cta?: string;
}

const LayerOneNav: React.FC<IlayerOneNavProps> = ({
  title = 'O Inside Sales Turbo ja está disponivel!',
  cta = '✨Assine Agora!✨',
}) => {
  const router = useRouter();
  const handleL1NavClick = (): void => {
    router.push('/subscribe');
  };
  return (
    <div
      className={`${styles.section_banner_plus} ${styles.colored_background} ${styles.wf_section}`}
      onClick={handleL1NavClick}
    >
      <div className={`${styles.container_10} ${styles.w_container}`}>
        <a className={`${styles.div_link_plus} ${styles.w_inline_block}`}>
          <div
            className={`${styles.logo_plus} ${styles.w_embed} ${styles.desktop}`}
          ></div>
          <div
            className={`${styles.icon_plus} ${styles.w_embed} ${styles.mobile}`}
          >
            <strong>Inside Sales Turbo</strong>
            <BannerLogo></BannerLogo>
          </div>
          <div className={`${styles.text_top_banner_plus} ${styles.p_16}`}>
            <p>{title}</p> <strong>{cta}</strong>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LayerOneNav;
