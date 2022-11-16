import { AuthProvider } from './auth/authContext';
import { FeaureFlagsProvider } from './featureFlags/featureFlags';

export const ContextProviders = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <FeaureFlagsProvider>
      <AuthProvider>{children}</AuthProvider>
    </FeaureFlagsProvider>
  );
};

export default ContextProviders;
