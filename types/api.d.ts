// For controller, not resolver
export class CreatePronounceActionInputForController {
  pronounceWord: string;
  pronounceKana: string;
}

export class CreatePronounceActionInputForService extends CreatePronounceActionInputForController {
  pronounceScore: number;
}
