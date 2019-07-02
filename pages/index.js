import React, { useState } from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Examples from '../components/examples'

import Link from 'next/link'

class Index extends React.Component {
  // static getInitialProps ({ reduxStore, req }) {
  //   const isServer = !!req
  //   reduxStore.dispatch(serverRenderClock(isServer))

  //   return {}
  // }

  // componentDidMount () {
  //   const { dispatch } = this.props
  //   this.timer = startClock(dispatch)
  // }

  // componentWillUnmount () {
  //   clearInterval(this.timer)
  // }

  render () {
    return (
      <div className="container">
        {/* <Examples /> */}
        
        <Link href="/BookPage"><button className="btn btn-info">Click for books</button></Link>
      </div>
    )
  }
}

export default connect()(Index)
