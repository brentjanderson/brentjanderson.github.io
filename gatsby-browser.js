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
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitterSquare,
  faMastodon,
  faLinkedin,
  faGithubSquare,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons'

export const onClientEntry = () => {
  library.add(faEnvelopeOpen)
  library.add(faBookReader)
  library.add(faHandPaper)
  library.add(faCodeBranch)
  library.add(faEnvelopeSquare)
  library.add(faTwitterSquare)
  library.add(faMastodon)
  library.add(faLinkedin)
  library.add(faGithubSquare)
  library.add(faGitlab)
}
