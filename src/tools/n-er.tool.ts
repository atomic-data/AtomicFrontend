export class NEr {
  private static VOWEL = 'AEIOUYaeiouy';

  public static addaword(word: string): string {
    return `${this.getaword(word)} ${word}`;
 }

 public static getaword(word: string): string {
  return this.VOWEL.indexOf(word[0]) > -1 && word !== 'user' ? 'an' : 'a';
 }
}
