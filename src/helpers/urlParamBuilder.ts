/* eslint-disable */
function urlParamBuilder(params: unknown): string {
  let urlParam = '';
  if (params) {
    const paramKeys = Object.keys(params as any) as string[];
    for (const key of paramKeys) {
      const value = (params as any)[key];
      if (value !== undefined) {
        urlParam += key + '=' + value + '&';
      }
    }
  }
  return urlParam;
}
export { urlParamBuilder };
