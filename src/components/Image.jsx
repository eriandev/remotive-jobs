import { BASE_URL } from '../utils/constants'

/**
 * @param {object} params
 * @param {string=} params.alt
 * @param {string=} params.name
 * @param {string=} params.src
 * @param {number=} params.height
 * @param {number=} params.width
 * @param {string=} params.className
*/
export default function Image ({ alt, name, src, height, width, className }) {
  const localResource = name ? `${BASE_URL}${name}` : `${BASE_URL}not-found.png`
  const source = src?.startsWith('http') ? src : localResource

  return (
    <img alt={alt} src={source} height={height} width={width} className={className} />
  )
}
