module.exports = function emitLoader(content) {
  if (this.cacheable) this.cacheable();

  const compilation = this._compilation;
  const module = this._module;

  compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
    chunks.forEach((chunk) => {
      if (chunk.isInitial() && module.isInChunk(chunk)) {
        chunk.files.forEach((file) => {
          const manifest = content;
          compilation.assets[file] = {
            source: () => manifest,
            size: () => Buffer.byteLength(manifest, 'utf8'),
          };
        });
      }
    });
    callback();
  });

  return '';
};
