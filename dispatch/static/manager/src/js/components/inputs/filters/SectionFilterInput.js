import React from 'react'
import { connect } from 'react-redux'

import FilterSelectInput from './FilterSelectInput'

import sectionsActions from '../../../actions/SectionsActions'

class SectionFilterInputComponent extends React.Component {

  listSections(query) {
    let queryObj = {}

    if (query) {
      queryObj['q'] = query
    }

    this.props.listSections(this.props.token, queryObj)
  }

  render() {
    return (
      <FilterSelectInput
        selected={this.props.selected}
        results={this.props.sections}
        entities={this.props.entities.sections}
        update={(selected) => this.props.update(selected)}
        fetchResults={(query) => this.listSections(query)}
        attribute='name'
        icon='projects'
        label='Section'
        editMessage='Filter by section' />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.app.sections.list,
    entities: {
      sections: state.app.entities.sections
    },
    token: state.app.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listSections: (token, query) => {
      dispatch(sectionsActions.list(token, query))
    }
  }
}

const SectionFilterInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionFilterInputComponent)

export default SectionFilterInput
