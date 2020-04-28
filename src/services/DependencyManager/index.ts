import { Http } from 'services/http';

export class DependencyManager {
  private static instance: DependencyManager;
  http: Http;

  private constructor() {
    this.http = new Http({
      baseUrl: 'http://api.jenny-dong.com'
    });
  }

  public static initialize() {
    DependencyManager.instance = new DependencyManager();
  }

  public static getInstance() {
    if (!DependencyManager.instance) {
      throw new Error('>>>> DependencyManager: Not Initialized');
    }
    return DependencyManager.instance;
  }
}
