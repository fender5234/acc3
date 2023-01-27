export default (src, handleLoad, callback) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = src;

  scriptElement.addEventListener('load', handleLoad);

  if (callback) {
    callback(scriptElement);
  }

  document.body.append(scriptElement);
};
