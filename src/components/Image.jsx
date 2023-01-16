import { BASE_URL } from '../utils/constants'

/**
 * @param {object} params
 * @param {string=} params.alt
 * @param {string=} params.name
 * @param {string=} params.src
 * @param {string=} params.className
*/
export default function Image ({ alt, name, src, className }) {
  const localResource = name ? `${BASE_URL}${name}` : `${BASE_URL}not-found.png`
  const source = src?.startsWith('http') ? src : localResource

  return (
    <img alt={alt} src={source} className={className} />
  )
}
