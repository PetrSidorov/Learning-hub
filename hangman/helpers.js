export async function tryCatch(promise) {
  try {
    return [null, await promise];
  } catch (e) {
    return [e, null];
  }
}
