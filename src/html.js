import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    if (process.env.NODE_ENV === "production") {
      for (const component of this.props.headComponents) {
        if (component.type === "style") {
          const index = this.props.headComponents.indexOf(component)
          const link = <link rel="stylesheet" href={component.props["data-href"]} />
          this.props.headComponents.splice(index, 1, link)
        }
      }
    }    

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key='body'
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
