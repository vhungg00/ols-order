import { createRenderer } from 'react-test-renderer/shallow'

import { App } from 'app'

const renderer = createRenderer()

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<App />)
    const renderedOutput = renderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
