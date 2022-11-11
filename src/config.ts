interface IConfig {
  pathToCover: string;
  pathToUserPhoto: string;
}

const config: IConfig = {
  pathToCover: 'http://localhost:4001/covers/',
  pathToUserPhoto: 'http://localhost:4001/uploads/',
};

export default config;
