import faunadb from 'faunadb';

export class Fauna {
  private static _instance: Fauna;

  constructor() {
    console.log('Fauna constructor');
  }

  public static get instance(): Fauna {
    if (!Fauna._instance) {
      Fauna._instance = new Fauna();
    }

    return Fauna._instance;
  }
}
