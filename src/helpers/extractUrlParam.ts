function extractUrlParam(urlParams: string, key: string): string | null {
  let value = null;

  urlParams.split('&').forEach((element) => {
    if (element.startsWith(`${key}=`)) {
      value = element.substr(key.length + 1);
    }
  });
  return value;
}

export { extractUrlParam };
