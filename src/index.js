import * as React from 'react';

const ConfigContext = React.createContext();

export const ConfigProvider = ({ children, ...rest }) => (
  <ConfigContext.Provider value={{ ...rest }}>{children}</ConfigContext.Provider>
);

export function withConfig(Component) {
  return function ConnectedComponent(props) {
    return (
      <ConfigContext.Consumer>
        {config => <Component {...props} config={config} />}
      </ConfigContext.Consumer>
    );
  };
}

export const ConfigConsumer = ConfigContext.Consumer;
