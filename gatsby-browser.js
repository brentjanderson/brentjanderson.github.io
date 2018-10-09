/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelopeOpen,
  faBookReader,
  faHandPaper,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'

export const onClientEntry = () => {
  library.add(faEnvelopeOpen)
  library.add(faBookReader)
  library.add(faHandPaper)
  library.add(faCodeBranch)
}
