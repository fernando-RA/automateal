import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import featureDecisions from '../featureDecisions.json';

interface IFeatureFlagsContext {
  shouldShowNavBar: boolean;
}

const defaultValue: IFeatureFlagsContext = {
  shouldShowNavBar: featureDecisions.shouldShowNavBar,
};

const FeatureFlagsContext = createContext<IFeatureFlagsContext>(defaultValue);

export const FeaureFlagsProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const router = useRouter();
  const [shouldShowNavBar, setshouldShowNavBar] = useState(
    defaultValue.shouldShowNavBar
  );
  useEffect(() => {
    router.pathname.includes('/subscribe')
      ? setshouldShowNavBar(false)
      : setshouldShowNavBar(true);
  }, [router.pathname]);

  return (
    <FeatureFlagsContext.Provider value={{ shouldShowNavBar }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagsContext;
