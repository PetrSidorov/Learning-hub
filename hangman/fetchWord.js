// https://random-word-api.herokuapp.com/word?number=1
export async function fetchWord() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );

  if (!response.ok) {
    throw Error(response);
  }

  const words = await response.json();
  return words[0];
}
// export function fetchWord() {
//   const responsePromise = fetch(
//     "https://random-word-api.herokuapp.com/word?number=1"
//   );

//   const jsonPromise = responsePromise.then((response) => {
//     return response.json();
//   });

//   const wordPromise = jsonPromise.then((json) => {
//     return json[0];
//   });

//   return wordPromise;
// }
