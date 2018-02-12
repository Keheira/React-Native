import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../../App'

const mapStateToProps = state => ({
    list: state
})

const mapDispatchToProps = (dispath) => ({
    add: (text) => {
        dispatch({
            type: 'ADD',
            list: list,
            text: text
        })
    },
    complete: () => {
        dispatch({
            type: 'Completed',
            list: list
        })
    },
    update: (text) => {
        dispatch({
            type: 'UPDATE',
            list: list,
            text: text
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)