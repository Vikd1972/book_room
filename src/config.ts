interface IConfig {
  pagination: number;
  pathToCover: string;
  pathToUserPhoto: string;
}

const config: IConfig = {
  pagination: 12,
  pathToCover: 'http://localhost:4001/covers/',
  pathToUserPhoto: 'http://localhost:4001/uploads/',
};

export default config;
