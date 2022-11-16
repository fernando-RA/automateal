import { createContext, useState } from 'react';
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
  const [shouldShowNavBar, setshouldShowNavBar] = useState(
    defaultValue.shouldShowNavBar
  );

  return (
    <FeatureFlagsContext.Provider value={{ shouldShowNavBar }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagsContext;
