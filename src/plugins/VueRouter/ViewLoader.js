/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder.
 *
 * @param  {string} name [The filename (basename) of the view to load]
 */
export default function v (name) {
  return require('@/views/' + name + '.vue').default
}
