export interface Info {
  description: string;
  stars: number;
  contributors: number;
  topLanguages: [{repos: number, color: string, name: string}];
  topRepositories: [{stars: number, name: string, contributors: number}];
}
