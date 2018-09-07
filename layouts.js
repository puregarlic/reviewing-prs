import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, width, color } from 'styled-system'

const Flex = styled.div(
  [],
  {
    display: 'flex',
    justifyContent: 'center',
    '@media print': {
      display: 'none'
    }
  },
  props => props.css,
  space,
  width,
  color
)

Flex.propTypes = {
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes
}

const Root = styled.div([], {
  width: '100vw',
  height: '100vh'
})

const Box = styled.div(
  [],
  {
    flex: 'none'
  },
  props => props.css,
  width,
  space,
  color
)

export const SplitWithTitle = ({ children }) => {
  const [title, one, ...rest] = React.Children.toArray(children.props.children)

  return (
    <Root>
      <Flex
        css={{
          height: '100%',
          flexDirection: `column`
        }}
      >
        <Box
          css={{
            textAlign: 'center',
            display: 'block',
            marginBottom: '1em'
          }}
        >
          {title}
        </Box>
        <Flex
          css={{
            alignItems: 'stretch',
            height: 'auto'
          }}
        >
          <Box
            width={1 / 2}
            css={{
              textAlign: 'center'
            }}
          >
            <Box
              css={{
                display: 'inline-block',
                textAlign: 'left',
                width: 'auto',
                marginLeft: '15%',
                marginRight: '5%'
              }}
            >
              {one}
            </Box>
          </Box>
          <Box
            width={1 / 2}
            css={{
              textAlign: 'center'
            }}
          >
            <Box
              css={{
                display: 'inline-block',
                textAlign: 'left',
                width: 'auto',
                marginLeft: '5%',
                marginRight: '15%'
              }}
            >
              {rest}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Root>
  )
}
