/**
 * Retorna um novo array com o valor na posição i atualizado.
 */
export function arrayUpdated<T extends any[], V = number>(
  arr: T, i: number, newValue: (oldValue: T[number]) => V
) {
  const newArr = [...arr];
  newArr[i] = newValue(newArr[i]);
  return newArr;
}
