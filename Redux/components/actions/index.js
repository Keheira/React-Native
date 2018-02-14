import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ListItem from '../ListItem';

const mapStateToProps = state => ({
    id: state.id,
    text: state.text,
    complete: state.complete
})

const mapDispatchToProps = (dispath) => ({
    add: (text) => {
        dispatch({
            type: 'ADD',
            text: text
        })
    },
    complete: () => {
        dispatch({
            type: 'COMPLETE'
        })
    },
    update: (text) => {
        dispatch({
            type: 'UPDATE',
            text: text
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)